import styles from './Textarea.module.scss';

export default function Textarea ({label, name, placeholder, rows = 5, error }){
    return(
        <div className={styles.textarea}>
            <label htmlFor={name} className={styles.textarea__label}>{label}</label>
            <textarea label={label} name={name} id={name} className={styles.textarea__input} placeholder={placeholder} rows={rows}></textarea>
            {error && <span className={styles.textarea__error}>{error}</span>}
        </div>
    )
}
