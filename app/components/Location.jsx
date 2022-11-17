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
  const [location, setLocation] = useState("")

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
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
        >
        </Text>
        <FormControl id="location">
          <Input
            placeholder="C/ Gran Via de les Corts Catalanes, 585"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
      </Box>
    </Flex>
  );
}