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
    const [privacy,type,guests, beds, bedrooms, bathrooms] = params;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');


    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Box p='3' >
                <Text>
                    {privacy} + {ty}
                </Text>
                <Text fontSize='xs'>
                    {guests} + guests · + {bedrooms} + bedrooms · + {beds} + beds · + {bathrooms} + bathrooms
                </Text>
            </Box>
        </Flex>
    )
}