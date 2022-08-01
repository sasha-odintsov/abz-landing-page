import './Textarea.scss';

function Textarea({ onChange, title, style, errorFile }) {
    return(
        <>
            <input type="file" id="input-file" onChange={onChange}/>
            <div className='input-file-wrap'>
              <label htmlFor="input-file" className="input-file-label" style={style}>Upload</label>
              <span id="file-name" style={style}>{title}</span>
            </div>
            <div className="input-file-error-wrap">
              <p className="input-file-error">{errorFile}</p>
            </div>
        </>
    )
}

export default Textarea;