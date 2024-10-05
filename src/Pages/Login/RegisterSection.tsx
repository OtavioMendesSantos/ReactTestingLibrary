import Input from "../../components/common/Input/Input"
import Button from "../../components/common/Button/Button"

const RegisterSection = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Clicou Registrar", e)
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
            <Input text="Email" />
            <Input text="Senha" />
            <Input text="Confirmar Senha" />
            <Button onClick={handleClick}>
                Registrar
            </Button>
        </form>
    )
}

export default RegisterSection