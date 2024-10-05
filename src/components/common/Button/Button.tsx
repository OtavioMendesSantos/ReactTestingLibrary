import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <button className={styles.button} {...props}>{children}</button>
  )
}

export default CustomButton