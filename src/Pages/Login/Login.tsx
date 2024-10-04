import CustomButton from "../../components/common/Button/CustomButton"
import CustomInput from "../../components/common/CustomInput/CustomInput"
import styles from "./Login.module.scss"

const Login = () => {
  return (
    <main className={styles.main}>
        <section className={styles.loginContainer}>
            <CustomInput text="Email"/>
            <CustomInput text="Senha"/>
            <CustomButton text="Entrar"/>
        </section>
    </main>
  )
}

export default Login