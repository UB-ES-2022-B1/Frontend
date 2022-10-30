import {
    Button,
    Box,
    Flex,
    Spacer,
    Text,
} from '@chakra-ui/react'
import React, { Component } from 'react';
import { useState } from 'react';

export default function (params) {

    const [beds, setBeds] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [guests, setGuests] = useState(1);
    const decreaseGuests = () => {
        setGuests(guests - 1);
    }
    const increaseGuests = () => {
        setGuests(guests + 1);
    }
    const decreaseBeds = () => {
        setBeds(beds - 1);
    }
    const increaseBeds = () => {
        setBeds(beds + 1);
    }
    const decreaseBedrooms = () => {
        setBedrooms(bedrooms - 1);
    }
    const increaseBedrooms = () => {
        setBedrooms(bedrooms + 1);
    }
    const decreaseBathrooms = () => {
        setBathrooms(bathrooms - 1);
    }
    const increaseBathrooms = () => {
        setBathrooms(bathrooms + 1);
    }

    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Box>
                <Flex>
                    <Box p='3'>
                        <Text fontSize='lg'>Guests</Text>
                    </Box>
                    <Spacer />
                    <Box p='3'>
                    <Flex>
            <Button variant='outline' borderRadius={40} disabled={guests <= 1} onClick={decreaseGuests}>-</Button>{' '}
            <Button variant='ghost' disabled={true}>{guests}</Button>
            <Button variant='outline' borderRadius={40} disabled={guests > 16} onClick={increaseGuests}>+</Button>{' '}
        </Flex>
                    </Box>
                </Flex>
                <Flex>
                    <Box p='3'>
                        <Text fontSize='lg'>Beds</Text>
                    </Box>
                    <Spacer />
                    <Box p='3'>
                    <Flex>
            <Button variant='outline' borderRadius={40} disabled={beds <= 1} onClick={decreaseBeds}>-</Button>{' '}
            <Button variant='ghost' disabled={true}>{beds}</Button>
            <Button variant='outline' borderRadius={40} disabled={beds > 50} onClick={increaseBeds}>+</Button>{' '}
        </Flex>
                    </Box>
                </Flex>
                <Flex>
                    <Box p='3'>
                        <Text fontSize='lg'>Bedrooms</Text>
                    </Box>
                    <Spacer />
                    <Box p='3'>
                    <Flex>
            <Button variant='outline' borderRadius={40} disabled={bedrooms <= 1} onClick={decreaseBedrooms}>-</Button>{' '}
            <Button variant='ghost' disabled={true}>{bedrooms}</Button>
            <Button variant='outline' borderRadius={40} disabled={bedrooms > 50} onClick={increaseBedrooms}>+</Button>{' '}
        </Flex>
                    </Box>
                </Flex>
                <Flex>
                    <Box p='3'>
                        <Text fontSize='lg'>Bathrooms</Text>
                    </Box>
                    <Spacer />
                    <Box p='3'>
                    <Flex>
            <Button variant='outline' borderRadius={40} disabled={bathrooms <= 1} onClick={decreaseBathrooms}>-</Button>{' '}
            <Button variant='ghost' disabled={true}>{bathrooms}</Button>
            <Button variant='outline' borderRadius={40} disabled={bathrooms > 50} onClick={increaseBathrooms}>+</Button>{' '}
        </Flex>
                    </Box>
                </Flex>

            </Box>
        </Flex>
    )
}