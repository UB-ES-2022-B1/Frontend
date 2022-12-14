import { useEffect, useState, useCallback } from "react";
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
import { isAuthenticated } from '~/session';
import moment from "moment";


export default function (params) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => { isAuthenticated().then(res => setIsLoggedIn(res)) }, [])
    
    const preuDia = params.moneyDay;
    const taxes = params.taxes;
    const extra = params.extra;
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

    const [travelers, setTravelers] = useState(1);
    const maxTravelers = 10;
    const textTravelersMax = 'A maximum of ' + maxTravelers + ' travelers can stay in this accommodation, without including babies.';
    const [startDay, setStartDay] = useState(currentDate);
    const [endDay, setEndDay] = useState(currentDate);
    const [dateEndError, setDateEndError] = useState({ dateEndError: false, dateEndErrorMess: "" });
    const [dateStartError, setDateStartError] = useState({ dateStartError: false, dateStartErrorMess: "" });
    const totalDay = moment(endDay).diff(startDay,'days');
    const [moneyTotalDays, setMoneyTotalDays] = useState(preuDia.getDate * totalDay.getDate);
    const [moneyTotal, setMoneyTotal] = useState(moneyTotalDays + taxes + extra);
    

  

    const decrease = () => {
        setTravelers(travelers - 1);
    }

    const increase = () => {
        setTravelers(travelers + 1);
    }
    async function handleSubmit() {
        if(isLoggedIn){
            if (validateParam()) {
                window.location.href = `/pagament?moneyTotal=${moneyTotal}&preuDia=${preuDia}&startDay=${startDay}&endDay=${endDay}&guests=${travelers}&title=${params.title}&town=${params.town}&province=${params.province}&country=${params.country}&street=${params.street}&images=${params.images}&id=${params.id}&totalDay=${params.totalDay}&taxes=${taxes}&extra=${extra}`
            }
        }else{
            window.location.href = `/login`
        }
        
    }


    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4'>
            <Box p='3'>
                <Text fontSize='xl' as='b'>{preuDia} € night</Text >
            </Box>
            <Box display='flex' alignItems='baseline'>
                <Box width='350px' borderWidth='1px' borderRadius='lg' overflow='hidden'>

                    <Center height='50px'>
                        <Box>
                            <Text fontSize='xs' >Arrival</Text >
                            <Input type='date' min={currentDate} value={startDay} onChange={(e) => {setStartDay(e.target.value); validateStartDate(e.target.value)}} width='170px' placeholder='Llegada' variant='unstyled' size='lg' />
                        </Box>
                        <Divider orientation='vertical' />
                        <Box >
                            <Text fontSize='xs' >Departure</Text >
                            <Input type='date' min={startDay} value={endDay} onChange={(e) => { setEndDay(e.target.value); validateEndDate(e.target.value) }} width='170px' variant='unstyled' size='lg' />
                        </Box>
                    </Center>
                    <Divider orientation='horizontal' />
                    <Menu>
                        {({ isOpen, onClose }) => (
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
                                        <Button variant='link'><Text as='u' fontSize='s' onClick={onClose}>Close</Text></Button>
                                    </Box>


                                </MenuList>
                            </>
                        )}
                    </Menu>

                </Box>

            </Box>
            <Box p='3'></Box>
            <Button 
                backgroundColor='#98A8F8' 
                width='350px' 
                isDisabled={ dateEndError.dateEndError || dateStartError.dateStartError }
                onClick={() => handleSubmit()}>
                    Reserve
                </Button>
            <Box p='3'></Box>
            <Text textAlign="center" fontSize='md'>You will not be charged anything yet</Text >
            <Box p='3'></Box>
            <Box display='flex' alignItems='baseline'>
                <Button variant='link'><Text as='u' fontSize='s'>{preuDia} € x {totalDay} nights</Text></Button>
                <Spacer />
                <Text fontSize='md'>{totalDay * preuDia} €</Text >
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
                    <Text fontSize='md' as='b'>Total {totalDay * preuDia + taxes + extra}€</Text >

                </Box>

            </Center>

        </Box>

    )
}