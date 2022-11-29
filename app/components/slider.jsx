import React from 'react';
import { Box, IconButton, useBreakpointValue, Flex } from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
import Images from '../exports/images';
import { Image } from '@chakra-ui/react';
import dots from "~/styles/dots.css";
import { useEffect } from 'react';



function NextArrow(props){
  if(!props.infinite && props.currentSlide >= props.slideCount-1){
    console.log("rerender")
    return
  }
  return <IconButton
  aria-label="right-arrow"
  borderRadius="full"
  position="absolute"
  right={{ base: '30%', md: '10px' }}
  top={{ base: '90%', md: '50%' }}
  transform={'translate(0%, -50%)'}
  zIndex={2}
  onClick={props.onClick}>
  <BiRightArrowAlt />
</IconButton>
}
function PrevArrow(props)
{
if(!props.infinite && props.currentSlide <= 0){
  return
}
return <IconButton
aria-label="left-arrow"
borderRadius="full"
position="absolute"
left={{ base: '30%', md: '10px' }}
top={{ base: '90%', md: '50%' }}
transform={'translate(0%, -50%)'}
zIndex={2}
onClick={props.onClick}
>
<BiLeftArrowAlt />
</IconButton>
}



export default function slider({height='530px',width='800px',hover=false,infinite=true, autoplay=true, images=Images}) {
  const [slider, setSlider] = React.useState('');
  const [arrows, showArrows] = React.useState(!hover)

  
  const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: infinite,
    autoplay: autoplay,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow infinite={infinite}></NextArrow>,
    prevArrow:<PrevArrow infinite={infinite}></PrevArrow>
  };



  return (
    <Flex justifyContent="center" >
      <Box height={height} width={width} overflow='hidden' alignItems='center' position='relative'
          onMouseEnter={()=>showArrows(true)}
          onMouseLeave={()=>showArrows(!hover)}
      >
        { }
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href={dots}
        />
        { }
        {/* <IconButton
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
        { } */}

        <Slider {...settings} arrows={arrows} ref={(slider) => setSlider(slider)}>
          {images.map((url, index) => (
            // <Box
            //   key={index}
            //   position="relative">
            //   <Image src={url} borderRadius={30} position="relative" fit='scale-down' boxSize="100% 100%"></Image>
            // </Box>

              <Image src={url} 
              borderRadius={30} 
              position="relative" 
              fit='cover' 
              height={height} 
              width={width}

              ></Image>



            // <Box boxSize='sm'>
            //   <Image src={url} position="relative" fit='fill'></Image>
            // </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
    // <Flex justifyContent="center" >

    // <div style={{
    //   width: width,
    //   height: height,
    //   display:"block" 
    // }}>
    //   <Slider {...settings} ref={(slider) => setSlider(slider)}>
    //   {images.map((url, index) => (
    //     // <Box
    //     //   key={index}
    //     //   position="relative">
    //     //   <Image src={url} borderRadius={30} position="relative" fit='scale-down' boxSize="100% 100%"></Image>
    //     // </Box>

    //       <Image src={url} borderRadius={30} position="relative" fit='cover' height={'300px'}></Image>



    //     // <Box boxSize='sm'>
    //     //   <Image src={url} position="relative" fit='fill'></Image>
    //     // </Box>
    //   ))}
    //   </Slider>
    // </div>
    // </Flex>

  );
}