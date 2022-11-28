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
import { useEffect, useState } from 'react';
import { isAuthenticated } from '~/session';

const defaultItems = [
    {
      slug: "/register/",
      anchor: "Register"
    },
    {
      slug: "/login/",
      anchor: "Log in"
    },
    {
      slug: "/add/",
      anchor: "Host your place"
    },
    {
      slug: "/profile/",
      anchor: "See profile"
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
        slug: "/logout/",
        anchor: "Log out"
    }
  ];

export default function (params) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{isAuthenticated().then(res => setIsLoggedIn(res))},[])
    
    const [items, setItems] = useState([])
    useEffect(()=>{
        setItems(!isLoggedIn
            ?
            defaultItems
            : otherItems
            )

    },[isLoggedIn])
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
            <Dropdown 
            avatar={"https://e7.pngegg.com/pngimages/323/705/png-clipart-user-profile-get-em-cardiovascular-disease-zingah-avatar-miscellaneous-white.png"} 
            items={items}
            />
        </Flex >
    );
}