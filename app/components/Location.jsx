import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  
  
  export default function Location(props){
    const {onChangeValue} = props
    const [location, setLocation] = useState("")

    useEffect(()=>onChangeValue({location}),[location])
    return (
      <Flex
        align={'center'}
        justify={'center'}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Location
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            >
          </Text>
          <FormControl id="location">
            <Input
              placeholder="C/ Gran Via de les Corts Catalanes, 585"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e)=>setLocation(e.target.value)}
            />
          </FormControl>
        </Stack>
      </Flex>
    );
  }