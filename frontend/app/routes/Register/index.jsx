import { useLoaderData } from "@remix-run/react";
import { useState, useMemo, useEffect, useCallback } from "react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun'
import { calculateAge } from '~/utils/dateUtils';

import { Text, Input, Button, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
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

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import React from 'react';

const phonePattern = {
  'US': {
    'prefix': '+1',
    'pattern': /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    'flag': 'url'
  },
  'SPAIN': {
    'prefix': '+34',
    'pattern': /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    'flag': 'url'
  },

}


export default function Index() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [cognoms, setCognoms] = useState('');
  const [telefon, setTelefon] = useState('');


  const [country, setCountry] = useState('US');

  const [data, setData] = useState('');
  const [dataError, setDataError] = useState(false);

  const [nomError, setNomError] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('')


  const [terms, setTerms] = useState(false)
  const [errorTerms, setErorTerms] = useState(false)


  const [telefonError, setTelefonError] = useState(false);
  const [cognomsError, setCognomsError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [nameErrorMessages, setNameErrorMessages] = useState('');
  const [telefonErrorMessage, setTelefonErrorMessage] = useState('');
  const [cognomsErrorMessages, setCognomsErrorMessages] = useState('');
  const [dateErrorMessages, setDateErrorMessages] = useState('')
  const current = new Date();
  const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;


  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    if (!emailError && !passwordError && !nomError && !cognomsError && !telefonError && !dataError) {
      setIsSubmitting(true)
      console.log('Submitted')
      let jsonData = { "email": email, "password": password, "name": nom, "surname": cognoms, "phone": `${phonePattern[country].prefix}${telefon}`, "birthdate": data }
      let response = fetch(`http://localhost:8000/api/client/${email}`,
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(jsonData),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => response.json())
        .catch((error) => {
          setIsSubmitting(false)
          setErrorMessages('Something went wrong')
        })

      const { success, message, token } = await response
      setIsSubmitting(false)
      if (success) {
        setIsRegistered(true)
        //TODO: Save token to local storage
      }
      else {
        setErrorMessages(message)
      }
    }
    else {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

  //Validations
  const validateEmail = useCallback(() => {
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi
    if (email === '') {
      setEmailErrorMessage('Email is required')
      setEmailError(true)
    }
    else if (email.match(mailformat) == null) {
      setEmailErrorMessage('Invalid email format')
      setEmailError(true)
    }
    else {
      setEmailErrorMessage('')
      setEmailError(false)
    }
  }, [email])


  const validateNom = useCallback(() => {
    if (nom === '') {
      setNameErrorMessages('Name is required');
      setNomError(true);
    } else if (nom.match(/^[A-Za-z]+$/) === null) {
      setNameErrorMessages('Name can\'t contain numbers');
      setNomError(true);
    } else {
      setNomError(false);
    }
    console.log('validate nom')
  }, [nom])


  const validateCognoms = useCallback(() => {
    console.log('validate cognom')
    if (cognoms === '') {
      setCognomsErrorMessages('Surname is required');
      setCognomsError(true);
    } else if (cognoms.match(/^[A-Za-z]+$/) === null) {
      setCognomsErrorMessages('Surname is incorrect');
      setCognomsError(true);
    } else {
      setCognomsError(false);
    }
  }, [cognoms])


  const validateTelefon = useCallback(() => {
    console.log('validate telefon', telefon)
    if (telefon === '') {
      setTelefonErrorMessage('Phone is required')
      setTelefonError(true)
    }
    else if (telefon.match(phonePattern[country].pattern) == null) {
      setTelefonErrorMessage('Invalid phone number')
      setTelefonError(true)
    }
    else {
      setTelefonErrorMessage('')
      setTelefonError(false)
    }
  }, [telefon])


  const validateData = useCallback(() => {
    console.log('validate data')
    let date = new Date(data)
    let current = new Date(currentDate)
    if (data === '') {
      setDateErrorMessages('Date is required')
      setDataError(true)
    } else if (date >= current) {
      setDateErrorMessages('You\'re not from the future');
      setDataError(true);
    } else if (calculateAge(date, current) < 18) {
      setDateErrorMessages('You must be of legal age');
      setDataError(true);
    }
    else {
      setDataError(false)
      setDateErrorMessages('')
    }

  }, [data])


  const validatePassword = useCallback(() => {
    setPasswordError(password === '')
  }, [password])


  const validateParameters = useCallback(() => {
    validateEmail()
    validateData()
    validateCognoms()
    validateNom()
    validateTelefon()
    validatePassword()
    setErorTerms(!terms)
  }, [validateEmail, validatePassword, validateTelefon, validateNom, validateCognoms, validateData, terms])

  useEffectWithoutFirstRun(validateEmail, [email])
  useEffectWithoutFirstRun(validatePassword, [password])
  useEffectWithoutFirstRun(validateData, [data])
  useEffectWithoutFirstRun(validateTelefon, [telefon])
  useEffectWithoutFirstRun(validateNom, [nom])
  useEffectWithoutFirstRun(validateCognoms, [cognoms])
  useEffectWithoutFirstRun(() => setErorTerms(!terms), [terms])


  return (
    <div className="register-form">
      <Flex width="full" align="center" justifyContent="center" padding={"20px"}>
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>{isRegistered ? 'Registered' : 'Register'}</Heading>
          </Box>

          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>

              <FormControl isInvalid={nomError}>
                <FormLabel>Name</FormLabel>
                <Input type='txt' value={nom} onChange={(e) => setNom(e.target.value)} />
                {!nomError ? null : (
                  <FormErrorMessage>{nameErrorMessages}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={cognomsError}>
                <FormLabel>Surname</FormLabel>
                <Input type='txt' value={cognoms} onChange={(e) => setCognoms(e.target.value)} />
                {!cognomsError ? null : (
                  <FormErrorMessage>{cognomsErrorMessages}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={telefonError}>
                <FormLabel>Telephone</FormLabel>
                <Input type='text' value={telefon} onChange={(e) => setTelefon(e.target.value)} />
                {!telefonError ? null : (
                  <FormErrorMessage>{telefonErrorMessage}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={dataError}>
                <FormLabel>Birth date</FormLabel>
                <Input type='date' max={currentDate} value={data} onChange={(e) => setData(e.target.value)} />
                {!dataError ? null : (
                  <FormErrorMessage>{dateErrorMessages}</FormErrorMessage>
                )}
                <FormControl isInvalid={emailError}>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {!emailError ? null : (
                    <FormErrorMessage>{emailErrorMessage}</FormErrorMessage>
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
                <FormControl isInvalid={errorTerms}>
                  <Checkbox isChecked={terms} onChange={(c) => setTerms(c.target.checked)}>Accept terms and conditions</Checkbox>
                  {terms ? null : (
                    <FormErrorMessage>Must accept terms and conditions</FormErrorMessage>
                  )}
                </FormControl>
              </FormControl>
              {errorMessages && <ErrorMessage message={errorMessages} />}
              <Box textAlign="center">
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} onClick={validateParameters} type='submit' isDisabled={emailError || passwordError || nomError || cognomsError || telefonError || dataError || errorTerms} >
                  Register
                </Button>
              </Box>
            </form>

          </Box>
        </Box>
      </Flex>
    </div >
  );
}
