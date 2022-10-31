import {
    AspectRatio,
    Box,
    Container,
    forwardRef,
    Heading,
    Input,
    Stack,
    Text
  } from "@chakra-ui/react";
import { SimpleGrid, Wrap } from "@chakra-ui/react";
import { id } from "date-fns/locale";
  import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState, useMemo } from "react";
import ImageSlider from "react-simple-image-slider";
import RemovableImageCard from "./RemovableImageCard";
  
  const first = {
    rest: {
      rotate: "-15deg",
      scale: 0.95,
      x: "-50%",
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: "-70%",
      scale: 1.1,
      rotate: "-20deg",
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const second = {
    rest: {
      rotate: "15deg",
      scale: 0.95,
      x: "50%",
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: "70%",
      scale: 1.1,
      rotate: "20deg",
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const third = {
    rest: {
      scale: 1.1,
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      scale: 1.3,
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const PreviewImage = forwardRef((props, ref) => {
    return (
      <Box
        bg="white"
        top="0"
        height="100%"
        width="100%"
        position="absolute"
        borderWidth="1px"
        borderStyle="solid"
        rounded="sm"
        borderColor="gray.400"
        as={motion.div}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
        {...props}
        ref={ref}
      /> 
    );
  });


  export default function ImageUploader() {
    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();


    const [images, setImages] = useState([])
    const [previews, setPreviews] = useState([])
    const [currentId, setId] = useState(0)
    // const [removeItems, setRemoveItems] = useState((id)=>{return})

    const addImages = (imgs) =>{
        Array.from(imgs).forEach((file)=>{
            let image = {id:currentId,file:file}
            setImages((prev)=>[...prev,image])
            setPreviews((prev)=>
            {
                let newPreviews = showImage(image)
                return [...prev, newPreviews]
            })
            setId(currentId+1)
        })
    }

    const removeItem = useCallback((id)=>{
        console.log(previews)

        let newPrevs = previews.filter(item=>item.id !== id)
        setPreviews(newPrevs) //shown images

        let newImages = images.filter(item=>item.id !== id)
        setImages(newImages) //files
    },[images,previews])

    const showImage = (image) => {
        let id = image.id
        const objectUrl = URL.createObjectURL(image.file)
     
        // free memory when ever this component is unmounted
        return {id:image.id, url:objectUrl, remove:() => {
            console.log("removing")
            removeItem(id)
            URL.revokeObjectURL(objectUrl)
        }}
    }


    const printInfo = useEffect(()=>{
        console.log('Images',images)
        console.log('Previews',previews)
    },[images,previews])

    return (
      <><Container my="12">
            <AspectRatio width="100" ratio={1}>
                <Box
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderWidth="2px"
                    rounded="md"
                    shadow="sm"
                    role="group"
                    transition="all 150ms ease-in-out"
                    _hover={{
                        shadow: "md"
                    }}
                    as={motion.div}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                >
                    <Box position="relative" height="100%" width="100%">
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            height="100%"
                            width="100%"
                            display="flex"
                            flexDirection="column"
                        >
                            <Stack
                                height="100%"
                                width="100%"
                                display="flex"
                                alignItems="center"
                                justify="center"
                                spacing="4"
                            >
                                <Box height="32" width="24" position="relative">
                                    <PreviewImage
                                        variants={first}
                                        backgroundImage="url('https://i.imgur.com/eP38Q5D.jpeg')" />
                                    <PreviewImage
                                        variants={second}
                                        backgroundImage="url('https://i.imgur.com/kl0Pbvr.jpeg')" />
                                    <PreviewImage
                                        variants={third}
                                        backgroundImage={`url("https://i.imgur.com/Kv5g7nE.jpeg")`} />
                                </Box>
                                <Stack p="8" textAlign="center" spacing="1">
                                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                        Drop images here
                                    </Heading>
                                    <Text fontWeight="light">or click to upload</Text>
                                </Stack>
                            </Stack>
                        </Box>
                        <Input
                            type="file"
                            height="100%"
                            width="100%"
                            position="absolute"
                            top="0"
                            left="0"
                            opacity="0"
                            aria-hidden="true"
                            multiple={true}
                            accept="image/*"
                            onDragEnter={startAnimation}
                            onDragLeave={stopAnimation}
                            onChange={(e) => addImages(e.target.files)} 
                            onClick={event => event.target.value = null}
                        />
                    </Box>
                </Box>
            </AspectRatio>
        </Container>
        <Box>
            <Wrap minChildWidth='200px' spacing='40px' justify='center'>
                {previews.map((img) => {
                    return <RemovableImageCard url={img.url} remove={img.remove}></RemovableImageCard>
                })}       
            </Wrap>
 
        </Box>
        </>
    );
  }
  