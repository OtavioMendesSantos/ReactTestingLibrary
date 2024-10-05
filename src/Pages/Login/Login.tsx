import { useState } from "react";
import ToggleButton from "../../components/common/ToggleButton/ToggleButton";
import ToggleButtonGroup from "../../components/common/ToggleButtonGroup/ToggleButtonGroup";
import styles from "./Login.module.scss"
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

type ActiveSection = "login" | "register"

const Login = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("login");

  const handleButtonClick1 = () => {
    setActiveSection('login');
  };

  const handleButtonClick2 = () => {
    setActiveSection('register');
  };

  return (
    <main className={styles.main}>
      <section className={styles.loginContainer}>
        <nav className={styles.nav}>
          <ToggleButtonGroup initialIndex={0}	>
            <ToggleButton onClick={handleButtonClick1}>Login</ToggleButton>
            <ToggleButton onClick={handleButtonClick2}>Registrar</ToggleButton>
          </ToggleButtonGroup>
        </nav>
        {activeSection === "login" ? <LoginSection /> : <RegisterSection />}
      </section>
    </main>
  )
}

export default Login