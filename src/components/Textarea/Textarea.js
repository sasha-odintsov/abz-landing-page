import './Textarea.scss';
import { useState } from 'react';

function Textarea() {
    // let inputFile = document.getElementById('input-file');
    // let fileName = document.getElementById('file-name');
    // inputFile.addEventListener('change', (event) => {
    //     let uploadedFile = event.tagret.files[0].name;
    //     fileName.textContent = uploadedFile;
    // })
    const[title, setTitle] = useState('Upload your photo');
    function handleChange(event) {
        setTitle(event.target.files[0].name);
        // this.style.color = "black"
    }

    return(
        <div>
            <input type="file" id="input-file" onChange={handleChange}/>
            <div className='input-file-wrap'>
                <label htmlFor="input-file" className="input-file-label">Upload</label>
                <span id="file-name">{title}</span>
            </div>
        </div>
    )
}

export default Textarea;