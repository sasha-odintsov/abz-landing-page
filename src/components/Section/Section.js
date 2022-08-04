import './Section.scss';
import Users from '../Users/Users'

function Section () {
    return (
        <section className="section">
            <div className="section-content wrapper">
                <a name="users"></a>
                <h2 className="title">
                    Working with GET request
                </h2>
                <Users />
            </div>
        </section>
    )
}

export default Section;