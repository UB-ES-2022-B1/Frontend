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
    const {description} = params;


    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Box p='3' >
                <Box>
                    <Text fontSize='xl'>
                        {description}
                    </Text>
                </Box>
            </Box>
        </Flex>

    )
    }