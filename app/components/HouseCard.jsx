import { Heading, Text, Box } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import example2 from '~/assets/example2.webp'
import Slider from "~/components/slider"
import Images from '../exports/images';


export const houseLoader = (id) => 
{
    return (
        {
            images: Images,
            location: 'Castelldefels, España',
            sublocation: 'Playa de Castelldefels',
            dates:'12-17 oct',
            price:'285€'
        }
    )
    // return json(
    //   await fakeDb.project.findMany(
    //     {
    //     where: {
    //       userId: params.userId,
    //       projectId: params.projectId,
    //     },
    //   })
    // );
  };

export default function(params)
{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    let house = houseLoader(params.id)
    return (
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
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                >
                {house.location}
            </Box>
            <Box as='span'color='gray' fontSize='sm'>
                <Box>{house.sublocation} &bull; {house.dates}</Box>
            </Box>
            <Box >
                <Box as='b'>{house.price}</Box>
                <Box as='span' fontSize='sm'> night</Box>
            </Box>
            {/* <Heading fontSize={'1xl'} as='b'>{house.location}</Heading>
            <Text>{house.sublocation}</Text>
            <Text>{house.dates}</Text>
            <div><Text as='b'>{house.price}</Text><Text>night</Text></div> */}
        </Box>
    </div>
    )
}