import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import RegisterSection from './RegisterSection';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('RegisterSection', () => {
    beforeEach(() => {
        // Reseta o mock antes de cada teste
        vi.restoreAllMocks();
        // Mock de window.alert
        vi.spyOn(window, 'alert').mockImplementation(() => { });
    })

    test('deve renderizar o componente Register', () => {
        render(<RegisterSection />);
        expect(screen.getByText('Registrar')).toBeInTheDocument();
    })

    test('deve preencher os campos de email e senha e registrar', async () => {
        const mockResponse = {
            token: "QpwL5tke4Pnpja7X4",
        }

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true, // Indica que a resposta foi bem-sucedida
                json: () => Promise.resolve(mockResponse), // Simula a conversão da resposta para JSON
            })
        ) as unknown as typeof fetch;
        render(<RegisterSection />);

        const email: HTMLInputElement = screen.getByLabelText('Email');
        fireEvent.change(email, { target: { value: 'eve.holt@reqres.in' } });
        expect(email.value).toBe('eve.holt@reqres.in');

        const password: HTMLInputElement = screen.getByLabelText('Senha');
        fireEvent.change(password, { target: { value: 'pistol' } });
        expect(password.value).toBe('pistol');

        const button: HTMLButtonElement = screen.getByText('Registrar');
        fireEvent.click(button);

        await waitFor(() => {
            expect(globalThis.fetch).toHaveBeenCalledWith(
                'https://reqres.in/api/register',
                expect.objectContaining({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: 'eve.holt@reqres.in',
                        password: 'pistol',
                    }),
                })
            );
        });

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(JSON.stringify(mockResponse));
        });
    })

    test('deve exibir uma mensagem de erro se o email for inválido', async () => {

        const mockErrorResponse = {
            error: "Email ou senha inválidos"
        }

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false, // Indica que a resposta não é bem-sucedida
                status: 401, // Código de status para erro de autenticação
                json: () => Promise.resolve(mockErrorResponse), // Responde com o erro simulado
            })
        ) as unknown as typeof fetch;

        render(<RegisterSection />);

        const email: HTMLInputElement = screen.getByLabelText('Email');
        fireEvent.change(email, { target: { value: 'eve.holt@reqres.in' } });
        expect(email.value).toBe('eve.holt@reqres.in');

        const password: HTMLInputElement = screen.getByLabelText('Senha');
        fireEvent.change(password, { target: { value: '123123' } });
        expect(password.value).toBe('123123');

        const button: HTMLButtonElement = screen.getByText('Registrar');
        fireEvent.click(button);

        await waitFor(() => {
            expect(globalThis.fetch).toHaveBeenCalledWith(
                'https://reqres.in/api/register',
                expect.objectContaining({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: 'eve.holt@reqres.in',
                        password: '123123',
                    }),
                })
            );
        });

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(JSON.stringify(mockErrorResponse));
        });

    })
})
