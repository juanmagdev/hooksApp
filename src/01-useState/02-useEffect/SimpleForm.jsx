import {useState, useEffect} from 'react'

export const SimpleForm = () => {

  const [formSate, setFormState] = useState({
    username: 'strider', 
    email: 'juanma.jota01@gmail.com'

  });

  const {username, email} = formSate;

  const onImputChange =  ({target}) => {
    const {name, value} = target;

    setFormState({
      ...formSate,
      [name]: value
    })
  }

  useEffect(() => {
    console.log("FormState changed");
  }, [formSate]);

  useEffect(() => {
    console.log("Email changed");
  }, [email]);
  


  return (
    <>
    <h1>Formulario Simple</h1>

    <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange = {onImputChange}
    />

<input
        type='email'
        className='form-control mt-2'
        placeholder='juanma@uma.es'
        name='email'
        value={email}
        onChange = {onImputChange}
    />
    </>
  )
}
