import './Heading.scss'
import Button from '../Button/Button'

function Heading() {
    return(
        <div className="heading  wrapper">
            <div className="heading-content wrapper">
                <h1 className="title">
                    Test assignment for front-end developer
                </h1>
                <p className="heading-txt">
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.    
                </p>
                <Button txt="Sing up" clss="button"/>
            </div>
        </div>
    )
}

export default Heading;