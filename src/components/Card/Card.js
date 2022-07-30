import './Card.scss';
import imageCoverOnError from '../../lib/imageCoverOnError';
import Tooltip from '@mui/material/Tooltip';

function Card({ photo, name, position, email, phone }) {
    return(
        <div className="card">
            <div className="card-img-wrap">
                <img src={photo} onError={imageCoverOnError} alt="colleague" className="card-img"/>
            </div>
            <Tooltip title={name.length > 40 ? name : ''}>
                <p className="card-title">{name}</p>
            </Tooltip>
            <div className="card-disc">
                <p className="card-disc-item">{position}</p>
                <Tooltip title={email.length > 40 ? email : ''}>
                    <p className="card-disc-item">{email}</p>
                </Tooltip>
                <p className="card-disc-item">{phone}</p>
            </div>
        </div>
    )
}

export default Card;