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

export default function Index() {
    const [numTarjeta, setNumTarjeta] = useState('');
    const [dateTarjeta, setDateTarjeta] = useState('');
    const [cvc, setCvc] = useState('');
    const datos = { id: '1', dataEntrada: "2022-12-08", dataSalida: "2022-12-16", huespedes: '3', imagen: 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg', titulo: 'Lujosa y moderna villa ecológica con piscina', precioTotal: '1215', precioPorNoche: '150', extra: '10', taxes: '5', diasTotales: '8' };
    const backPage = "/apartment/" + datos.id;

    const [dateError, setDateError] = useState({ dateError: true, dateErrorMess: "" });
    const [cvcError, setCvcError] = useState({ cvcError: true, cvcErrorMess: "" });
    const [numError, setNumError] = useState({ numError: true, numErrorMess: "" });

    const navigateToBackPage = () => {
        //window.location.href = { backPage }
    };

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
                <Flex marginY='10'>
                    <IconButton onClick={navigateToBackPage()} variant='ghost' borderRadius='30' aria-label='Search database' icon={<ChevronLeftIcon />} />
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
                                    <Input style={{ color: numError.numError ? "red" : null }} padding="15px" type='text' value={numTarjeta} onChange={(e) => { setNumTarjeta(e.target.value);validateTarjeta()}} height='50px' placeholder='Card number' variant='unstyled' size='lg' autofocus />
                                </Box>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Box>
                                        <Input padding="15px" type='text' value={dateTarjeta} onChange={(e) =>{ setDateTarjeta(e.target.value);validateDate()}} width='170px' placeholder='Expiration' variant='unstyled' size='lg' />
                                    </Box>
                                    <Divider orientation='vertical' />
                                    <Box >
                                        <Input padding="15px" type='number' value={cvc} onChange={(e) => { setCvc(e.target.value); validateCVC()}} width='170px' variant='unstyled' size='lg' placeholder='CVV' />

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
                            <Text as='u' fontSize='s' marginBottom='3'>{datos.precioPorNoche} € x {datos.diasTotales} nights</Text>
                            <Spacer />
                            <Text fontSize='md'>{datos.precioPorNoche * datos.diasTotales} €</Text >
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
                <Button type='submit' backgroundColor="#98A8F8" align='center' width='350px' height='60px' onClick={validateParameters} isDisabled={dateError.dateError || cvcError.cvcError || numError.numError}>
                    Send a reservation request
                </Button>
            </Box>
        </Flex>
    );
}
