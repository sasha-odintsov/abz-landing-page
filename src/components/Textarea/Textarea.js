import './Textarea.scss';

function Textarea({ onChange, title, style }) {
    return(
        <>
            <input type="file" id="input-file" onChange={onChange}/>
            <div className='input-file-wrap'>
              <label htmlFor="input-file" className="input-file-label" style={style}>Upload</label>
              <span id="file-name" style={style}>{title}</span>
            </div>
        </>
    )
}

export default Textarea;