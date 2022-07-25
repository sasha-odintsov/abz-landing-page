import { useState, useEffect } from 'react';

function useData() {
    const [value, setValue] = useState({});

    useEffect(() => {
        function getData() {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=14&count=6') 
            .then((response) => response.json()) 
            .then((data) => { 
                // console.log(data); 
                if(data.success) {
                    // data.users.forEach((data) => {
                    //     setValue({
                    //         name: data.name,
                    //         email: data.email,
                    //         phone: data.phone,
                    //         photo: data.photo,
                    //         position: data.position
                    //     })
                    // })  
                    setValue(data.users)
                } 
                // else { } 
            })
            .catch((error) => console.log(error.message))
        }
        getData();
    }, [])
    // console.log(value); 
    return value;
}

export default useData;