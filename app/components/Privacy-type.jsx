import {
    Button,
    Box,
    Flex,
    Heading,
    Spacer,
} from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from 'react';

export default function PrivacyType(props) {
    const { onChangeValue } = props
    const [privacy, setPrivacy] = useState('');

    useEffect(() => onChangeValue({ privacy }), [privacy])

    return (
        <Flex width="700px" align="center" justifyContent="center" padding={"20px"} >
            <Box>
                <Box >
                    <Heading marginY='25px'lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        What type of accommodation will guests have?
                    </Heading>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: privacy === 'An entire accommodation' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setPrivacy('An entire accommodation') }}>
                        An entire accommodation
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: privacy === 'A private room' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setPrivacy('A private room') }}>
                        A private room
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: privacy === 'A shared room' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' textAlign="left" onClick={() => { setPrivacy('A shared room') }}>
                        A shared room
                        <Spacer></Spacer>
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}