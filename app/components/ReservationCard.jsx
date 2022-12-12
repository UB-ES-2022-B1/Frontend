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
import moment from "moment";

/*function handleSubmit() {
    console.log(2)
    if (validateParam()) {
        window.location.href = `/search?location=${location}&people=${people}`
    }
}*/

export default function (params) {
    const preuDia = params.moneyDay;
    const taxes = params.taxes;
    const extra = params.extra;
    const [travelers, setTravelers] = useState(1);
    const [travelersText, setTravelersText] = useState('traveler');
    const maxTravelers = 10;
    const textTravelersMax = 'A maximum of ' + maxTravelers + ' travelers can stay in this accommodation, without including babies.';
    const [startDay, setStartDay] = useState('');
    const [endDay, setEndDay] = useState('');
    const totalDay = moment(endDay).diff(startDay,'days');


    const [moneyTotal, setMoneyTotal] = useState(totalDay * preuDia + taxes + extra);

    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    console.log("Prueva " + totalDay)
  

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
                <Text fontSize='xl' as='b'>{preuDia} € night</Text >
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
            <Button backgroundColor='#98A8F8' width='350px' onClick={() => location.href = `/pagament?moneyTotal=${totalDay * preuDia + taxes + extra}&preuDia=${preuDia}&startDay=${startDay}&endDay=${endDay}&guests=${travelers}&title=${params.title}&town=${params.town}&province=${params.province}&country=${params.country}&street=${params.street}&images=${params.images}&id=${params.id}&totalDay=${params.totalDay}&taxes=${taxes}&extra=${extra}`}>Reserve</Button>
            <Box p='3'></Box>
            <Text textAlign="center" fontSize='md'>You will not be charged anything yet</Text >
            <Box p='3'></Box>
            <Box display='flex' alignItems='baseline'>
                <Button variant='link'><Text as='u' fontSize='s'>{preuDia} € x {totalDay} nights</Text></Button>
                <Spacer />
                <Text fontSize='md'>{totalDay * preuDia + taxes + extra} €</Text >
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