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

import images from '../exports/images'
import{motion} from 'framer-motion'

import React from 'react'

const Slider = () => {
    return(
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x' dragConstraints={{right:0, left:-2122}}>
            {images.map(image => (
                <motion.div className ='item'> 
                    <img src={image} alt="" /> 
                </motion.div>

            ))}
            </motion.div>
            
        </motion.div>
    )
}

export default Slider