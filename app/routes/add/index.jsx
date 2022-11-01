import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import ImageUploader from "~/components/ImageUploader";
import { useEffect } from 'react';
import TypeGroup from '~/components/Type-group';
import FloorPlant from '~/components/FloorPlant';
import PrivacyType from '~/components/Privacy-type';
import AddTitle from '~/components/addTitle';
import AddPrice from '~/components/addPrice';
import AddDescription from '~/components/addDescription';
import Location from '../../components/Location';

const Form1 = ({onChangeValue}) => {
  return(
    <TypeGroup onChangeValue={onChangeValue}></TypeGroup>
  );
};
const Form2 = ({onChangeValue}) => {
  return(
    <PrivacyType onChangeValue={onChangeValue}></PrivacyType>
  );
};
const Form3 = ({onChangeValue}) => {
  return(
    <Location onChangeValue={onChangeValue}></Location>
  )
};
const Form4 = ({onChangeValue}) => {
  return(
    <FloorPlant onChangeValue={onChangeValue}></FloorPlant>
  );
};
const Form5 = ({onChangeValue}) => {
  return (
    <ImageUploader onChangeValue={onChangeValue}></ImageUploader>
  );
};
const Form6 = ({onChangeValue}) => {
  return (
  <AddTitle onChangeValue={onChangeValue}></AddTitle>
  );
  
};
const Form7 = ({onChangeValue}) => {
  return (
  <AddDescription onChangeValue={onChangeValue} ></AddDescription>
  );
};
const Form8 = ({onChangeValue}) => {
  return (
  <AddPrice onChangeValue={onChangeValue}></AddPrice>
  );
};

export default function multistep() {
	const [images, setImages] = useState([])
  const [privacy, setPrivacy] = useState('');
  const [ty, setTy] = useState('');
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [title, setTitle] = useState('');
  const [descript, setDes] = useState('');
  const [price, setPrice] = useState(50);
  
  const [location, setLocation] = useState("")


	const totalSteps = 8

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(100/totalSteps);


	useEffect(()=>{
    console.log(ty)
    console.log(privacy)
    console.log(guests)
    console.log(beds)
    console.log(bedrooms)
    console.log(bathrooms)
		console.log(images)
    console.log(title)
    console.log(descript)
    console.log(price)
    console.log('location',location)
	},[step])

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>


        { step === 1 ? <Form1 onChangeValue={(e)=>setTy(e.ty)}/> 
				: step === 2 ? <Form2 onChangeValue={(e)=>setPrivacy(e.privacy)}/> 
				: step === 3 ? <Form3 onChangeValue={(e)=>setLocation(e.location)}/>
				: step === 4 ? <Form4 onChangeValue={(e)=>{setGuests(e.guests),setBeds(e.beds),setBedrooms(e.bedrooms),setBathrooms(e.bathrooms)}}/>
				: step === 5 ? <Form5 onChangeValue={(e)=>setImages(e.images)}/>
				: step === 6 ? <Form6 onChangeValue={(e)=>setTitle(e.title)}/>
				: step === 7 ? <Form7 onChangeValue={(e)=>setDes(e.descript)}/>
				: <Form8 onChangeValue={(e)=>setPrice(e.price)} />
				}


        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 100/totalSteps);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === totalSteps + 1}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 9) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 100/totalSteps);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === totalSteps ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: `${ty} created.`,
                    description: `Your ${ty} has been created.`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}