import './Heading.scss'
import Button from '../Button/Button'

function Heading() {
    return(
        <div className="heading">
            <div className="heading-content secondary-wrapper">
                <h1 className="title">
                    Landing page with get and post request
                </h1>
                <p className="heading-txt">
                    The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers. The two most common HTTP methods are: GET and POST. GET is used to request data from a specified resource, POST is used to send data to a server to create/update a resource.
                </p>
                {/* <Button txt={"Sing up"} /> */}
            </div>
        </div>
    )
}

export default Heading;