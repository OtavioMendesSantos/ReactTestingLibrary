import Input from "../../components/common/Input/Input"
import Button from "../../components/common/Button/Button"
import useForm from "../../hooks/useForm"

const LoginSection = () => {
    const email = useForm({ type: 'email' })
    const senha = useForm({ type: 'password' })

    const handleClick = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Clicou Login")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        register()
    }

    const register = async () => {
        try {
            const payload = {
                email: email.value,
                password: senha.value,
            };

            const options: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }

            const response = await fetch('https://reqres.in/api/login', options)
            const data = await response.json()
            window.alert(JSON.stringify(data))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', height: '100%', justifyContent: 'space-between' }}
            >
                <Input
                    label="Email"
                    error={email.error}
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                />
                <Input
                    label="Senha"
                    error={senha.error}
                    value={senha.value}
                    onChange={senha.onChange}
                    onBlur={senha.onBlur}
                />
                <Button onClick={handleClick} disabled={!!email.error || !!senha.error}>
                    Entrar
                </Button>
            </form>
            <div className="alert">
                <h1>Nota do Autor</h1>
                <p>Estou utilizando a api Reqres para simular uma autenticação, para testar o login é necessário utilizar um email e senha padrão, utilize:</p>
                <p>
                    email: eve.holt@reqres.in <br />
                    password: cityslicka
                </p>
            </div>
        </>
    )
}

export default LoginSection