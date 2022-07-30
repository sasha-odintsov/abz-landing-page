import { useState, useEffect } from 'react';

function useToken() {
    const [token, setToken] = useState();
    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token') 
        .then((response) => response.json()) 
        .then((data) => setToken(data.token)) 
    }, [])
    return token;
}

export default useToken;