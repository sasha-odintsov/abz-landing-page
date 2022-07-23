import './styles/Button.scss'

function Button(props) {
    return(
        <button type="button" className="button">{props.txt}</button>
    )
}

export default Button;