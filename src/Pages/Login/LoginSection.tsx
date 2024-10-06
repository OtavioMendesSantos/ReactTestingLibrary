import Input from "../../components/common/Input/Input"
import Button from "../../components/common/Button/Button"
import useForm from "../../hooks/useForm"

const LoginSection = () => {
    const email = useForm({ type: 'email' })
    const senha = useForm({ type: 'password' })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Clicou Login", e)
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
            <Input label="Email" {...email} />
            <Input label="Senha" {...senha} />
            <Button onClick={handleClick}>
                Entrar
            </Button>
        </form>
    )
}

export default LoginSection