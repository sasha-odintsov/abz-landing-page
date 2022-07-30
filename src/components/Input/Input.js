import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './Input.scss';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import FormSuccess from '../FormSucess/FormSuccess';
import { useState } from 'react';
import usePosition from '../../lib/usePosition';
import useToken from '../../lib/useToken';

function Input() {
  const [title, setTitle] = useState('Upload your photo');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState();
  const [addedFile, setAddedFile] = useState('');
  const [errorName, setErrorName] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPhone, setErrorPhone] = useState();
  const [errorFile, setErrorFile] = useState();
  const [styleFileInput, setStyleFileInput] = useState();
  // const [token, setToken] = useState();
  const [formSuccess, setFormSuccess] = useState();
  const positions = usePosition();
  const token = useToken();
 
  function handleSubmit(event) {
    event.preventDefault();
    const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const patternPhone = /^(?:\+38)(0\d{9})$/;

    if (name.length < 2 || name.length > 60) {
      setErrorName(true)
      return;
    } else {
      setErrorName(false)
    }
    if (!email.match(patternEmail)) {
      setErrorEmail(true)
      return;
    } else {
      setErrorEmail(false)
    }
    if (!phone.match(patternPhone)) {
      setErrorPhone(true)
      return;
    } else {
      setErrorPhone(false)
    }

    const formData = new FormData();
    formData.append('photo', addedFile);
    formData.append('name', name);
    formData.append('position_id', position); 
    formData.append('email', email);
    formData.append('phone', phone);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { 
      method: 'POST', 
      body: formData, 
      headers: { 'Token': token }, 
    }) 
      .then((response) => response.json()) 
      .then(function(data) { 
        console.log(data); 
        if(data.success) {  
          setFormSuccess(data.success)
        } 
      }) 
    .catch(function(error) { 
      console.error(error);
    });
  }
  // useEffect(() => {
  //   fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token') 
  //   .then((response) => response.json()) 
  //   .then((data) => setToken(data.token)) 
  // }, [])
  function handleFileInput(event) {
    const file = event.target.files[0];
    setAddedFile(file)
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
    <div className="secondary-wrapper">
      <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { 
          m:'30px auto 0 auto', 
          display: 'flex',  
          width: '100%'
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
        type="text"
        variant="outlined"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        error={errorPhone}
        helperText={errorPhone ? "Phone number is not valid" : "+38 (XXX) XXX - XX - XX"}
        />
        <FormControl sx={{ m: '25px auto 43px auto', width: '100%'}}>
          <p className="radio-title">Select your position</p>
          <RadioGroup 
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue
          name="radio-buttons-group"
          >
            {positions.map((el)=>{
              return <FormControlLabel 
              key={el.id} 
              value={el.id} 
              control={<Radio sx={{ p: '5px', mr: '3px' }} />} 
              label={el.name} 
              onChange={(event) => setPosition(event.target.value)}/>
            })}
          </RadioGroup>
        </FormControl>
        <Textarea onChange={handleFileInput} title={title} style={styleFileInput}/>
        <div className="input-file-error-wrap">
          <p className="input-file-error">{errorFile}</p>
        </div>
        <Button txt={"Sign Up"} disabled={!name || !email || !phone || !position || !addedFile}/>
      </Box>
    </div>
    {formSuccess && <FormSuccess />}
    </>
  );
}

export default Input;