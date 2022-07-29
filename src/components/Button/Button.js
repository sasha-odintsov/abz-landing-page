import './Button.scss'

function Button({ click, style, disabled, txt }) {
    return(
        <button type="submit" className="button" onClick={click} style={style} disabled={disabled} >{txt}</button>
    )
}

export default Button;