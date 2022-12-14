import HouseTitle from "~/components/HouseTitle";
import Slider from "~/components/slider"
import ReservationCard from "~/components/ReservationCard"
import HouseDescription from "~/components/HouseDescription"
import HouseCharacteristics from "~/components/HouseCharacteristics";
import CapacidadApartamento from "~/components/capacidadApartamento";
import { beautifyText, firstToUpperCase } from "~/utils/textUtils";

import {
    Flex,
    Box,
    Divider,
    Skeleton,
} from '@chakra-ui/react';
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { useState } from "react";
import { SERVER_DNS, IMAGES_DNS } from "~/utils/constants";

export const loader = async ({
    params,
}) => {
    return params;
};

export default function Index() {
    const params = useLoaderData();


    const [kitchen, setKitchen] = useState('');
    const [swimming_pool, setSwimming] = useState('');
    const [garden, setGarden] = useState('');
    const [billar_table, setPooltable] = useState('');
    const [gym, setGym] = useState('');
    const [TV, setTv] = useState('');
    const [WIFI, setWifi] = useState('');
    const [washing_machine, setWashingM] = useState('');
    const [dishwasher, setDish] = useState('');
    const [air_conditioning, setAir] = useState('');
    const [free_parking, setParking] = useState('');
    const [spacious, setSpacious] = useState('');
    const [central, setCentral] = useState('');
    const [quite, setCalmed] = useState('');
    const [alarm, setAlarm] = useState('');
    const [health_kit, setBotiquin] = useState('');
    const [smoke_detector, setSmoke] = useState('');

    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [company_individual, setCompany_individual] = useState('');
    const [num_people, setNum_people] = useState('');
    const [num_beds, setNum_beds] = useState('');
    const [num_bathrooms, setNum_bathrooms] = useState('');
    const [num_hab, setNum_hab] = useState('');
    const [base_price, setBase_price] = useState('');
    const [taxes, setTaxes] = useState('');
    const [extra_costs, setExtra_costs] = useState('');

    const [town, setTown] = useState('');
    const [province, setProvince] = useState('');
    const [street, setStreet] = useState('');
    const [country, setCountry] = useState('');
    const [images, setImages] = useState([]);

    const [inexistent, setInexistent] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    function componentsSet(res) {
        setTitle(firstToUpperCase(res.title)),
            setCountry(res.country),
            setStreet(res.street),
            setProvince(res.province),
            setTown(res.town),
            setNum_people(res.num_people),
            setNum_beds(res.num_beds),
            setNum_bathrooms(res.num_bathrooms),
            setNum_hab(res.num_hab),
            setDescription(beautifyText(res.description)),
            setBase_price(res.base_price),
            setTaxes(res.taxes),
            setExtra_costs(res.extra_costs),
            setKitchen(res.kitchen),
            setSwimming(res.swimming_pool),
            setGarden(res.garden),
            setPooltable(res.billar_table),
            setGym(res.gym),
            setTv(res.TV),
            setWifi(res.WIFII),
            setWashingM(res.washing_machine),
            setDish(res.dishwasher),
            setAir(res.air_conditioning),
            setParking(res.free_parking),
            setSpacious(res.spacious),
            setCentral(res.central),
            setCalmed(res.quite),
            setAlarm(res.alarm),
            setBotiquin(res.health_kit),
            setSmoke(res.smoke_detector),
            setImages(res.images.map((i)=>`${IMAGES_DNS}/${i}`))
    }

    useEffect(async () => {
        let jsonData = { "id_house": params.id }
        let response = fetch(`${SERVER_DNS}/houses/get-house`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                return res.json();
            })
            .catch((text) => {
                console.log(txt.msg);
            })
        response = await response;
        if (response.success) {
            componentsSet(response.msg[0]);
            setIsLoading(false)
        }
        else {
            setInexistent(true)
        }
    }, [])


    return (
        <>
            {isLoading ? null:
            inexistent ? <h1>No house with this id</h1> :
                <Box>
                    <HouseTitle
                        title={title}
                        town={ town}
                        province={province }
                        country={ country}
                        id = {params.id}
                    ></HouseTitle>
                    <Flex justifyContent={"center"}>
                    <Slider images={images}></Slider>
                    </Flex>
                    <Box marginTop={8}>
                        <Flex width="full" justifyContent="center">
                            <Box marginRight={20}>
                                <CapacidadApartamento
                                    guests={num_people}
                                    bedrooms={num_hab}
                                    beds={num_beds}
                                    bathrooms={num_bathrooms}
                                ></CapacidadApartamento>

                                <Divider marginTop={5} marginBottom={5}></Divider>

                                <HouseDescription
                                    description={description}
                                ></HouseDescription>

                                <Divider marginTop={5} marginBottom={5}></Divider>

                                <HouseCharacteristics
                                    Kitchen={kitchen}
                                    swimming={swimming_pool}
                                    garden={garden}
                                    pooltable={billar_table}
                                    gym={gym}
                                    tv={TV}
                                    wifi={WIFI}
                                    washingMachine={washing_machine}
                                    dishwasher={dishwasher}
                                    aireAcond={air_conditioning}
                                    parking={free_parking}
                                    spacious={spacious}
                                    central={central}
                                    calmed={quite}
                                    Alarm={alarm}
                                    botiquin={health_kit}
                                    smokeDetector={smoke_detector}
                                ></HouseCharacteristics>
                            </Box>
                            <Box>
                                <ReservationCard
                                    moneyDay={ base_price }
                                    taxes={ taxes}
                                    extra={ extra_costs }
                                    guests={ num_people }
                                    title={title }
                                    town={ town }
                                    province={province }
                                    country={ country }
                                    street={ street }
                                    images={images[0]}
                                    id={ params.id }
                                ></ReservationCard>
                            </Box>

                        </Flex>
                    </Box>
                </Box>}
        </>
    );
}
