import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function useValue() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [value, setValue] = useState([]);

    useEffect(() => {
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=6&count=6`) 
        .then((response) => response.json()) 
        .then((data) => { 
                console.log(data);
                if(data.success) { 
                    setIsLoaded(true); 
                    setValue(data.users)
                } 
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    if (error) {
        console.log(error.message)
    } else if (!isLoaded) {
        return (
            <Box sx={{ position: 'absolute', left: '0', right: '0', m: 'auto' }}>
                <CircularProgress color='primary' size='48px' />
            </Box>
        )
    } else {
        console.log(value)
        return (
            value.map(el => (
                <Card
                key={el.id}
                photo={el.photo}
                name={el.name}
                position={el.position}
                email={el.email}
                phone={el.phone}
                />
            ))
        )
    }
}

export default useValue;