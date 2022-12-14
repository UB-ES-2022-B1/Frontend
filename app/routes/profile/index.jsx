import {

  Flex,
  Box,
  Heading,
  Divider,
  Text,
  Button,
  Spacer,
  useDisclosure,
  PopoverTrigger,
  Popover,
  IconButton,
  PopoverContent,
  PopoverArrow,
  InputGroup,
  InputRightElement,
  PopoverCloseButton,
  Stack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import FocusLock from "react-focus-lock"
import { useNavigate } from "react-router-dom";
import { EditIcon, LinkIcon, ViewIcon } from '@chakra-ui/icons'
import { useEffect, forwardRef, useCallback } from 'react';
import { useState, useRef } from "react";
import { useLocalStorage } from '~/utils/localStorage'
import { useLoaderData } from "@remix-run/react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun';
import { SERVER_DNS } from "~/utils/constants";
import { getAccessToken } from '~/session';

import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { calculateAge } from '~/utils/dateUtils';





const TextInput = forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

const EditName = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [nom, setNom] = useState(props.name);
  const [nomError, setNomError] = useState(false);
  const [nameErrorMessages, setNameErrorMessages] = useState('');

  const [cognoms, setCognoms] = useState(props.surname);
  const [cognomsError, setCognomsError] = useState(false);
  const [cognomsErrorMessages, setCognomsErrorMessages] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!nomError && !cognomsError) {
      props.onChange(nom, cognoms)
    }
    else {
      setIsSubmitting(false)
    }
  };

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
  }, [nom])

  const validateCognoms = useCallback(() => {
    console.log('validate cognom ', cognoms)
    if (cognoms === '') {
      setCognomsErrorMessages('Surname is required');
      setCognomsError(true);
    } else if (cognoms.match(/[0-9]+/) != null) {
      setCognomsErrorMessages('Surname is incorrect');
      setCognomsError(true);
    } else {
      setCognomsError(false);
    }
  }, [cognoms])

  const validateParameters = useCallback(() => {
    validateNom()
    validateCognoms()
  }, [validateNom, validateCognoms])

  useEffectWithoutFirstRun(validateNom, [nom])
  useEffectWithoutFirstRun(validateCognoms, [cognoms])

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton variant='ghost' size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={nomError}>
                <TextInput
                  label='First name'
                  id='first-name'

                  ref={firstFieldRef}
                  defaultValue={props.name}
                  onChange={(e) => setNom(e.target.value)}

                />{!nomError ? null : (
                  <FormErrorMessage>{nameErrorMessages}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={cognomsError}>
                <TextInput
                  label='Last name'
                  id='last-name'

                  defaultValue={props.surname}
                  onChange={(e) => setCognoms(e.target.value)}

                />{!cognomsError ? null : (
                  <FormErrorMessage>{cognomsErrorMessages}</FormErrorMessage>
                )}
              </FormControl>
              <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  isDisabled={nomError || cognomsError}
                  backgroundColor='#98A8F8'
                  onClick={validateParameters}
                  type='submit'
                  isLoading={isSubmitting} >
                  Save

                </Button>
              </ButtonGroup>
            </form>

          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

const EditMail = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [email, setEmail] = useState(props.email);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    if (!emailError) {
      props.onChange(email)
    }
    else {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

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

  const validateParameters = useCallback(() => {
    validateEmail()
  }, [validateEmail])

  useEffectWithoutFirstRun(validateEmail, [email])

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton variant='ghost' size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={emailError}>
                  <TextInput
                    type='email'
                    label='Email address'
                    id='Email-address'
                    ref={firstFieldRef}
                    defaultValue={props.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{!emailError ? null : (
                    <FormErrorMessage>{emailErrorMessage}</FormErrorMessage>
                  )}
                </FormControl>
                <ButtonGroup display='flex' justifyContent='flex-end'>
                  <Button variant='outline' onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    isDisabled={emailError}
                    backgroundColor='#98A8F8'
                    onClick={validateParameters}
                    type='submit'
                  >
                    Save
                  </Button>
                </ButtonGroup>
              </form>
            </Stack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}


const EditPhoneNumber = (props) => {

  const pattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [telefon, setTelefon] = useState(props.telefon);
  const [telefonError, setTelefonError] = useState(false);
  const [telefonErrorMessage, setTelefonErrorMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();
    if (!telefonError) {
      props.onChange(telefon)
    }
    else {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

  const validateTelefon = useCallback(() => {
    console.log('validate telefon', telefon)
    if (telefon === '') {
      setTelefonErrorMessage('Phone is required')
      setTelefonError(true)
    }
    else if (telefon.match(pattern) == null) {
      setTelefonErrorMessage('Invalid phone number')
      setTelefonError(true)
    }
    else {
      setTelefonErrorMessage('')
      setTelefonError(false)
    }
  }, [telefon])


  const validateParameters = useCallback(() => {
    validateTelefon()
  }, [validateTelefon])

  useEffectWithoutFirstRun(validateTelefon, [telefon])

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton variant='ghost' size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={telefonError}>
                <TextInput
                  label='Phone number'
                  id='Phone-number'
                  ref={firstFieldRef}
                  defaultValue={props.phone}
                  onChange={(e) => setTelefon(e.target.value)}

                />{!telefonError ? null : (
                  <FormErrorMessage>{telefonErrorMessage}</FormErrorMessage>
                )}
              </FormControl>
              <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  isDisabled={telefonError}
                  backgroundColor='#98A8F8'
                  onClick={validateParameters}
                  type='submit'
                  isLoading={isSubmitting} >
                  Save

                </Button>
              </ButtonGroup>
            </form>

          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

const EditBirthDate = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [data, setData] = useState(props.data);
  const [dataError, setDataError] = useState(false);
  const [dateErrorMessages, setDateErrorMessages] = useState('')

  const current = new Date();
  const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;


  async function handleSubmit(event) {
    event.preventDefault();
    if (!dataError) {
      console.log('changing data to', data)
      props.onChange(data)
    }
    else {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

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

  const validateParameters = useCallback(() => {
    validateData()
  }, [validateData])

  useEffectWithoutFirstRun(validateData, [data])

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton variant='ghost' size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={dataError}>
                  <TextInput
                    type='date'
                    label='Birth Date'
                    id='birth-date'
                    ref={firstFieldRef}
                    defaultValue={props.data}
                    onChange={(e) => setData(e.target.value)}
                  />{!dataError ? null : (
                    <FormErrorMessage>{dateErrorMessages}</FormErrorMessage>
                  )}
                </FormControl>
                <ButtonGroup display='flex' justifyContent='flex-end'>
                  <Button variant='outline' onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    isDisabled={dataError}
                    backgroundColor='#98A8F8'
                    onClick={validateParameters}
                    type='submit'
                  >
                    Save
                  </Button>
                </ButtonGroup>
              </form>
            </Stack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

const EditCountry = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [nom, setNom] = useState(props.country);
  const [nomError, setNomError] = useState(false);
  const [nameErrorMessages, setNameErrorMessages] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!nomError) {
      props.onChange(nom)
    }
    else {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

  const validateNom = useCallback(() => {
    if (nom === '') {
      setNameErrorMessages('Country is required');
      setNomError(true);
    } else if (nom.match(/^[A-Za-z]+$/) === null) {
      console.log("incorrecte: " + nom)
      setNameErrorMessages('Country can\'t contain numbers');
      setNomError(true);
    } else {
      setNomError(false);
    }
    console.log('validate nom' + nom)
  }, [nom])


  const validateParameters = useCallback(() => {
    validateNom()
  }, [validateNom])

  useEffectWithoutFirstRun(validateNom, [nom])

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton variant='ghost' size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={nomError}>
                <TextInput
                  label='Country'
                  id='Country'

                  ref={firstFieldRef}
                  defaultValue={props.country}
                  onChange={(e) => setNom(e.target.value)}

                />{!nomError ? null : (
                  <FormErrorMessage>{nameErrorMessages}</FormErrorMessage>
                )}
              </FormControl>
              <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  isDisabled={nomError}
                  backgroundColor='#98A8F8'
                  onClick={validateParameters}
                  type='submit'
                  isLoading={isSubmitting} >
                  Save

                </Button>
              </ButtonGroup>
            </form>

          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}


const EditPassword = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)
  const [show_current, setShow_current] = useState(false)
  const [show_new, setShow_new] = useState(false)

  const handleClick_current = () => setShow_current(!show_current)
  const handleClick_new = () => setShow_new(!show_new)

  const [password_current, setPassword_current] = useState('');
  const [password_new, setPassword_new] = useState('');
  const [passwordError_current, setPasswordError_current] = useState(false);
  const [passwordErrorMessages_current, setpasswordErrorMessages_current] = useState('');
  const [passwordError_new, setPasswordError_new] = useState(false)
  const [passwordErrorMessages_new, setpasswordErrorMessages_new] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('haqndlesubmit')
    if (!passwordError_new && !passwordError_current) {
      props.onChange(password_current, password_new)
    }
    else {
      setIsSubmitting(false)
    }
  };

  const validatePassword_current = useCallback(() => {
    console.log('validate password')
    if (password_current.length < 8) {
      setpasswordErrorMessages_current('Minimum 8 characters');
      setPasswordError_current(true);
    }
    else if (password_current.match(/(?=.*?[A-Z])/) == null) {
      setpasswordErrorMessages_current("At least one uppercase letter");
      setPasswordError_current(true);
    }
    else if (password_current.match(/(?=.*?[a-z])/) == null) {
      setpasswordErrorMessages_current("At least one lowercase letter");
      setPasswordError_current(true);
    }
    else if (password_current.match(/(?=.*?[0-9])/) == null) {
      setpasswordErrorMessages_current("At least one digit");
      setPasswordError_current(true);
    }
    else if (password_current.match(/(?=.*?[#?.,!@$%^&*-])/) == null) {
      setpasswordErrorMessages_current("At least one special character");
      setPasswordError_current(true);
    }
    else {
      setPasswordError_current(false)
      setpasswordErrorMessages_current("")

    }
  }, [password_current])

  const validatePassword_new = useCallback(() => {
    console.log('validate password')
    if (password_new.length < 8) {
      setpasswordErrorMessages_new('Minimum 8 characters');
      setPasswordError_new(true);
    }
    else if (password_new.match(/(?=.*?[A-Z])/) == null) {
      setpasswordErrorMessages_new("At least one uppercase letter");
      setPasswordError_new(true);
    }
    else if (password_new.match(/(?=.*?[a-z])/) == null) {
      setpasswordErrorMessages_new("At least one lowercase letter");
      setPasswordError_new(true);
    }
    else if (password_new.match(/(?=.*?[0-9])/) == null) {
      setpasswordErrorMessages_new("At least one digit");
      setPasswordError_new(true);
    }
    else if (password_new.match(/(?=.*?[#?.,!@$%^&*-])/) == null) {
      setpasswordErrorMessages_new("At least one special character");
      setPasswordError_new(true);
    }
    else {
      setPasswordError_new(false)
      setpasswordErrorMessages_new("")


    }
  }, [password_new])

  const validateParameters = useCallback(() => {
    validatePassword_current()
    validatePassword_new()
  }, [validatePassword_current, validatePassword_new])


  useEffectWithoutFirstRun(validatePassword_current, [password_current])
  useEffectWithoutFirstRun(validatePassword_new, [password_new])
  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton variant='ghost' size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={passwordError_current}>
                  <InputGroup>
                    <Input
                      type={show_current ? 'text' : 'password'}
                      label='Current password'
                      id='current_password'
                      ref={firstFieldRef}
                      placeholder='Enter current password'
                      onChange={(a) => { setPassword_current(a.target.value) }} />
                    <InputRightElement >
                      <IconButton h='2rem' size='sm' variant='ghost' onClick={handleClick_current} icon={<ViewIcon />}>
                        {show_current ? 'Hide' : 'Show'}
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
                  {!passwordError_current ? null : (
                    <FormErrorMessage>{passwordErrorMessages_current}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={passwordError_new}>
                  <InputGroup>
                    <Input
                      type={show_new ? 'text' : 'password'}
                      label='New password'
                      id='new_password'
                      ref={firstFieldRef}
                      placeholder='Enter new password'
                      onChange={(e) => { setPassword_new(e.target.value) }} />

                    <InputRightElement >
                      <IconButton h='2rem' size='sm' variant='ghost' onClick={handleClick_new} icon={<ViewIcon />}>
                        {show_new ? 'Hide' : 'Show'}
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
                  {!passwordError_new ? null : (
                    <FormErrorMessage>{passwordErrorMessages_new}</FormErrorMessage>
                  )}
                </FormControl>
                <ButtonGroup display='flex' justifyContent='flex-end'>
                  <Button variant='outline' onClick={onClose}>
                    Cancel
                  </Button>
                  <Button backgroundColor='#98A8F8' type='submit' onClick={validateParameters} isDisabled={passwordError_current || passwordError_new}>
                    Save
                  </Button>
                </ButtonGroup>
              </form>
            </Stack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}




export default function Index() {
  const [products, setProducts] = useState();
  const [email, setEmail] = useLocalStorage('email', '');
  const [newEmail, setNewEmail] = useState(email);
  const [nom, setNom] = useState('');
  const [cognoms, setCognoms] = useState('');
  const [telefon, setTelefon] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState('');
  const [fetched, setFetched] = useState()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  function componentDidMount(res) {
    setNom(res.name),
      setCognoms(res.surname),
      setTelefon(res.phone),
      setCountry(res.country),
      setEmail(res.email),
      setData(res.birthdate)
  }
  useEffect(async () => {
    let token = await getAccessToken()
    let jsonData = { "email": email }
    let response = fetch(`${SERVER_DNS}/accounts/get-profile`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(jsonData),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        return res.json();
      })
      .catch((text) => {
        console.log(text.msg);
      });
    response = await response;
    setProducts(response.msg);
  }, []
  )

  const [first, setFirst] = useState(true)
  useEffect(() => {
    if (fetched != undefined) {
      if (first) {
        console.log('first')
        setFirst(false)
      }
      else {
        async function foo() {
          let token = await getAccessToken()
          let jsonData = { "email": newEmail, "name": nom, "surname": cognoms, "phone": telefon, "birthdate": data, "country": country }
          let response = fetch(`${SERVER_DNS}/accounts/update-profile`,
            {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify(jsonData),
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              }
            })
            .then(response => response.json())
            .catch((error) => {
            })
          const { success } = await response
          if (success) {
            console.log('changed on server')
            setEmail(newEmail)
          }
        }
        foo()
      }
    }
  }, [nom, cognoms, newEmail, telefon, country, data])

  useEffect(() => {
    console.log('call')
    if (fetched != undefined) {
      async function foo() {
        let token = await getAccessToken()
        let jsonData = { 'current_password': oldPassword, 'new_password': newPassword }
        let response = fetch(`${SERVER_DNS}/accounts/change-password`,
          {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData),
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .catch((error) => {
          })
        const { success } = await response
        if (success) {
          console.log('changed on server')
        }
      }
      foo()
    }
  }, [oldPassword])

  useEffectWithoutFirstRun(() => { componentDidMount(products); setFetched(true) }, [products])

  return (
    <>
      {fetched &&
        <Flex width="full" align="center" justifyContent="center" padding={"10px"}>
          <Box p={2}>
            <Box textAlign="center">
              <Heading>{'Personal information'}</Heading>
            </Box>
            <Box my={4} textAlign="left">

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Legal name</Text>
                  <Text color='gray'>{nom + ' ' + cognoms}</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"><EditName name={nom} surname={cognoms} onChange={(nom, cognom) => { setNom(nom); setCognoms(cognom) }}></EditName></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Email address</Text>
                  <Text color='gray'>{newEmail}</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"><EditMail email={newEmail} onChange={(email) => { setNewEmail(email) }}></EditMail></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Phone number</Text>
                  <Text color='gray'>{telefon}</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"><EditPhoneNumber phone={telefon} onChange={(tel) => setTelefon(tel)}></EditPhoneNumber></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Birthday</Text>
                  <Text color='gray'>{data}</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"><EditBirthDate data={data} onChange={(data) => setData(data)}></EditBirthDate></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Country</Text>
                  <Text color='gray'>{country}</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"><EditCountry country={country} onChange={(tel) => setCountry(tel)}></EditCountry></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Password</Text>
                  <Text color='gray'>**********</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"><EditPassword onChange={(oldp, newp) => { setOldPassword(oldp); setNewPassword(newp) }}></EditPassword></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>My households</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"> <Link href='/households'> <LinkIcon mx='2px' /></Link></Box>
              </Flex>

              <Divider></Divider>

              <Flex as='fieldset'>
                <Box my={4} textAlign="left">
                  <Text>Favourites</Text>
                </Box>
                <Spacer />
                <Box my={4} textAlign="left"> <Link href='/favourites'> <LinkIcon mx='2px' /></Link></Box>
              </Flex>

            </Box>
          </Box>
        </Flex>
      }
    </>
  );
}