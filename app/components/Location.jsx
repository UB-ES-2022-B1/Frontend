import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export default function Location(props) {
  const { onChangeValue } = props
  const [provincia, setProvincia] = useState("")
  const [carrer, setCarrer] = useState("")
  const [ciutat, setCiutat] = useState("")
  const [codi_postal, setCodi_postal] = useState("")
  const [extra, setExtra] = useState("")

  useEffect(() => onChangeValue({ location }), [location])
  return (
    <Flex
      align={'center'}
      justify={'center'}>
      <Box>
        <Box >
          <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Where is your accommodation located?
          </Heading>
          <Text marginY='25px'>We will only share the address with guests after they have made the reservation.</Text>
        </Box>

        <Text marginTop='25px'>Province:</Text>
        <FormControl id="provincia">
          <Input
            placeholder="Barcelona"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e) => setProvincia(e.target.value)}
          />
        </FormControl>
        <Text marginTop='25px'>Street:</Text>
        <FormControl id="carrer">
          <Input
            placeholder="C/ Gran Via de les Corts Catalanes, 585"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e) => setCarrer(e.target.value)}
          />
        </FormControl>
        <Text marginTop='25px'>Extra:</Text>
        <FormControl id="extra">
          <Input
            placeholder="2n,1"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e) => setExtra(e.target.value)}
          />
        </FormControl>
        <Flex>
          <Box width="70%">
          <Text marginTop='25px'>City:</Text>
          <FormControl id="ciutat">
            <Input
              placeholder="Barcelona"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e) => setCiutat(e.target.value)}
            />
          </FormControl>
          </Box>
          <Box width="30%">
          <Text marginTop='25px'>CP::</Text>
          <FormControl id="codiPostal">
            <Input
              placeholder="12345"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e) => setCodi_postal(e.target.value)}
            />
          </FormControl>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}