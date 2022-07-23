import './Main.scss'
import Button from '../Button/Button'

function Main () {
    return (
        <div className="main">
            <div className="main-content wrapper">
                <h2 className="title">
                    Working with GET request
                </h2>
                <div className="main-content-items"></div>
                <Button txt="Show more" clss="button button-big" />
            </div>
        </div>
    )
}

export default Main;