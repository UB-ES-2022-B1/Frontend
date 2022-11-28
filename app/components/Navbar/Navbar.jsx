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
    background,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import {
    useState,
    useCallback,
    useEffect
} from 'react';
import Dropdown from "~/components/Dropdown";
import { useFetcher } from 'react-router-dom';


export default function (params) {
    //declarant variables
    const [dateStart, setDateStart] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [people, setPeople] = useState(0)
    const [location, setLocation] = useState("")
    var locationError = { locationError: false, locationErrorMess: "" };
    var dateEndError = { dateEndError: false, dateEndErrorMess: "" };
    var dateStartError = { dateStartError: false, dateStartErrorMess: "" };
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

    //declarem funcions
    const decrease = () => {
        setPeople(people - 1);
    }

    const increase = () => {
        setPeople(people + 1);
    }

    //validar parametres de input de cerca
    const validateLocation = useCallback(() => {
        if (location.match(/^[A-Za-z]+$/) === null) {
            locationError['locationErrorMess'] = 'Location can\'t contain numbers';
            locationError['locationError'] = true;
        } else {
            locationError['locationError'] = false;
        }
        console.log(locationError["locationErrorMess"])
    }, [location])

    const validateEndDate = useCallback(() => {
        let end = new Date(dateEnd)
        let start = new Date(dateStart)
        if (end<=start) {
            locationError['dateEndErrorMess'] = 'End date must be later than start date';
            locationError['dateEndError'] = true;
        } else {
            locationError['dateEndError'] = false;
        }
        console.log(locationError["dateEndErrorMess"])
    }, [dateEnd,dateStart])

    const validateStartDate = useCallback(() => {
        
        let today = new Date(currentDate)
        let start = new Date(dateStart)
        
        if (today > start) {
            locationError['dateStartErrorMess'] = 'Start date must be later or equal to today';
            locationError['dateStartError'] = true;
        } else {
            locationError['dateStartError'] = false;
        }
        console.log(locationError["dateStartErrorMess"])
    }, [dateStart])
    
    

    const validateParam = useCallback(() => {
        validateLocation()
        validateStartDate()
        validateEndDate()
    }, [validateLocation,validateEndDate,validateStartDate])

    //Crides a back end
    async function handleSubmit(event) { }

    
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

                        <FormControl as='fieldset' isInvalid={locationError["locationError"]}>
                            
                                <Popover>
                                    <PopoverTrigger>
                                        <Button variant='ghost' style = {{color:locationError["locationError"]? "red":"black"}} borderRadius={30}>Destiny</Button>
                                        
                                    </PopoverTrigger>
                                    <Portal>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverHeader>Where?</PopoverHeader>
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Input placeholder='Destiny' value = {location} onChange={(e) => setLocation(e.target.value)} />
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Portal>
                                </Popover>
                            
                            <Popover>
                                <PopoverTrigger>
                                    <Button variant='ghost' style = {{color:dateStartError["dateStartError"]? "red":"black"}} borderRadius={30}>Arrival</Button>
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
                                    <Button variant='ghost' style = {{color:dateEndError["dateEndError"]? "red":"black"}} borderRadius={30}>Departure</Button>
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
                            <IconButton colorScheme='purple' borderRadius={30} aria-label='Search' icon={<Search2Icon />}
                                onClick={validateParam}//handleSubmit
                                isDisabled={locationError['locationError']}
                            />
                        </FormControl>
                    </Box>
                </Center>
            </Box>
            <Spacer />
            <Dropdown />
        </Flex >
    );
}