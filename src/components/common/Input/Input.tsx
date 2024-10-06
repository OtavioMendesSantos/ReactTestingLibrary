import Error from '../Error/Error';
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | null;
}

const CustomInput = ({ label, error, ...props }: InputProps) => {
    return (
        <div className={styles.formControl}>
            <input type="value" required  {...props} />
            <label aria-label={label}>
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

export default CustomInput