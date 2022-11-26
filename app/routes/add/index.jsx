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
  Text,
  Spacer,
  Divider
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
import Amenties from '../../components/amenties';
import { useLocalStorage } from '~/utils/localStorage'
import ErrorMessage from '~/components/ErrorMessage'
import { SERVER_DNS } from '~/utils/constants';



const Form1 = ({ onChangeValue }) => {
  return (
    <TypeGroup onChangeValue={onChangeValue}></TypeGroup>
  );
};
const Form2 = ({ onChangeValue }) => {
  return (
    <PrivacyType onChangeValue={onChangeValue}></PrivacyType>
  );
};
const Form3 = ({ onChangeValue }) => {
  return (
    <Location onChangeValue={onChangeValue}></Location>
  )
};
const Form4 = ({ onChangeValue }) => {
  return (
    <FloorPlant onChangeValue={onChangeValue}></FloorPlant>
  );
};
const Form5 = ({ onChangeValue }) => {
  return (
    <Amenties onChangeValue={onChangeValue}></Amenties>
  );
};
const Form6 = ({ onChangeValue }) => {
  return (
    <ImageUploader onChangeValue={onChangeValue}></ImageUploader>
  );

};
const Form7 = ({ onChangeValue }) => {
  return (
    <AddTitle onChangeValue={onChangeValue}></AddTitle>
  );
};
const Form8 = ({ onChangeValue }) => {
  return (
    <AddDescription onChangeValue={onChangeValue} ></AddDescription>
  );
};
const Form9 = ({ onChangeValue }) => {
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
  const [email, setEmail] = useLocalStorage('email',)
  const [houseLocation, setLocation] = useState("")
  const [created, setCreated] = useState(false)
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [houseId, setHouseId] = useState('1');
  const [kitchen, setkitchen] = useState(false);
  const [swiming_pool, setswiming_pool] = useState(false);
  const [garden, setgarden] = useState(false);
  const [billar_table, setbillar_table] = useState(false);
  const [gym, setgym] = useState(false);
  const [spacious, setspacious] = useState(false);
  const [TV, setTV] = useState(false);
  const [free_parking, setfree_parking] = useState(false);
  const [air_conditioning, setair_conditioning] = useState(false);
  const [washing_machine, setwashing_machine] = useState(false);
  const [dishwasher, setdishwasher] = useState(false);
  const [WIFII, setWIFII] = useState(false);
  const [central, setcentral] = useState(false);
  const [quite, setquite] = useState(false);
  const [alarm, setalarm] = useState(false);
  const [smoke_detector, setsmoke_detector] = useState(false);
  const [health_kit, sethealth_kit] = useState(false);



  const totalSteps = 9

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(100 / totalSteps);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    setIsSubmitting(true)
    let jsonData =
    {
      "title": title,
      "owner": email,
      "description": descript,
      "location": houseLocation,
      "base_price": price,
      "extra_costs": "10",
      "taxes": "4",
      "num_hab": bedrooms,
      "num_beds": beds,
      "num_bathrooms": bathrooms,
      "num_people": guests,
      "company_individual": privacy,
      "kitchen": kitchen,
      "swiming_pool": swiming_pool,
      "garden": garden,
      "billar_table": billar_table,
      "gym": gym,
      "TV": TV,
      "WIFII": WIFII,
      "dishwasher": dishwasher,
      "washing_machine": washing_machine,
      "air_conditioning": air_conditioning,
      "free_parking": free_parking,
      "spacious": spacious,
      "central": central,
      "quite": quite,
      "alarm": alarm,
      "smoke_detector": smoke_detector,
      "health_kit": health_kit
    }
    let response = fetch(`${SERVER_DNS}/houses/register`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .catch((error) => {
        setIsSubmitting(false)
        setErrorMessages('Something went wrong')
      })

    const { success, msg, id_house } = await response
    setIsSubmitting(false)
    if (success) {
      console.log('created')
      setCreated(true)
      setHouseId(id_house)
    }
    else {
      setErrorMessages(msg)
    }

    // else
    // {
    //   setErrorMessages("Please enter valid parameters")
    //   setIsSubmitting(false)
    // }
  };

  useEffect(() => {
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
    console.log('location', houseLocation)
  }, [step])

  return (
    <>
      {created ?
        <>
          <Flex width="full" align="center" justifyContent="center" padding={"20px"}>
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
              <Box textAlign="center">
                <Text>House created!</Text>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  mt={4}
                  onClick={() => { console.log('aaaaaaa'); location.href = `/apartment/${houseId}` }}
                >
                  Go to house
                </Button>
                <Button
                  colorScheme="orange"
                  variant="outline"
                  width="full"
                  mt={4}
                  onClick={() => location.href = '/'}
                >
                  Home
                </Button>
                {/* {errorMessages && <ErrorMessage message={errorMessages} />} */}
              </Box>
            </Box>
          </Flex>
        </>
        :
        <Box>
          <Box
            maxWidth={800}
            p={3}
            m="10px auto"
            as="form">
            <Progress
              hasStripe
              value={progress}
              mb="5%"
              mx="5%"
              isAnimated></Progress>

            {step === 1 ? <Form1 onChangeValue={(e) => setTy(e.ty)} />
              : step === 2 ? <Form2 onChangeValue={(e) => setPrivacy(e.privacy)} />
                : step === 3 ? <Form3 onChangeValue={(e) => setLocation(e.location)} />
                  : step === 4 ? <Form4 onChangeValue={(e) => { setGuests(e.guests), setBeds(e.beds), setBedrooms(e.bedrooms), setBathrooms(e.bathrooms) }} />
                    : step === 5 ? <Form5 onChangeValue={(e) => { setkitchen(e.kitchen), setswiming_pool(e.swiming_pool), setgarden(e.garden), setbillar_table(e.billar_table), setgym(e.gym), setspacious(e.spacious), setTV(e.TV), setfree_parking(e.free_parking), setair_conditioning(e.air_conditioning), setwashing_machine(e.washing_machine), setdishwasher(e.dishwasher), setWIFII(e.WIFII), setcentral(e.central), setquite(e.quite), setalarm(e.alarm), setsmoke_detector(e.smoke_detector), sethealth_kit(e.health_kit) }} />
                      : step === 6 ? <Form6 onChangeValue={(e) => setImages(e.images)} />
                        : step === 7 ? <Form7 onChangeValue={(e) => setTitle(e.title)} />
                          : step === 8 ? <Form8 onChangeValue={(e) => setDes(e.descript)} />
                            : <Form9 onChangeValue={(e) => setPrice(e.price)} />
            }



          </Box>
          <Box backgroundColor='white' marginY='20' height='150px' position='fixed' top='80%' width='100vw'>
            <Divider></Divider>
            <ButtonGroup position='fixed' top='80%' width='100vw' mt="5%" w="100%" align="center" >
              <Flex w="100%" align="center" justifyContent="center">
                <Flex w="100%" align="center" display='top' justifyContent="left">

                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 100 / totalSteps);
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
                    isDisabled={step === totalSteps}
                    hidden={step === totalSteps}
                    onClick={() => {
                      setStep(step + 1);
                      if (step === 9) {
                        setProgress(100);
                      } else {
                        setProgress(progress + 100 / totalSteps);
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
                    isLoading={isSubmitting}
                    type='submit'
                    onClick={handleSubmit}>
                    Submit
                  </Button>
                ) : null}
              </Flex>
            </ButtonGroup>
          </Box>
        </Box>}
      {errorMessages ? <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto">
        {errorMessages && <ErrorMessage message={errorMessages} />}
      </Box> : null}
    </>
  );
}