import './Button.scss'

function Button({ click, style, txt }) {
    return(
        <button type="button" className="button" onClick={click} style={style}>{txt}</button>
    )
}

export default Button;