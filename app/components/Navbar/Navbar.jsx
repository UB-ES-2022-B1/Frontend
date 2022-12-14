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
//import { useEffect, useState } from 'react';
import { isAuthenticated } from '~/session';
import { IMAGES_DNS, SERVER_DNS } from '~/utils/constants'

import logo from "~/assets/logo2.png"
import styles from "~/styles/navbar.css"

const defaultItems = [
    {
        slug: "/register/",
        anchor: "Register"
    },
    {
        slug: "/login/",
        anchor: "Log in"
    }
];
const otherItems = [
    {
        slug: "/add/",
        anchor: "Host your place"
    },
    {
        slug: "/profile/",
        anchor: "See profile"
    },
    {
        slug: "/households/",
        anchor: "My households"
    },
    {
        slug: "/favourites/",
        anchor: "Favourites"
    },
    {
        slug: "/logout/",
        anchor: "Log out"
    }
    
];


export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function (params) {
    //declarant variables
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => { isAuthenticated().then(res => setIsLoggedIn(res)) }, [])

    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(!isLoggedIn
            ?
            defaultItems
            : otherItems
        )

    }, [isLoggedIn])

    const [dateStart, setDateStart] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [people, setPeople] = useState(1)
    const [location, setLocation] = useState("")
    const [locationError, setLocationError] = useState({ locationError: false, locationErrorMess: "" });
    const [dateEndError, setDateEndError] = useState({ dateEndError: false, dateEndErrorMess: "" });
    const [dateStartError, setDateStartError] = useState({ dateStartError: false, dateStartErrorMess: "" });

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
    const validateLocation = useCallback((value) => {
        if (value.match(/^[A-Za-z]+$/) === null) {
            setLocationError((prev) => { return { locationError: true, locationErrorMess: 'Location can\'t contain numbers' } })
            return false
        } else {
            setLocationError((prev) => { return { ...prev, locationError: false } })
            return true
        }
    }, [location])

    const validateEndDate = useCallback((value) => {
        let end = new Date(value)
        let start = new Date(dateStart)
        if (end <= start) {
            setDateEndError((prev) => { return { dateEndError: true, dateEndErrorMess: 'End date must be later than start date' } })
            return false
        } else {
            setDateEndError((prev) => { return { ...prev, dateEndError: false } })
            return true
        }
    }, [dateEnd, dateStart])

    const validateStartDate = useCallback((value) => {

        let today = new Date(currentDate)
        let start = new Date(value)

        if (today > start) {
            setDateStartError((prev) => { return { dateStartError: true, dateStartErrorMess: 'Start date must be later or equal to today' } })
            return false
        }
        else {
            setDateStartError((prev) => { return { ...prev, dateStartError: false } })
            return true
        }
    }, [dateStart])



    const validateParam = useCallback(() => {
        let a = validateLocation(location)
        let b = validateStartDate(dateStart)
        let c = validateEndDate(dateEnd)

        return a && b && c
    }, [validateLocation, validateEndDate, validateStartDate])

    //Crides a back end
    async function handleSubmit() {
        if (validateParam()) {
            window.location.href = `/search?location=${location}&people=${people}&dateStart=${dateStart}&dateEnd=${dateEnd}`
        }
    }


    return (
        <>
            <div className='navbar scrolled'>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href={styles}
                />
                <Flex width="full" align="center" justifyContent="center" padding={"10px"} backgroundColor="#CDFCF6">
                    <div align="left">
                        <a href="/"><img width='100' height='100' src={logo} /></a>
                    </div>
                    <Spacer />
                    <Box p={1} maxWidth="1000px"  borderWidth={1} borderRadius={30} boxShadow="lg" backgroundColor="#FAF7F0">
                        <Center height='50px'>

                            <Box textAlign="center" borderRadius={30}>

                                <FormControl as='fieldset' isInvalid={locationError["locationError"]}>

                                    <Popover>
                                        <PopoverTrigger>
                                            <Button variant='ghost' style={{ color: locationError["locationError"] ? "red" : "black" }} borderRadius={30}>Destiny</Button>

                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverHeader backgroundColor="#FAF7F0">Where?</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <Input placeholder='Destiny' value={location} onChange={(e) => { setLocation(e.target.value); validateLocation(e.target.value) }} />
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger>
                                            <Button variant='ghost' style={{ color: dateStartError.dateStartError ? "red" : "black" }} borderRadius={30}>Arrival</Button>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverHeader backgroundColor="#FAF7F0">When?</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <Input type='date' min={currentDate} onChange={(e) => { setDateStart(e.target.value); validateStartDate(e.target.value) }} />
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger>
                                            <Button variant='ghost' style={{ color: dateEndError["dateEndError"] ? "red" : "black" }} borderRadius={30}>Departure</Button>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverHeader backgroundColor="#FAF7F0">When?</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <Input type='date' min={currentDate} onChange={(e) => { setDateEnd(e.target.value); validateEndDate(e.target.value) }} />
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
                                                <PopoverHeader backgroundColor="#FAF7F0">How many?</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <Flex>
                                                        <Button variant='outline' borderRadius={40} disabled={people < 1} onClick={decrease}>-</Button>{' '}
                                                        <Button variant='ghost' placeholder="1" disabled={true}>{people}</Button>
                                                        <Button variant='outline' borderRadius={40} disabled={people > 16} onClick={increase}>+</Button>{' '}
                                                    </Flex>

                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                    <IconButton backgroundColor="#98A8F8" borderRadius={30} aria-label='Search' icon={<Search2Icon />}
                                        onClick={handleSubmit}//handleSubmit
                                        isDisabled={locationError.locationError || dateEndError.dateEndError || dateStartError.dateStartError}
                                    />
                                </FormControl>
                            </Box>
                        </Center>
                    </Box>
                    <Spacer />
                    <Dropdown
                        avatar={"https://e7.pngegg.com/pngimages/323/705/png-clipart-user-profile-get-em-cardiovascular-disease-zingah-avatar-miscellaneous-white.png"}
                        items={items}
                    />
                </Flex >
            </div>
            <div style={{marginBottom:"120px"}}> </div>
        </>
                );
}