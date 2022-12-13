import { Heading, Text, Box, Skeleton, SkeletonText, IconButton, Grid, GridItem, Stack, Flex, Spacer } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import example2 from '~/assets/example2.webp'
import Slider from "~/components/slider"
import Images from '../exports/images';
import { IMAGES_DNS, SERVER_DNS } from '~/utils/constants'
import { firstToUpperCase } from "~/utils/textUtils";
import { FiHeart } from "react-icons/fi";
import { isAuthenticated, getAccessToken } from '~/session';
import HouseTitle from "~/components/HouseTitleReformed";


async function houseLoader(id) {

    let jsonData = { "id_house": id }
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
        let urls = response.msg[0].images.map((i) => `${IMAGES_DNS}/${i}`)
        if (response.msg[0].images.length == 0) {
            return { ...response.msg[0], images: Images }
        }
        return { ...response.msg[0], images: urls }
    }
    else {
        return (
            {
                images: Images,
                town: 'Castelldefels',
                country: 'Spain',
                title: 'Casa grande con jardín',
                company_individual: 'A particular',
                num_people: 2,
                base_price: '285€'
            }
        )
    }
}


export default function ({id, isFavorite=false}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    const [isLoading, setIsLoading] = useState(true)
    const [house, setHouse] = useState({})
    const [isClicked, setisClicked] = useState(isFavorite)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => { isAuthenticated().then(res => setIsLoggedIn(res)) }, [])

    useEffect(() => {
        houseLoader(id).then((h) => {
            setHouse(h)
            setIsLoading(false)
        })
    }, [])

    async function favorits() {
        let access = await getAccessToken()
        let jsonData = { "id_house": id, "toAdd": !isClicked}
        let response = fetch(`${SERVER_DNS}/favorites/add-favorites`,
          {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData),
            headers: {
              'Authorization': `Bearer ${access}`,
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .catch((error) => {})
        console.log('a')        
      }

    return (
        <>
            <Box width={'900px'} m={'10px'} p={'10px 7px'} borderRadius={'10px'} boxShadow="lg" overflow={'hidden'}>

                <Flex spacing={8} >
                <a href={`/apartment/${id}`}>

                    <Box>
                        <Skeleton borderRadius={30} isLoaded={!isLoading}>

                            <Box>

                                <Slider
                                    width={'300px'}
                                    height={'300px'}
                                    autoplay={false}
                                    hover={true}
                                    infinite={false}
                                    images={house.images}
                                >
                                </Slider>
                            </Box>
                        </Skeleton>
                    </Box>
                </a>



                    <Box p='3px 10px' flex='1'>
                        <Skeleton isLoaded={!isLoading} margin={'10px 0px'}>
                            <HouseTitle
                                title={firstToUpperCase(`${house.title}`)}
                                town={house.town}
                                province={house.province}
                                country={house.country}
                                isFavorite={isFavorite}
                                id={id}
                            ></HouseTitle>
                        </Skeleton>
                        <SkeletonText noOfLines={4} isLoaded={!isLoading} margin={'10px 0px'}>
                            <Box as='span'>{firstToUpperCase(`${house.description}`)}</Box>

                            <Box as='span' color='gray' fontSize='sm'>
                                <Box>{firstToUpperCase(`${house.company_individual}`)} &bull; {house.num_people} guests &bull; {house.num_hab} bedrooms &bull; {house.num_beds} beds &bull; {house.num_bathrooms} bathrooms
                                </Box>
                            </Box>
                        </SkeletonText>
                    
                        <SkeletonText noOfLines={1} isLoaded={!isLoading}>
                        <Box flex={1} >
                                <Box as='b'>{`${house.base_price}€`}</Box>
                                <Box as='span' fontSize='sm'> night</Box>
                        </Box>
                        </SkeletonText>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}