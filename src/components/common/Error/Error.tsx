import styles from './Error.module.scss'

const Error = ({ error }: { error?: string | null }) => {
    return (
        <div className={styles.error}>{error}</div>
    )
}

export default Error