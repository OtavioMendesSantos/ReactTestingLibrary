import { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const CustomButton = ({ text, ...props }: CustomButtonProps) => {
  return (
    <button className={styles.button} {...props}>{text}</button>
  )
}

export default CustomButton