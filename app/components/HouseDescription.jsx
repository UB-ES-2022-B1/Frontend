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

export default function (params) {
    const description = "House in the Heights of Castelldefels perfect for the summer. Spectacular views from the terrace and very good connection with Barcelona.";



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