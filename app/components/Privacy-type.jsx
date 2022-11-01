import {
    Button,
    Box,
    Flex,
    Spacer,
} from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from 'react';

export default function PrivacyType(props) {
    const {onChangeValue} = props
    const [privacy, setPrivacy] = useState('');

    useEffect(()=>onChangeValue({privacy}),[privacy])

    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => {setPrivacy('An entire accommodation')}}>
                    An entire accommodation
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => {setPrivacy('A private room')}}>
                    A private room
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' textAlign="left" onClick={() => {setPrivacy('A shared room')}}>
                        A shared room
                        <Spacer></Spacer>
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}