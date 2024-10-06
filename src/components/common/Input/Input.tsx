import Error from '../Error/Error';
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | null;
}

const Input = ({ label, error, ...props }: InputProps) => {
    const inputId = props.id || label.toLowerCase();
    return (
        <div className={styles.formControl}>
            <input id={inputId} required  {...props} />
            <label htmlFor={inputId}>
                {label.split('').map((char: string, index: number) =>
                    <span
                        key={index}
                        style={{ transitionDelay: `${index * 50}ms` }}>
                        {char}
                    </span>
                )}
            </label>
            <Error error={error} />
        </div>)
}

export default Input