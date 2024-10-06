import Input from "../../components/common/Input/Input"
import Button from "../../components/common/Button/Button"
import useForm from "../../hooks/useForm"

const RegisterSection = () => {
    const email = useForm({ type: 'email' })
    const senha = useForm({ type: 'password' })

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Clicou Registrar", e)
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
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
            >
                Registrar
            </Button>
        </form>
    )
}

export default RegisterSection