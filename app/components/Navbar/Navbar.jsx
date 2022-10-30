import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    Input,
    Button,
    FormControl,
    Flex,
    Box,
    Spacer,
    Text,
    IconButton,
    Divider,
    Center,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import Contador from './Contador';
import Dropdown from "~/components/Dropdown";


export default function (params) {

    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Text fontSize='3xl'>LOGO</Text>
            <Spacer />
            <Box p={1} maxWidth="1000px" borderWidth={1} borderRadius={30} boxShadow="lg">
                <Center height='50px'>

                    <Box textAlign="center">

                        <FormControl as='fieldset'>
                            <Popover>
                                <PopoverTrigger>
                                    <Button variant='ghost' borderRadius={30}>Destiny</Button>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader>Where?</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>

                                            <Input placeholder='Destiny' />

                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>

                            <Popover>
                                <PopoverTrigger>
                                    <Button variant='ghost' borderRadius={30}>Arrival</Button>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader>When?</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <Input type='date' />
                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>

                            <Popover>
                                <PopoverTrigger>
                                    <Button variant='ghost' borderRadius={30}>Departure</Button>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader>When?</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <Input type='date' />
                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>

                            <Popover>
                                <PopoverTrigger>
                                    <Button variant='ghost' borderRadius={30}>Travellers</Button>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader>How many?</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <Contador />

                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                            <IconButton colorScheme='purple' borderRadius={30} aria-label='Search' icon={<Search2Icon />} />
                        </FormControl>
                    </Box>
                </Center>
            </Box>
            <Spacer />
            <Dropdown />
        </Flex >
    );
}