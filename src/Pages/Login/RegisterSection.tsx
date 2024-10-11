import Input from "../../components/common/Input/Input"
import Button from "../../components/common/Button/Button"
import useForm from "../../hooks/useForm"

const RegisterSection = () => {
    const email = useForm({ type: 'email' })
    const senha = useForm({ type: 'password' })

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Clicou Registrar", e)
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

            const response = await fetch('https://reqres.in/api/register', options)
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
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    error={email.error}
                />
                <Input
                    value={senha.value}
                    onChange={senha.onChange}
                    onBlur={senha.onBlur}
                    error={senha.error}
                    label="Senha"
                />
                <Button
                    onClick={handleClick}
                    disabled={!!email.error || !!senha.error}
                >
                    Registrar
                </Button>
            </form>
            <div className="alert">
                <h1>Nota do Autor</h1>
                <p>Estou utilizando a api Reqres para simular uma autenticação, para testar o registrar é necessário utilizar um email e senha padrão, utilize:</p>
                <p>
                    email: eve.holt@reqres.in <br />
                    password: pistol
                </p>
            </div>
        </>
    )
}

export default RegisterSection