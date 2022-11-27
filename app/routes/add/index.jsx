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
  Text
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

import { useLocalStorage } from '~/utils/localStorage'
import ErrorMessage from '~/components/ErrorMessage'
import { SERVER_DNS } from '~/utils/constants';
import { getAccessToken } from '~/session';



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
    <ImageUploader onChangeValue={onChangeValue}></ImageUploader>
  );
};
const Form6 = ({ onChangeValue }) => {
  return (
    <AddTitle onChangeValue={onChangeValue}></AddTitle>
  );

};
const Form7 = ({ onChangeValue }) => {
  return (
    <AddDescription onChangeValue={onChangeValue} ></AddDescription>
  );
};
const Form8 = ({ onChangeValue }) => {
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
  const [email, setEmail] = useLocalStorage('email','')
  const [houseLocation, setLocation] = useState("")


  const [created, setCreated] = useState(false)
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [houseId, setHouseId] = useState('1');


  const [token, setToken] = useLocalStorage('access_token','')
  useEffect(()=>getAccessToken().then(res=>setToken(res)),[])

  const totalSteps = 8

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
      "kitchen": true,
      "swiming_pool": true,
      "garden": true,
      "billar_table": true,
      "gym": true,
      "TV": true,
      "WIFII": true,
      "dishwasher": true,
      "washing_machine": true,
      "air_conditioning": false,
      "free_parking": false,
      "spacious": false,
      "central": false,
      "quite": false,
      "alarm": false,
      "smoke_detector": false,
      "health_kit": false
    }
    let response = fetch(`${SERVER_DNS}/houses/register`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonData),
        headers: {
          'Authorization': `Bearer ${token}`,
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
              onClick={() => {console.log('aaaaaaa');location.href = `/apartment/${houseId}`}}
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


          {step === 1 ? <Form1 onChangeValue={(e) => setTy(e.ty)} />
            : step === 2 ? <Form2 onChangeValue={(e) => setPrivacy(e.privacy)} />
              : step === 3 ? <Form3 onChangeValue={(e) => setLocation(e.location)} />
                : step === 4 ? <Form4 onChangeValue={(e) => { setGuests(e.guests), setBeds(e.beds), setBedrooms(e.bedrooms), setBathrooms(e.bathrooms) }} />
                  : step === 5 ? <Form5 onChangeValue={(e) => setImages(e.images)} />
                    : step === 6 ? <Form6 onChangeValue={(e) => setTitle(e.title)} />
                      : step === 7 ? <Form7 onChangeValue={(e) => setDes(e.descript)} />
                        : <Form8 onChangeValue={(e) => setPrice(e.price)} />
          }


          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
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