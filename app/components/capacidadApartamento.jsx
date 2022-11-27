import {
    Box,
    Button,
    Text,
    Flex,
    ButtonGroup,
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverBody,
    Portal,
    PopoverCloseButton,
    AspectRatio,
    PopoverArrow,
    PopoverHeader,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormErrorMessage,
    FormControl,
} from '@chakra-ui/react'

import React, { useState, useCallback } from 'react'



export default function (params) {
    const { privacy, ty, guests, beds, bedrooms, bathrooms } = params;

    return (
        <Flex width="full">
            <Box>
                <Text as='b' fontSize='2xl'>
                    {privacy}: {ty}
                </Text>
                <Text fontSize='s'>
                    {guests} guests · {bedrooms} bedrooms · {beds} beds · {bathrooms} bathrooms
                </Text>
            </Box>
        </Flex>
    )
}