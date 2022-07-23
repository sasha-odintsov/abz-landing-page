import './Button.scss'

function Button(props) {
    return(
        <button type="button" className={props.clss}>{props.txt}</button>
    )
}

export default Button;