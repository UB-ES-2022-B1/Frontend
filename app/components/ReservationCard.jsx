import { useEffect, useState } from "react";
import {
    Box,
    Text,
    Input,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Divider,
    Center,
    Spacer
} from '@chakra-ui/react'
import Contador from "./Navbar/Contador";



export default function (params) {
    const {moneyDay, taxes, extra} = params;
    const [travelers, setTravelers] = useState(1);
    const [travelersText, setTravelersText] = useState('traveler');
    const maxTravelers = 10;
    const textTravelersMax = 'A maximum of ' + maxTravelers + ' travelers can stay in this accommodation, without including babies.';

    const [startDay, setStartDay] = useState('');
    const [endDay, setEndDay] = useState('');
    const totalDay = endDay - startDay;

    const [moneyTotalDays, setMoneyTotalDays] = useState(moneyDay * totalDay);


    const [moneyTotal, setMoneyTotal] = useState(moneyTotalDays + taxes + extra);

    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

    const decrease = () => {
        setTravelers(travelers - 1);
    }

    const increase = () => {
        setTravelers(travelers + 1);
    }
    const travelersChange = () => {
        if (travelers < 2) {
            setTravelersText('traveler')
        }
        else {
            setTravelersText('travelers')
        }
    }


    return (

        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4'>
            <Box p='3'>
                <Text fontSize='xl' as='b'>{moneyDay} € night</Text >
            </Box>
            <Box display='flex' alignItems='baseline'>
                <Box width='350px' borderWidth='1px' borderRadius='lg' overflow='hidden'>

                    <Center height='50px'>
                        <Box>
                            <Text fontSize='xs' >Arrival</Text >
                            <Input type='date' min={currentDate} value={startDay} onChange={(e) => setStartDay(e.target.value)} width='170px' placeholder='Llegada' variant='unstyled' size='lg' />
                        </Box>
                        <Divider orientation='vertical' />
                        <Box >
                            <Text fontSize='xs' >Departure</Text >
                            <Input type='date' value={endDay} onChange={(e) => setEndDay(e.target.value)} width='170px' variant='unstyled' size='lg' />
                        </Box>
                    </Center>
                    <Divider orientation='horizontal' />
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen} as={Button} minWidth='350px' variant='unstyled'>
                                    {travelers} {'traveler'}{travelers > 1 ? 's' : ''}
                                </MenuButton>
                                <MenuList minWidth='350px' variant='unstyled' maxWidth='351px'>
                                    <Box p='3'>
                                        <Text fontSize='md' >Adults
                                            <Button borderRadius={30} disabled={travelers <= 1} onClick={decrease}>-</Button>
                                            <Button borderRadius={30} disabled={travelers >= maxTravelers} onClick={increase}>+</Button>
                                        </Text >
                                    </Box>
                                    <Box p='3'>
                                        <Text fontSize='xs' >{textTravelersMax}</Text>
                                        <Button variant='link'><Text as='u' fontSize='s'>Close</Text></Button>
                                    </Box>


                                </MenuList>
                            </>
                        )}
                    </Menu>

                </Box>

            </Box>
            <Box p='3'></Box>
            <Button colorScheme='purple' width='350px'>Reserve</Button>
            <Box p='3'></Box>
            <Text textAlign="center" fontSize='md'>You will not be charged anything yet</Text >
            <Box p='3'></Box>
            <Box display='flex' alignItems='baseline'>
                <Button variant='link'><Text as='u' fontSize='s'>{moneyDay} € x {totalDay} nights</Text></Button>
                <Spacer />
                <Text fontSize='md'>{moneyTotalDays} €</Text >
            </Box>
            <Box display='flex' alignItems='baseline'>
                <Button variant='link'><Text as='u' fontSize='s'>Taxes</Text></Button>
                <Spacer />
                <Text fontSize='md'>{taxes} €</Text >
            </Box>
            <Box display='flex' alignItems='baseline'>
                <Button variant='link'><Text as='u' fontSize='s'>Extra costs</Text></Button>
                <Spacer />
                <Text fontSize='md'>{extra} €</Text >
            </Box>
            <Center height='50px'>
                <Box>
                    <Divider />
                    <Text fontSize='md' as='b'>Total {moneyTotal}€</Text >

                </Box>

            </Center>

        </Box>

    )
}