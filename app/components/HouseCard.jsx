import { Heading, Text, Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import example2 from '~/assets/example2.webp'
import Slider from "~/components/slider"
import Images from '../exports/images';
import {IMAGES_DNS, SERVER_DNS} from '~/utils/constants'
import { firstToUpperCase } from "~/utils/textUtils";

async function houseLoader(id) 
{

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
        let urls = response.msg[0].images.map((i)=>`${IMAGES_DNS}/${i}`)
        if(response.msg[0].images.length == 0){
            return {...response.msg[0], images:Images}
        }
        return {...response.msg[0], images:urls}
    }
    else {
        return (
            {
                images: Images,
                town: 'Castelldefels',
                country: 'Spain',
                title: 'Casa grande con jardín',
                company_individual: 'A particular',
                num_people:2,
                base_price:'285€'
            }
        )
    }
}


export default function(params)
{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    const [isLoading, setIsLoading] = useState(true)
    const [house, setHouse] = useState({})

    useEffect(()=>
    {
        houseLoader(params.id).then((h)=>{
        setHouse(h)
        setIsLoading(false)
        })
    },[])

    return (
    <a href={`/apartment/${params.id}`}>
    <div className="housecard">
        <div>
            <Slider
                width={'250px'}
                height={'250px'}
                autoplay={false}
                hover={true}
                infinite={false}
                images={house.images}
            />
        </div>
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
                <Box as='span'color='gray' fontSize='sm'>
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
    )
}