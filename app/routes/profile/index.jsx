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
  PopoverCloseButton,
  Stack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import FocusLock from "react-focus-lock"
import { EditIcon, LinkIcon } from '@chakra-ui/icons'
import { useEffect, forwardRef, useCallback } from 'react';
import { useState, useRef } from "react";
import { useLocalStorage } from '~/utils/localStorage'
import { useLoaderData } from "@remix-run/react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun';
import { SERVER_DNS } from "~/utils/constants";
import { getAccessToken } from '~/session';


import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';




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

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    if (!nomError && !cognomsError) {
      //TODO--------------------------------
    }
    else {
      setErrorMessages("Please enter valid parameters")
      setIsSubmitting(false)
    }
  };

  const validateNom = useCallback(() => {
    if (nom === '') {
      setNameErrorMessages('Name is required');
      setNomError(true);
    } else if (nom.match(/^[A-Za-z]+$/) === null) {
      console.log("incorrecte: " + nom)
      setNameErrorMessages('Name can\'t contain numbers');
      setNomError(true);
    } else {
      setNomError(false);
    }
    console.log('validate nom' + nom)
  }, [nom])

  const validateCognoms = useCallback(() => {
    console.log('validate cognom')
    if (cognoms === '') {
      setCognomsErrorMessages('Surname is required');
      setCognomsError(true);
    } else if (cognoms.match(/[0-9]+/) != null) {
      console.log("incorrecte: " + cognoms)
      setCognomsErrorMessages('Surname is incorrect');
      setCognomsError(true);
    } else {
      setCognomsError(false);
    }
    console.log('validate nom' + cognoms)
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

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    if (!emailError) {
      //TODO--------------------------------
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
                  backgroundColor='#98A8F8'>
                  Save
                </Button>
              </ButtonGroup>
            </Stack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

const EditPhoneNumber = (props) => {
  
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [telefon, setTelefon] = useState('');
  const [telefonError, setTelefonError] = useState(false);
  const [telefonErrorMessage, setTelefonErrorMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    if (!telefonError) {
      //TODO--------------------------------
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
              <TextInput
                type='date'
                label='BirthDate'
                id='BirthDate'
                ref={firstFieldRef}
                defaultValue={props.data}
              />
              <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onClose}>
                  Cancel
                </Button>
                <Button isDisabled backgroundColor='#98A8F8'>
                  Save
                </Button>
              </ButtonGroup>
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

  const [nom, setNom] = useState('');
  const [nomError, setNomError] = useState(false);
  const [nameErrorMessages, setNameErrorMessages] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    if (!nomError) {
      //TODO--------------------------------
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


export default function Index() {
  const [products, setProducts] = useState('');
  const [email, setEmail] = useLocalStorage('email', '');
  const [nom, setNom] = useState('');
  const [cognoms, setCognoms] = useState('');
  const [telefon, setTelefon] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState('');

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
        console.log(res)
        return res.json();
      })
      .catch((text) => {
        console.log(text.msg);
      });
    response = await response;
    setProducts(response.msg);
  }, []
  )
  useEffectWithoutFirstRun(() => componentDidMount(products), [products])

  return (
    <Flex width="full" align="center" justifyContent="center" padding={"120px"}>
      <Box p={8}>
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
            <Box my={4} textAlign="left"><EditName name={nom} surname={cognoms}></EditName></Box>
          </Flex>

          <Divider></Divider>

          <Flex as='fieldset'>
            <Box my={4} textAlign="left">
              <Text>Email address</Text>
              <Text color='gray'>{email}</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"><EditMail email={email} ></EditMail></Box>
          </Flex>

          <Divider></Divider>

          <Flex as='fieldset'>
            <Box my={4} textAlign="left">
              <Text>Phone number</Text>
              <Text color='gray'>{telefon}</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"><EditPhoneNumber phone={telefon} ></EditPhoneNumber></Box>
          </Flex>

          <Divider></Divider>

          <Flex as='fieldset'>
            <Box my={4} textAlign="left">
              <Text>Birthday</Text>
              <Text color='gray'>{data}</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"><EditBirthDate data={data} ></EditBirthDate></Box>
          </Flex>

          <Divider></Divider>

          <Flex as='fieldset'>
            <Box my={4} textAlign="left">
              <Text>Country</Text>
              <Text color='gray'>{country}</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"><EditCountry country={country} ></EditCountry></Box>
          </Flex>

          <Divider></Divider>

          <Flex as='fieldset'>
            <Box my={4} textAlign="left">
              <Text>Favourites</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"> <Link href='http://192.168.1.65:3000/favourites/' > <LinkIcon mx='2px' /> </Link></Box>
          </Flex>

        </Box>
      </Box>
    </Flex>
  );
}