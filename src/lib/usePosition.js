import { useState, useEffect } from 'react';

function usePosition() {
    const [position, setPosition] = useState([]);
    useEffect(() => {
      function getPosition() {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions') 
        .then(function(response) { 
          return response.json(); 
        }) 
        .then(function(data) { 
           if(data.success) {
            setPosition(data.positions)
           }
        })
      }
      getPosition();
    }, [])
    return position;
}

export default usePosition;