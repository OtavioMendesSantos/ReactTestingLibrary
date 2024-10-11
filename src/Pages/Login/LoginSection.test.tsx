import '@testing-library/jest-dom';
import LoginSection from './LoginSection';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('LoginSection', () => {
    beforeEach(() => {
        // Reseta o mock antes de cada teste
        vi.restoreAllMocks();
        // Mock de window.alert
        vi.spyOn(window, 'alert').mockImplementation(() => { }); //substitui o funcionamento real do alert
    });

    test('deve renderizar o componente Login', () => {
        render(<LoginSection />);
        expect(screen.getByText('Entrar')).toBeInTheDocument();
    })

    test('deve preencher os campos de login e senha e realizar o login', async () => {
        // Mock da resposta do fetch
        const mockResponse = {
            token: "QpwL5tke4Pnpja7X4",
        };

        // Mock do fetch
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResponse),
            })
        ) as unknown as typeof fetch;

        render(<LoginSection />);

        const login: HTMLInputElement = screen.getByLabelText('Email');
        fireEvent.change(login, { target: { value: 'eve.holt@reqres.in' } });
        expect(login.value).toBe('eve.holt@reqres.in');

        const password: HTMLInputElement = screen.getByLabelText('Senha');
        fireEvent.change(password, { target: { value: 'cityslicka' } });
        expect(password.value).toBe('cityslicka');

        const button: HTMLButtonElement = screen.getByText('Entrar');
        fireEvent.click(button);

        // Verifica se a chamada fetch foi feita corretamente
        await waitFor(() => {
            expect(globalThis.fetch).toHaveBeenCalledWith(
                'https://reqres.in/api/login',
                expect.objectContaining({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: 'eve.holt@reqres.in',
                        password: 'cityslicka',
                    }),
                })
            );
        });

        // Verifica se a resposta da API foi tratada corretamente
        // Verifica se o mock do alerta foi chamado com a mensagem de erro correta
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(JSON.stringify(mockResponse));
        });
    })

    test('deve preencher os campos de login e senha e dar erro ao realizar o login', async () => {
        const mockErrorResponse = {
            error: "Email ou senha inválidos",
        };

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false, // Indica que a resposta não é bem-sucedida
                status: 401, // Código de status para erro de autenticação
                json: () => Promise.resolve(mockErrorResponse), // Responde com o erro simulado
            })
        ) as unknown as typeof fetch;

        render(<LoginSection />);

        const login: HTMLInputElement = screen.getByLabelText('Email');
        fireEvent.change(login, { target: { value: 'eve.holt@reqres.in' } });
        expect(login.value).toBe('eve.holt@reqres.in');

        const password: HTMLInputElement = screen.getByLabelText('Senha');
        fireEvent.change(password, { target: { value: 'cityslicka' } });
        expect(password.value).toBe('cityslicka');

        const button: HTMLButtonElement = screen.getByText('Entrar');
        fireEvent.click(button);

        // Verifica se a chamada fetch foi feita corretamente
        await waitFor(() => {
            expect(globalThis.fetch).toHaveBeenCalledWith(
                'https://reqres.in/api/login',
                expect.objectContaining({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: 'eve.holt@reqres.in',
                        password: 'cityslicka',
                    }),
                })
            );
        });

        // Verifica se o alerta foi chamado com a mensagem de erro correta
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(JSON.stringify(mockErrorResponse));
        });
    })
})
