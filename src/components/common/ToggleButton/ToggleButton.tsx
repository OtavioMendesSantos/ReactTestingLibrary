import { ButtonHTMLAttributes } from "react"
import styles from "./ToggleButton.module.scss"

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ children, isActive, ...props }) => {
    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ''}`} // Aplica a classe active caso o botão esteja ativo
            {...props}
        >
            {children}
        </button>)
}

export default ToggleButton