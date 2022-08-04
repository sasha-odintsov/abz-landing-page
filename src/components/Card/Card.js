import './Card.scss';
import imageCoverOnError from '../../lib/imageCoverOnError';
import Tooltip from '@mui/material/Tooltip';
import { styled } from "@mui/material/styles";

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))
(({ theme }) => ({
    zIndex: theme.zIndex.tooltip + 1,
    [`& .MuiTooltip-tooltip`]: {
      fontSize: '1em',
      lineHeight: '1.2',
      backgroundColor: "rgba(0,0,0,0.8)",
      padding: '5px 15px'
    }
})); 

function Card({ photo, name, position, email, phone }) {
    return(
        <div className="card">
            <div className="card-img-wrap">
                <img src={photo} onError={imageCoverOnError} alt="colleague" className="card-img"/>
            </div>
            <StyledTooltip title={name.length >= 40 ? name : ''} placement="bottom-start">
                <p className="card-title">{name}</p>
            </StyledTooltip>
            <div className="card-disc">
                <p className="card-disc-item">{position}</p>
                <StyledTooltip title={email.length >= 40 ? email : ''} placement="bottom-start">
                    <p className="card-disc-item">{email}</p>
                </StyledTooltip>
                <p className="card-disc-item">{phone}</p>
            </div>
        </div>
    )
}

export default Card;