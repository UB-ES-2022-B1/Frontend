import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Flex,
    Box,
    Heading,
    Input, 
    Button, 
    InputGroup, 
    InputLeftElement, 
    InputRightElement 
  } from '@chakra-ui/react'

export default function Index() {
    

    return (
    <div className="register-form">
        <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
                <Heading>{'YOUR PROFILE'}</Heading>
            </Box>
                <Box my={4} textAlign="left">
                    <FormLabel>Name</FormLabel>

                    <FormLabel>Surname</FormLabel>
                    
                    <FormLabel>Telephone</FormLabel>

                    <FormLabel>Birth date</FormLabel>

                    <FormLabel>Email</FormLabel>

                    <FormLabel>Password</FormLabel>
                </Box>
            </Box>
        </Flex>
    </div>
    );
}