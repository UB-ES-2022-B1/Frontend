import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    Flex,
    Text,
} from '@chakra-ui/react'

import React, { useState, useCallback } from 'react'

export default function () {


    return (
        <Flex width="100%" height='50px' position='fixed'  left='0' bottom='0'>
            <Box width="full" backgroundColor="#FAF7F0">
                <Divider></Divider>
                <Flex marginLeft='20' marginTop='2'>
                    <Text color='#696969'>© Housh 2022</Text>
                    <Text color='#696969' marginLeft='3'>·</Text>
                    <Button variant='link' color='#808080' marginLeft='3'>
                        Privacy
                    </Button>
                    <Text color='#696969' marginLeft='3'>·</Text>
                    <Button variant='link' color='#808080' marginLeft='3'>
                        Conditions
                    </Button>
                </Flex>
            </Box>
        </Flex>

    )
}