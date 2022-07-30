import image from '../../img/success-image.svg';
import './FormSucess.scss';

function FormSuccess(){
    return(
        <div className="input-sucess-wrap">
          <h3 className="title">
            User successfully registered
          </h3>
          <div className="input-sucess-img-wrap">
            <img src={image} alt="success registration" className="input-sucess-img"/>
          </div>
        </div>
    )
}

export default FormSuccess;