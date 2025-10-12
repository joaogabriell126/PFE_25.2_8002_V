import styles from "./Modal.module.scss";
import Button from "../Button/Button.jsx"


export default function Modal({ children }) {
  return (
    // Bloco BEM: 'modal'
    <div className={styles.modal}>
      {/* Elemento BEM: 'modal__text' */}
      <p className={styles.modal__text}>{children}</p>
      
      {/* Elemento BEM: 'modal__actions' */}
      <div className={styles.modal__actions}>
        <Button variant="primary" size="small">Confirmar</Button>
        <Button variant="alternative" size="small">Cancelar</Button>
      </div>
    </div>
  );
}