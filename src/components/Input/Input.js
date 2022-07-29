import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './Input.scss';
import Textarea from '../Textarea/Textarea';
import { useState } from 'react';
import Button from '../Button/Button';
import usePosition from '../../lib/usePosition'

function Input() {
  const [title, setTitle] = useState('Upload your photo');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorFile, setErrorFile] = useState('');
  const [errorName, setErrorName] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPhone, setErrorPhone] = useState();
  const [styleFileInput, setStyleFileInput] = useState();
  const position = usePosition()
 
    function handleSubmit(event) {
      event.preventDefault();
      const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const patternPhone = /^(?:\+38)?(0\d{9})$/;

      if (name.length < 2 || name.length > 60) {
        setErrorName(true)
      } else {
        setErrorName(false)
      }
      if (!email.match(patternEmail)) {
        setErrorEmail(true)
      } else {
        setErrorEmail(false)
      }
      if (!phone.match(patternPhone)) {
        setErrorPhone(true)
      } else {
        setErrorPhone(false)
      }
    }

    function handleFileInput(event, input) {
        const file = event.target.files[0];
        setTitle(file.name);
        if (file.size > 5000000 ) {
          setStyleFileInput({borderColor: '#CB3D40'})
          setErrorFile('Size must not exceed 5MB')
          } else if(!["image/jpeg", "image/jpg"].includes(file.type)) {
            setErrorFile('Allowed only jpg. or jpeg. extensions')
            setStyleFileInput({borderColor: '#CB3D40'})
          } else {
          setErrorFile('')
          setStyleFileInput(null)
        }
    }
    return (
      <>
        <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root': { 
            m:'30px auto 0 auto', 
            display: 'flex',  
            width: '380px'
          },
        }}
        noValidate
        autoComplete="off"
        >
          <TextField 
          id="outlined-basic" 
          label="Your name" 
          variant="outlined" 
          value={name} 
          onChange={(event) => setName(event.target.value)}
          error={errorName}
          helperText={errorName ? "Name should be 2-60 characters" : " "}
          />
          <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          type="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
          error={errorEmail}
          helperText={errorEmail ? "Invalid email" : " "}
          />
          <TextField
          id="outlined-basic"
          label="Phone"
          type="number"
          variant="outlined"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          error={errorPhone}
          helperText={errorPhone ? "Phone number is not valid" : "+38 (XXX) XXX - XX - XX"}
          />
          <FormControl sx={{ m: '25px auto 43px auto', width: '380px'}}>
            <p className="radio-title">Select your position</p>
            <RadioGroup 
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue
            name="radio-buttons-group"
            >
              {position.map((el)=>{
                return <FormControlLabel key={el.id} value={el.name} control={<Radio sx={{ p: '5px', mr: '3px' }} />} label={el.name} />
              })}
            </RadioGroup>
          </FormControl>
          <Textarea onChange={handleFileInput} title={title} style={styleFileInput}/>
          <div className="input-file-error-wrap">
            <p className="input-file-error">{errorFile}</p>
          </div>
          <Button txt={"Sign Up"} disabled={!name || !email || !phone || errorFile}/>
        </Box>
      </>
    );
}

export default Input;