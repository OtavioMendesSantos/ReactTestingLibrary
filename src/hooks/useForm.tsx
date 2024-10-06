import React from 'react';

type Types = 'email' | 'password';

interface UseFormProps {
    type?: Types;
}

const useForm = ({ type }: UseFormProps) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState<null | string>(null);
    const [touched, setTouched] = React.useState(false);

    const validate = React.useCallback(
        (inputValue: string) => {
            if (type === 'email') {
                // Validação de email simples usando regex
                const regex = /\S+@\S+\.\S+/;
                if (!regex.test(inputValue)) {
                    setError('Formato de email inválido');
                    return false;
                }
            }

            if (type === 'password') {
                // Regras de validação de senha (mínimo de 6 caracteres como exemplo)
                if (inputValue.length < 6) {
                    setError('A senha deve ter no mínimo 6 caracteres');
                    return false;
                }
            }

            setError(null);
            return true;
        },
        [type]
    );

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        setTouched(true);
        validate(inputValue);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        setValue(inputValue);
        if (touched) validate(inputValue);
      };


    return {
        value,
        error, 
        onChange,
        onBlur,
        setValue, 
        validate,
    }
}

export default useForm