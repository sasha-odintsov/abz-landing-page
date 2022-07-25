import { useState } from 'react';
import './Section.scss';
// import Card from '../Card/Card';
import Button from '../Button/Button';
import Value from '../../lib/useValue';

function Section () {
    // let [page, setPage] = useState(1);
    // let showUsers = 6;
    // const value = useValue();
    // console.log(value)
    // console.log(value);
    
    function handleClick() {
        console.log('hello');
       
        // setPage(page++)
      
    }
    
    return (
        <section className="section">
            <div className="section-content wrapper">
                <h2 className="title">
                    Working with GET request
                </h2>
                <div className="section-content-items">
                    <Value />
                </div>
                <Button 
                txt={"Show more"} 
                click={handleClick}
                style={{width: 120}}
                />
            </div>
        </section>
    )
}

export default Section;