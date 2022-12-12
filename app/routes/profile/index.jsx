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
} from '@chakra-ui/react';
import FocusLock from "react-focus-lock"
import { useNavigate } from "react-router-dom";
import { EditIcon,LinkIcon } from '@chakra-ui/icons'
import { useEffect, forwardRef } from 'react';
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

          <Flex as='fieldset'>
            <Box my={4} textAlign="left">
              <Text>My households</Text>
            </Box>
            <Spacer />
            <Box my={4} textAlign="left"> <Link href='/households'> <LinkIcon mx='2px' /></Link></Box>
          </Flex>

        </Box>
      </Box>
    </Flex>
  );
}