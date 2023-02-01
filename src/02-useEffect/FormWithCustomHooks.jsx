import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'


export const FormWithCustomHooks = () => {

  const { formState, onImputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const  {username, email, password} = formState;

  return (
    <>
      <h1>Formulario Con Custom Hooks</h1>

      <input
        type='text'
        className='form-control mt-2'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onImputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onImputChange}
      />

      <input
        type='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={onImputChange}
      />

      <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
