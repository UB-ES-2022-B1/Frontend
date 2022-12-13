import { Heading, Text, Box, Skeleton, SkeletonText, IconButton } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import example2 from '~/assets/example2.webp'
import Slider from "~/components/slider"
import Images from '../exports/images';
import { IMAGES_DNS, SERVER_DNS } from '~/utils/constants'
import { firstToUpperCase } from "~/utils/textUtils";
import { FiHeart } from "react-icons/fi";
import { isAuthenticated } from '~/session';
import { getAccessToken } from '~/session';

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


export default function ({id,isFavorite=false}) {
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
        let jsonData = { "id_house": params.id, "toAdd": !isClicked}
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
      }

    return (
        <>
            <Box>
                {isLoggedIn ?
                    <IconButton
                        marginLeft='199'
                        marginTop='3'
                        position='absolute'
                        variant='link'
                        zIndex={1}
                        onClick={() => { setisClicked(!isClicked); favorits() }}
                        icon={<FiHeart
                            className='heart'
                            fill={isClicked ? "red" : "#1a1b1b"}
                            opacity={isClicked ? 1 : 0.5}
                            color={isClicked ? "red" : "white"} />}>
                    </IconButton >
                    : null}
                <a href={`/apartment/${id}`}>
                    <div className="housecard">
                        <Skeleton borderRadius={30} isLoaded={!isLoading}>

                        <div>
                            <Box>
                                <Box zIndex={1} position='absolute' marginLeft='205' marginTop='3'>

                                </Box>
                                <Slider
                                    width={'250px'}
                                    height={'250px'}
                                    autoplay={false}
                                    hover={true}
                                    infinite={false}
                                    images={house.images}
                                >
                                </Slider>
                            </Box>
                        </div>
                        </Skeleton>

                        <Box p='2px'>
                            <Skeleton isLoaded={!isLoading}>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    {`${house.town}, ${house.country}`}
                                </Box>

                            </Skeleton>
                            <SkeletonText noOfLines={3} isLoaded={!isLoading}>
                                <Box as='span' color='gray' fontSize='sm'>
                                    <Box>{firstToUpperCase(`${house.title}`)}</Box>
                                    <Box>{firstToUpperCase(`${house.company_individual}`)} &bull; {house.num_people} people</Box>
                                </Box>
                                <Box >
                                    <Box as='b'>{`${house.base_price}€`}</Box>
                                    <Box as='span' fontSize='sm'> night</Box>
                                </Box>
                            </SkeletonText>
                            {/* <Heading fontSize={'1xl'} as='b'>{house.location}</Heading>
            <Text>{house.sublocation}</Text>
            <Text>{house.dates}</Text>
            <div><Text as='b'>{house.price}</Text><Text>night</Text></div> */}

                        </Box>
                    </div>
                </a>
            </Box>
        </>
    )
}