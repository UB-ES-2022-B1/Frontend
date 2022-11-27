import React from 'react';
import { Box, IconButton, useBreakpointValue, Flex } from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
import Images from '../exports/images';
import { Image } from '@chakra-ui/react';


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function slider() {

  const [slider, setSlider] = React.useState('');

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  return (
    <Flex justifyContent="center" >
      <Box height={'530px'} width={'800px'} overflow='hidden' alignItems='center' position='relative'>
        { }
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        { }
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt />
        </IconButton>
        { }
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt />
        </IconButton>
        { }

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {Images.map((url, index) => (
            <Box
              key={index}
              position="relative">
              <Image src={url} borderRadius={30} position="relative" fit='scale-down' boxSize="100%"></Image>
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}