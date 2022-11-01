import HouseTitle from "~/components/HouseTitle";
import Slider from "~/components/slider"
import ReservationCard from "~/components/ReservationCard"
import HouseDescription from "~/components/HouseDescription"
import HouseCharacteristics from "~//components/HouseCharacteristics";

import {
    Flex,
    Box,
    Heading,
    Spacer,
} from '@chakra-ui/react';

export default function Index() {

    return (
        <Box>
            <HouseTitle></HouseTitle>
            <Slider></Slider>

            <HouseDescription></HouseDescription>

            <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
                <HouseCharacteristics></HouseCharacteristics>
                <ReservationCard></ReservationCard>
            </Flex>
        </Box>
    );
}
