import { useState, useEffect, useCallback } from "react";
import {
    Text,
    Heading,
    Flex,
    Button,
    Box,
    IconButton,
    Spacer,
    Divider,
    Image,
    Input,
    Center,
    FormErrorMessage,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FiMapPin, FiUser, FiDollarSign } from "react-icons/fi";
import { useLoaderData } from "@remix-run/react";
import moment from "moment";


export const loader = async ({
    request
}) => {
    const url= new URL(request.url);
    const moneyTotal = url.searchParams.get("moneyTotal");
    const startDay = url.searchParams.get("startDay");
    const endDay = url.searchParams.get("endDay");
    const guests = url.searchParams.get("guests");
    const title = url.searchParams.get("title");
    const town = url.searchParams.get("town");
    const extra = url.searchParams.get("extra");
    const taxes = url.searchParams.get("taxes");
    const province = url.searchParams.get("province");
    const country = url.searchParams.get("country");
    const street = url.searchParams.get("street");
    const images = url.searchParams.get("images");
    const preuDia = url.searchParams.get("preuDia");
    const id = url.searchParams.get("id");
    const totalDay = url.searchParams.get("totalDay");
    return {preuDia:preuDia, extra:extra, taxes:taxes, 
        moneyTotal:moneyTotal, startDay:startDay, 
        endDay:endDay, guests:guests, title:title, 
        town:town, province:province, country:country, 
        street:street, images:images,
        id:id, totalDay:totalDay}
};

