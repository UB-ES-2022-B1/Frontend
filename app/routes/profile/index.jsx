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
  InputGroup,
  PopoverArrow,
  InputRightElement,
  PopoverCloseButton,
  Stack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import FocusLock from "react-focus-lock"
import { ViewIcon } from '@chakra-ui/icons'
import { EditIcon } from '@chakra-ui/icons'
import { useEffect, forwardRef } from 'react';
import { useState, useRef } from "react";
import { useLocalStorage } from '~/utils/localStorage'
import { useLoaderData } from "@remix-run/react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun';
import { SERVER_DNS } from "~/utils/constants";
import { getAccessToken } from '~/session';
import { useMemo, useCallback } from "react";

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
                label='First name'
                id='first-name'
                ref={firstFieldRef}
                defaultValue={props.name}
              />
              <TextInput label='Last name' id='last-name' defaultValue={props.surname} />
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

const EditMail = (props) => {
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
                type='email'
                label='Email address'
                id='Email-address'
                ref={firstFieldRef}
                defaultValue={props.email}
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

const EditPhoneNumber = (props) => {
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
                label='Phone number'
                id='Phone-number'
                ref={firstFieldRef}
                defaultValue={props.phone}
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
                label='Country'
                id='Country'
                ref={firstFieldRef}
                defaultValue={props.country}
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



export default function Index() {
  const [products, setProducts] = useState('');
  const [email, setEmail] = useLocalStorage('email', '');
  const [nom, setNom] = useState('');
  const [cognoms, setCognoms] = useState('');
  const [telefon, setTelefon] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessages, setpasswordErrorMessages] = useState('')

  function componentDidMount(res) {
    setNom(res.name),
      setCognoms(res.surname),
      setTelefon(res.phone),
      setCountry(res.country),
      setEmail(res.email),
      setData(res.birthdate),
      setPassword(res.password)
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

  const validatePassword = useCallback(() => {
    if (password.length < 8) {
      setpasswordErrorMessages('Minimum 8 characters');
      setPasswordError(true);
    }
    else if (password.match(/(?=.*?[A-Z])/) == null) {
      setpasswordErrorMessages("At least one uppercase letter");
      setPasswordError(true);
    }
    else if (password.match(/(?=.*?[a-z])/) == null) {
      setpasswordErrorMessages("At least one lowercase letter");
      setPasswordError(true);
    }
    else if (password.match(/(?=.*?[0-9])/) == null) {
      setpasswordErrorMessages("At least one digit");
      setPasswordError(true);
    }
    else if (password.match(/(?=.*?[#?.,!@$%^&*-])/) == null) {
      setpasswordErrorMessages("At least one special character");
      setPasswordError(true);
    }
    else {
      setPasswordError(password === '')

    }
  }, [password])

  useEffectWithoutFirstRun(() => componentDidMount(products), [products])

  const EditPassword = (props) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = useRef(null)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

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
            <FormControl isInvalid={passwordError}>
                  <FormLabel> Current password</FormLabel>
                  <InputGroup>
                    <Input
                      label='Current password'
                      id='current_password'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter current password'
                      onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement >
                    <IconButton h='2rem' size='sm' variant='ghost' onClick={handleClick} icon={<ViewIcon/>}>
                        {show ? 'Hide' : 'Show'}
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
                  {!passwordError ? null : (
                    <FormErrorMessage>{passwordErrorMessages}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={passwordError}>
                  <FormLabel> New password</FormLabel>
                  <InputGroup>
                    <Input
                      label='New password'
                      id='new_password'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter new password'
                      onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement >
                    <IconButton h='2rem' size='sm' variant='ghost' onClick={handleClick} icon={<ViewIcon/>}>
                        {show ? 'Hide' : 'Show'}
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
                  {!passwordError ? null : (
                    <FormErrorMessage>{passwordErrorMessages}</FormErrorMessage>
                  )}
                </FormControl>
              <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onClose}>
                  Cancel
                </Button>
                <Button backgroundColor='#98A8F8' onClick={validatePassword} type='submit' isDisabled={passwordError}>
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
              <Text>Password</Text>
              <Text color='gray'>********</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"><EditPassword password={password} ></EditPassword></Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}