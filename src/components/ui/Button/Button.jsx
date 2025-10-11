// Aqui estou importando o aquivo Button.module.scss
import "./Button.module.scss";

export default function Button({children, onClick, type = 'button', variant = 'primary'}){
    return(
        <button className={`btn btn--${variant}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}