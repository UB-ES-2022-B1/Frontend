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
    IconButton,
    Center,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useState } from 'react';
import Dropdown from "~/components/Dropdown";


export default function (params) {
    const [dateStart, setDateStart] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [people, setPeople] = useState(0)
    const [location, setLocation] = useState("")
    
    const decrease = () => {
        setPeople(people - 1);
    }

    const increase = () => {
        setPeople(people + 1);
    }

    console.log(dateEnd);
    console.log(dateStart);
    console.log(people);
    console.log(location);
    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <div align="left">
                <a href="/"><img width='50' height='40' src='https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png' /></a>
            </div>
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
                                            <Input placeholder='Destiny' onChange={(e) => setLocation(e.target.value)} />
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
                                            <Input type='date' onChange={(e) => setDateStart(e.target.value)} />
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
                                            <Input type='date' onChange={(e) => setDateEnd(e.target.value)} />
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
                                            <Flex>
                                                <Button variant='outline' borderRadius={40} disabled={people <= 1} onClick={decrease}>-</Button>{' '}
                                                <Button variant='ghost' disabled={true}>{people}</Button>
                                                <Button variant='outline' borderRadius={40} disabled={people > 16} onClick={increase}>+</Button>{' '}
                                            </Flex>

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