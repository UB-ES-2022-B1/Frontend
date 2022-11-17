import {
    Button,
    Box,
    Flex,
    Spacer,
    Text,
    Heading,
} from '@chakra-ui/react'
import { useState } from 'react';


export default function TypeGroup() {
    const [kitchen, setkitchen] = useState(false);
    const [swiming_pool, setswiming_pool] = useState(false);
    const [garden, setgarden] = useState(false);
    const [billar_table, setbillar_table] = useState(false);
    const [gym, setgym] = useState(false);
    const [spacious, setspacious] = useState(false);
    const [TV, setTV] = useState(false);
    const [free_parking, setfree_parking] = useState(false);
    const [air_conditioning, setair_conditioning] = useState(false);
    const [washing_machine, setwashing_machine] = useState(false);
    const [dishwasher, setdishwasher] = useState(false);
    const [WIFII, setWIFII] = useState(false);
    const [central, setcentral] = useState(false);
    const [quite, setquite] = useState(false);
    const [alarm, setalarm] = useState(false);
    const [smoke_detector, setsmoke_detector] = useState(false);
    const [health_kit, sethealth_kit] = useState(false);

    console.log(kitchen);


    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <Flex width="700px" align="center" justifyContent="center" padding={"20px"} >
            <Box p={4}>
                <Box >
                    <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Tell guests everything your space offers
                    </Heading>
                    <Text marginY='25px'>You will be able to add more services after posting the ad</Text>
                </Box>
                <Box>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: WIFII ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setWIFII(!WIFII) }} >WIFII</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: TV ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setTV(!TV) }} >TV</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: kitchen ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setkitchen(!kitchen) }} >Kitchen</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: washing_machine ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setwashing_machine(!washing_machine) }} >Washing machine</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: free_parking ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setfree_parking(!free_parking) }} >Free parking</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: air_conditioning ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setair_conditioning(!air_conditioning) }} >Air conditioning</Button>
                </Box>
                <Box >
                    <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: 'lg', md: 'lg' }}>
                        Do you offer any unusual service?
                    </Heading>
                </Box>
                <Box>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: swiming_pool ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setswiming_pool(!swiming_pool) }} >Swiming Pool</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: garden ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setgarden(!garden) }} >Garden</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: billar_table ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setbillar_table(!billar_table) }} >Billar table</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: gym ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setgym(!gym) }} >GYM</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: spacious ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setspacious(!spacious) }} >Spacious</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: dishwasher ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setdishwasher(!dishwasher) }} >Dishwasher</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: central ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setcentral(!central) }} >Central</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: quite ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setquite(!quite) }} >Quite</Button>
                    <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: alarm ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setalarm(!alarm) }} >Alarm</Button>
                    <Box >
                        <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: 'lg', md: 'lg' }}>
                            Do you have any of these security items?
                        </Heading>
                    </Box>
                    <Box >
                        <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: smoke_detector ? "#d6d6d6" : "white" }} onClick={() => { handleClick; setsmoke_detector(!smoke_detector) }} >Smoke detector</Button>
                        <Button margin='5px' variant='outline' borderRadius={10} style={{ width: "147px", height: "147px", backgroundColor: health_kit ? "#d6d6d6" : "white" }} onClick={() => { handleClick; sethealth_kit(!health_kit) }} >Healh kit</Button>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}