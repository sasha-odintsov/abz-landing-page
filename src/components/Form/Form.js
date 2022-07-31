import Input from '../Input/Input';
import './Form.scss';

function Form() {
    return(
        <div className="form">
            <div className="form-content wrapper">
                <h2 className="title">
                    Working with POST request
                </h2>
                <div>
                    <Input />
                </div>
            </div>
        </div>
    )
}

export default Form;