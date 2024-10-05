import Input from "../../components/common/Input/Input"
import Button from "../../components/common/Button/Button"

const LoginSection = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Clicou Login", e)
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
            <Input text="Email" />
            <Input text="Senha" />
            <Button onClick={handleClick}>
                Entrar
            </Button>
        </form>
    )
}

export default LoginSection