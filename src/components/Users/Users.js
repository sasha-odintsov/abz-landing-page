import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader'

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false)
  let [url, setUrl] = useState('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6');

  function getUsers(){
    fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      if(data.success) {
        setUsers(data.users);
        setIsLoaded(true); 
        if (data.links.next_url) {
          setUrl(data.links.next_url);
        } else {
          setBtnDisable(true)
        }
      }
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = () => {
    getUsers()
  };

  if (error) {
    console.log(error.message)
  } else if (!isLoaded) {
    return (
      <Preloader />
    )
  } else {
    return (
      <>
      <div className="section-content-items">
        {users.map(el => (
            <Card
            key={el.id}
            photo={el.photo}
            name={el.name}
            position={el.position}
            email={el.email}
            phone={el.phone}
            />
        ))}        
      </div>
      <Button 
      txt={"Show more"} 
      click={handleClick}
      style={{ width: 120 }}
      disabled={btnDisable}
      />
      </>
    );
  }
}


export default Users;