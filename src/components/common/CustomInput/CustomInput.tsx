import styles from './CustomInput.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string
}

const CustomInput = ({ text, ...props }: InputProps) => {
    return (
        <div className={styles.formControl}>
            <input type="value" required  {...props} />
            <label>
                {text.split('').map((char: string, index: number) =>
                    <span
                        key={index}
                        style={{ transitionDelay: `${index * 50}ms` }}>
                        {char}
                    </span>
                )}
            </label>
        </div>)
}

export default CustomInput