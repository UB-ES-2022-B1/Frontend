import {
    Button,
    Box,
    Flex,
    Spacer,
    Heading,
    HStack,
} from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from "react";


export default function TypeGroup(props) {
    const { onChangeValue } = props
    const [ty, setTy] = useState('');

    useEffect(() => onChangeValue({ ty }), [ty])

    return (
        <Flex width="700px" align="center" justifyContent="center" padding={"20px"} >
            <Box>
                <Box >
                    <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Which of these options best describes your accommodation?
                    </Heading>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: ty === 'Apartment' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setTy('Apartment') }}>
                        Apartment
                        <Spacer></Spacer>
                        <img style={{ width: 50, height: 50 }} src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartamento-familiar-moderno2-1634505925.jpg"} />
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: ty === 'House' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setTy('House') }}>
                        House
                        <Spacer></Spacer>
                        <img style={{ width: 50, height: 50 }} src={"https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg"} />
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: ty === 'Attached house' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setTy('Attached house') }}>
                        Attached house
                        <Spacer></Spacer>
                        <img style={{ width: 50, height: 50 }} src={"https://upgradedhome.com/wp-content/uploads/2021/09/shutterstock_1188162424.jpg"} />
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: ty === 'Unique space' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setTy('Unique space') }}>
                        Unique space
                        <Spacer></Spacer>
                        <img style={{ width: 50, height: 50 }} src={"https://cdn.architecturendesign.net/wp-content/uploads/2014/10/Unique-Houses-11.jpg"} />
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: ty === 'Bed and breakfast' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setTy('Bed and breakfast') }}>
                        Bed and breakfast
                        <Spacer></Spacer>
                        <img style={{ width: 50, height: 50 }} src={"https://www.riverwindinn.com/wp-content/uploads/2019/05/champagne-roses-bed.jpg"} />
                    </Button>
                </Box>
                <Box p='1'>
                    <Button style={{ backgroundColor: ty === 'Hotel boutique' ? "#d6d6d6" : "white" }} variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => { setTy('Hotel boutique') }}>
                        Hotel boutique
                        <Spacer></Spacer>
                        <img style={{ width: 50, height: 50 }} src={"https://s3.eu-central-1.amazonaws.com/images.sebogo.com/blog-articles/October2019/boutique.jpg"} />
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}