export default function Index() {
    const params = useLoaderData();
    const [numTarjeta, setNumTarjeta] = useState('');
    const [dateTarjeta, setDateTarjeta] = useState('');
    const [cvc, setCvc] = useState('');
    
    const datos = { id: params.id, dataEntrada: params.startDay, dataSalida: params.endDay, 
                    huespedes: params.guests, municipi: params.town, carrer: params.street, 
                    pais: params.country, provincia: params.province, 
                    imagen: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg', 
                    titulo: params.title, precioTotal: params.moneyTotal, preuDia: params.preuDia, 
                    extra: params.extra, taxes: params.taxes, diasTotales: params.totalDay };
    const backPage = "/apartment/" + datos.id;
    const [dateError, setDateError] = useState({ dateError: true, dateErrorMess: "" });
    const [cvcError, setCvcError] = useState({ cvcError: true, cvcErrorMess: "" });
    const [numError, setNumError] = useState({ numError: true, numErrorMess: "" });
    const [isReserved, setIsReserved] = useState(false)
    const totalDay = moment(datos.dataSalida).diff(datos.dataEntrada,'days');
    

    //Validations
    const validateTarjeta = useCallback((value) => {
        if (value === '') {
            setNumError((prev) => { return { numError: true, numErrorMess: "Card is required" } });
        }
        else {
            setNumError((prev) => { return { ...prev, numError: false } });
        }
    }, [numTarjeta])
    const validateCVC = useCallback((value) => {
        if (value === '') {
            setCvcError((prev) => { return { cvcError: true, cvcErrorMess: "CVC is required" } });
        }
        else {
            setCvcError((prev) => { return { ...prev, cvcError: false } });
        }
    }, [cvc])
    const validateDate = useCallback((value) => {
        if (value === '') {
            setDateError((prev) => { return { dateError: true, dateErrorMess: "Date is required" } });
        }
        else {
            setDateError((prev) => { return { ...prev, dateError: false } });
        }
    }, [dateTarjeta])

    const validateParameters = useCallback(() => {
        validateDate()
        validateCVC()
        validateTarjeta()
    }, [validateDate, validateCVC, validateTarjeta])

    return (
        <Flex width="full" align="center" justifyContent="center" padding="20px">
            <Box>
                {isReserved ?
                    <>
                        <Box textAlign="center" marginTop='15' width='500px' height='100px'>
                            <Heading>Everything is ready for your reservation in {datos.municipi}</Heading>
                            <Box>
                                <Box align="center" justifyContent="center" marginY='10'>
                                    <Image borderRadius={8} src={datos.imagen} boxSize='250px' objectFit='cover' />
                                </Box>
                                <Divider></Divider>
                                <Flex align="center" justifyContent="center" margin='5'>
                                    <Center height='80px'>
                                        <Box marginRight='50' >
                                            <Text as='b' fontSize='s'>Arrival date</Text>
                                            <Text fontSize='md'>{datos.dataEntrada}</Text >
                                        </Box>

                                        <Divider orientation='vertical'></Divider>
                                        <Box marginLeft='50'>
                                            <Text as='b' fontSize='s'>Departure date</Text>
                                            <Text fontSize='md'>{datos.dataSalida}</Text >
                                        </Box>
                                    </Center>
                                </Flex>
                                <Divider></Divider>
                                <Flex marginBottom='2'>
                                    <Box marginY='5' marginRight='1'>
                                        <FiMapPin size='30' />
                                    </Box>
                                    <Box marginY='3' align="left" justifyContent="left">
                                        <Text as='b' fontSize='s'>How to get</Text>
                                        <Text fontSize='md'>Address: {datos.carrer}, {datos.municipi}, {datos.provincia}, {datos.pais}</Text >
                                    </Box>
                                </Flex>
                                <Divider></Divider>
                                <Flex marginBottom='2'>
                                <Box marginY='5' marginRight='1'>
                                        <FiUser size='30' />
                                    </Box>
                                    <Box marginY='3' align="left" justifyContent="left">
                                        <Text as='b' fontSize='s'>Who is coming?</Text>
                                        <Text fontSize='md'>{datos.huespedes} guests</Text >
                                    </Box>
                                </Flex>
                                <Divider></Divider>
                                <Flex marginBottom='2'>
                                <Box marginY='5' marginRight='1'>
                                        <FiDollarSign size='30' />
                                    </Box>
                                    <Box marginY='3' align="left" justifyContent="left">
                                        <Text as='b' fontSize='s'>Payment details</Text>
                                        <Text fontSize='md'>Total cost: {datos.precioTotal}€</Text >
                                    </Box>
                                </Flex>
                                <Divider></Divider>
                            </Box>


                            <Button
                                borderColor="#98A8F8"
                                variant="outline"
                                width="full"
                                mt={4}
                                onClick={() => location.href = '/'}
                            >
                                Home
                            </Button>
                        </Box>
                    </>
                    :
                    <Box>
                        <Flex marginY='10'>
                            <a href = { backPage }>
                            <IconButton variant='ghost' borderRadius='30' aria-label='Search database' icon={<ChevronLeftIcon />} />
                            </a>
                            <Heading marginLeft='2'>Send a reservation request</Heading>
                        </Flex>
                        <Flex>
                            <Box marginRight={20} width='350px'>
                                <Text fontSize='2xl' as='b'>Your trip</Text>
                                <Box marginTop='5'>
                                    <Text as='b'>Dates</Text>
                                </Box>
                                <Box display='flex' alignItems='baseline' marginY='3'>
                                    <Text as='u' fontSize='s'>Arrival date</Text>
                                    <Spacer />
                                    <Text fontSize='md'>{datos.dataEntrada}</Text >
                                </Box>
                                <Box display='flex' alignItems='baseline'>
                                    <Text as='u' fontSize='s'>Departure date</Text>
                                    <Spacer />
                                    <Text fontSize='md'>{datos.dataSalida}</Text >
                                </Box>

                                <Box marginTop='5' marginBottom='10'>
                                    <Text as='b'>Guests</Text>
                                    <Text fontSize='md' marginY='3'>{datos.huespedes} travellers</Text >
                                </Box>
                                <Divider></Divider>
                                <Box marginTop='8'>
                                    <Text fontSize='2xl' as='b'>Pay with card</Text>
                                </Box>
                                <Box marginY='1'>
                                    <Flex>
                                        <Image src='https://www.pixartprinting.es/blog/wp-content/uploads/2019/07/mastercard.png' boxSize='35px' objectFit='scale-down' marginRight='2' />
                                        <Image src='https://1000marcas.net/wp-content/uploads/2019/12/Visa-logo.jpg' boxSize='35px' objectFit='scale-down' marginRight='2' />
                                        <Image src='https://w7.pngwing.com/pngs/662/383/png-transparent-amex-payment-method-icon-thumbnail.png' boxSize='35px' objectFit='scale-down' marginRight='2' />
                                        <Image src='https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784403_960_720.png' boxSize='35px' objectFit='scale-down' marginRight='2' />
                                    </Flex>
                                </Box>
                                <Box marginY='5'>
                                    <Box width='350px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                        <Box>
                                            <Input padding="15px" type='text' value={numTarjeta} onChange={(e) => { setNumTarjeta(e.target.value); validateTarjeta() }} height='50px' placeholder='Card number' variant='unstyled' size='lg' autofocus />
                                        </Box>
                                        <Divider orientation='horizontal' />
                                        <Center height='50px'>
                                            <Box>
                                                <Input padding="15px" type='text' value={dateTarjeta} onChange={(e) => { setDateTarjeta(e.target.value); validateDate() }} width='170px' placeholder='Expiration' variant='unstyled' size='lg' />
                                            </Box>
                                            <Divider orientation='vertical' />
                                            <Box >
                                                <Input padding="15px" type='number' value={cvc} onChange={(e) => { setCvc(e.target.value); validateCVC() }} width='170px' variant='unstyled' size='lg' placeholder='CVV' />

                                            </Box>
                                        </Center>
                                    </Box>
                                </Box>

                            </Box>

                            <Box borderWidth='1px' borderRadius={8} width='400px' height='388px'>
                                <Flex margin='5'>
                                    <Image borderRadius={8} src={datos.imagen} boxSize='100px' objectFit='cover' />
                                    <Text marginX='3'>{datos.titulo}</Text>
                                </Flex>
                                <Divider></Divider>
                                <Box marginY='3' marginX='5'>
                                    <Text fontSize='2xl' as='b'>Price details</Text>
                                </Box>
                                <Box display='flex' alignItems='baseline' marginX='5'>
                                    <Text as='u' fontSize='s' marginBottom='3'>{params.preuDia} € x {totalDay} nights</Text>
                                    <Spacer />
                                    <Text fontSize='md'>{datos.preuDia * totalDay} €</Text >
                                </Box>
                                <Box display='flex' alignItems='baseline' marginX='5'>
                                    <Text as='u' fontSize='s'>Taxes</Text>
                                    <Spacer />
                                    <Text fontSize='md'>{datos.taxes} €</Text >
                                </Box>
                                <Box display='flex' alignItems='baseline' marginX='5' marginBottom='3'>
                                    <Text as='u' fontSize='s' marginY='3'>Extra costs</Text>
                                    <Spacer />
                                    <Text fontSize='md'>{datos.extra} €</Text >
                                </Box>
                                <Divider></Divider>
                                <Box display='flex' alignItems='baseline' margin='5'>
                                    <Text fontSize='md' as='b'>Total (EUR)</Text>
                                    <Spacer />
                                    <Text>{datos.precioTotal}€</Text >
                                </Box>
                            </Box>
                        </Flex>
                        <Button type='submit' backgroundColor="#98A8F8" align='center' width='350px' height='60px' onClick={() => { validateParameters(); setIsReserved(!isReserved) }} isDisabled={dateError.dateError || cvcError.cvcError || numError.numError}>
                            Send a reservation request
                        </Button>
                    </Box>
                }
            </Box>
        </Flex>
    );
}
