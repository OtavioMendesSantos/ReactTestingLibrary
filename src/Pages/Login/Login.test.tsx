import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Login from './Login';

// Mock para o LoginSection e RegisterSection
vi.mock('./LoginSection', () => ({
  default: () => <div>Login Section Mock</div>,
}));

vi.mock('./RegisterSection', () => ({
  default: () => <div>Register Section Mock</div>,
}));

describe('Login Component', () => {
  test('deve renderizar a seção de login por padrão', () => {
    render(<Login />);
    
    expect(screen.getByText('Login Section Mock')).toBeInTheDocument();
  });

  test('deve alternar para a seção de registro ao clicar no botão "LogOn"', () => {
    render(<Login />);

    const registerButton = screen.getByText('LogOn');
    fireEvent.click(registerButton);

    expect(screen.getByText('Register Section Mock')).toBeInTheDocument();
    expect(screen.queryByText('Login Section Mock')).not.toBeInTheDocument();
  });

  test('deve voltar para a seção de login ao clicar no botão "LogIn"', () => {
    render(<Login />);

    const registerButton = screen.getByText('LogOn');
    fireEvent.click(registerButton);

    const loginButton = screen.getByText('LogIn');
    fireEvent.click(loginButton);

    expect(screen.getByText('Login Section Mock')).toBeInTheDocument();
    expect(screen.queryByText('Register Section Mock')).not.toBeInTheDocument();
  });
});