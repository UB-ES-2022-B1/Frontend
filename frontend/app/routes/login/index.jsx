import { useLoaderData } from "@remix-run/react";
import { useState, useMemo, useEffect, useCallback } from "react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun'

import { Input, Button, InputGroup, InputLeftElement,InputRightElement } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import {
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react';

import ErrorMessage from '~/components/ErrorMessage'

const validate = (value) => {
  return value != ''
}


export default function Index() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  async function handleSubmit(event){
    event.preventDefault();
    setErrorMessages('')
    if(!emailError && !passwordError)
    {
    setIsSubmitting(true)
    console.log('Submitted')
    let jsonData={"email":email,"password":password}
    console.log(JSON.stringify(jsonData))
    let response = fetch('http://localhost:8000/api/clients/login/',
          {
            method:'POST',
            mode:'cors',
            body: JSON.stringify(jsonData),
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .then(() =>{
            setIsSubmitting(false)
            console.log('response correct? ', resp)
            })
          .catch((error)=>{
            console.log('error detected')
            setIsSubmitting(false)
            setErrorMessages(error.error)
          })
    }
    else
    {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

  //Validations
  const validateEmail = useCallback(()=>{
    console.log('validate email')
    setEmailError(email === '')
  },[email])
  const validatePassword = useCallback(()=>{
    setPasswordError(password === '')
  },[password])
  const validateParameters = useCallback(()=>{
    validateEmail()
    validatePassword()
  },[validateEmail,validatePassword])

  const updateEmailError = useEffectWithoutFirstRun(validateEmail,[email])
  const updatePasswordError = useEffectWithoutFirstRun(validatePassword,[password])


  return (
    <div className="login-form">
      <Flex width="full" align="center" justifyContent="center" padding={"20px"}>
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">

            {isLoggedIn ?
              <Box textAlign="center">
                <Text>{email} logged in!</Text>
                <Button
                  variantColor="orange"
                  variant="outline"
                  width="full"
                  mt={4}
                  onClick={() => setIsLoggedIn(false)}
                >
                  Sign out
                </Button>
              </Box>
              :
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={emailError}>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {!emailError ? null : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={passwordError}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={show ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }
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
                {errorMessages && <ErrorMessage message={errorMessages} />}
                <Box textAlign="center">
                  <Button mt={4} colorScheme='teal' isLoading={isSubmitting} onClick={validateParameters} type='submit' isDisabled={emailError || passwordError} >
                    Submit
                  </Button>
                </Box>
              </form>
            }
          </Box>
        </Box>
      </Flex>
    </div >
  );
}
