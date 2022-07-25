import './Card.scss'
import imageCoverOnError from '../../lib/imageCoverOnError'

function Card({ photo, name, position, email, phone }) {
    return(
        <div className="card">
            <div className="card-img-wrap">
                <img src={photo} onError={imageCoverOnError} alt="colleague" className="card-img"/>
            </div>
            <p className="card-title">{name}</p>
            <div className="card-disc">
                <p className="card-disc-item">{position}</p>
                <p className="card-disc-item">{email}</p>
                <p className="card-disc-item">{phone}</p>
            </div>
        </div>
    )
}

export default Card;