import { useLoaderData } from "@remix-run/react";
import { useState, useMemo, useEffect } from "react";

import { Input, Button, InputGroup, InputLeftElement,InputRightElement } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


export default function Index() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //Validate 
  function performValidation() {
    return username.length > 0 && password.length > 0;
    }

  //Displays elements in 
  const renderErrorMessage = (name) =>{
    if(name === errorMessages.name)
      return <div className="error">{errorMessages.message}</div>
    return null
    };

  async function handleSubmit(event){
    // Prevent page reload
    event.preventDefault();
    console.log('Submitted')
    let jsonData={"email":email,"password":password}
    console.log(JSON.stringify(jsonData))
    let response = await fetch('http://localhost:8000/api/clients/login/',
          {
            method:'POST',
            mode:'cors',
            body: JSON.stringify(jsonData),
            headers: {
              'Content-Type': 'application/json',
            }
          })
    console.log(response.json())
  };

  useEffect(()=>setEmailError(email===''),[email])
  useEffect(()=>setPasswordError(password===''),[password])


  return (
    <div className="login-form" width="500px" center='align'>

    {isLoggedIn ? <div>Logged in</div> :
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={emailError}>
          <FormLabel>Email</FormLabel>
          <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          {!emailError ? null : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={emailError}>
          <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)
                } />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          {!passwordError ? null : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
    }


    </div>
  );
}
