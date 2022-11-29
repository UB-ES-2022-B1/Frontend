import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun'
import ImageUploader from "~/components/ImageUploader";
import { useEffect, useCallback } from 'react';
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
  const [email, setEmail] = useLocalStorage('email', '')
  const [provincia, setProvincia] = useState("")
  const [carrer, setCarrer] = useState("")
  const [country, setCountry] = useState("")
  const [ciutat, setCiutat] = useState("")
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

  const [isDisable, setIsDisable] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessages('')
    setIsSubmitting(true)
    let token = await getAccessToken()
    let jsonData =
    {
      "title": title,
      "owner": email,
      "description": descript,
      "town": ciutat,
      "province": provincia,
      "country": country,
      "street": carrer,
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
    if (success) {
      setHouseId(id_house)
      console.log('created house with id', id_house)
      let formData = new FormData()
      images.forEach((i)=>formData.append('files',i.file, `${i.id}_${i.file.name}`))
      formData.append('id_house', id_house)
      console.log(formData)
      let upload_images = fetch(`${SERVER_DNS}/houses/upload-image`,
      {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(upload_images => upload_images.json())
      .catch((error) => {
        setIsSubmitting(false)
        setErrorMessages('Something went wrong')
      })

      const { success, msg } = await upload_images
      if (success)
      {
        setIsSubmitting(false)
        setCreated(true)
      }
      else 
      {
        setErrorMessages(msg)
      }
    }
    else 
    {
      setErrorMessages(msg)
    }
    setIsSubmitting(false)
    // else
    // {
    //   setErrorMessages("Please enter valid parameters")
    //   setIsSubmitting(false)
    // }
  };

  const [desctiptionError, setDesctiptionError] = useState({ descError: false, descErrorMess: "" });
  const [titleError, setTitleError] = useState({ titError: false, titErrorMess: "" });
  const [privacyError, setPrivacyError] = useState({ privError: false, privErrorMess: "" });
  const [typeError, setTypeError] = useState({ tyError: false, tyErrorMess: "" });
  const [imageError, setImageError] = useState({ imgError: false, imgErrorMess: "" });
  const [locationError, setLocationError] = useState({ locationError: false, locationErrorMess: "" });

  const validateTitle = useCallback((value) => {
    if (value === '') {
      setTitleError((prev) => { return { titError: true, titErrorMess: "Title is required" } });
      return true;
    } else {
      setTitleError((prev) => { return { ...prev, titError: false } });
      return false;
    }
  }, [title])

  const validateDescription = useCallback((value) => {
    if (value === '') {
      setDesctiptionError((prev) => { return { descError: true, descErrorMess: "Description is required" } });
      return true;
    } else {
      setDesctiptionError((prev) => { return { ...prev, descError: false } });
      return false;
    }
  }, [descript])

  const validatePrivacy = useCallback((value) => {
    if (value === '') {
      setPrivacyError((prev) => { return { privError: true, privErrorMess: "Privacy is required" } });
      return true;
    } else {
      setDesctiptionError((prev) => { return { ...prev, privError: false } });
      return false;
    }
  }, [privacy])

  const validateType = useCallback((value) => {
    if (value === '') {
      setTypeError((prev) => { return { tyError: true, tyErrorMess: "Type is required" } });
      return true;
    } else {
      setTypeError((prev) => { return { ...prev, tyErrorMess: false } });
      return false;
    }

  }, [ty])
  const validateLocation = useCallback((params) => {
    const ciutat = params.ciutat;
    const carrer = params.carrer;
    const country = params.country;
    const provincia = params.provincia;

    if (ciutat === '') {
      setLocationError((prev) => { return { locationError: true, locationErrorMess: "Fill in the blanks" } });
      return true;
    } else {
      setLocationError((prev) => { return { ...prev, locationErrorMess: false } });
    }
    if (carrer === '') {
      setLocationError((prev) => { return { locationError: true, locationErrorMess: "Fill in the blanks" } });
      return true;
    } else {
      setLocationError((prev) => { return { ...prev, locationErrorMess: false } });
    }
    if (provincia === '') {
      setLocationError((prev) => { return { locationError: true, locationErrorMess: "Fill in the blanks" } });
      return true;
    } else {
      setLocationError((prev) => { return { ...prev, locationErrorMess: false } });
    }
    if (country === '') {
      setLocationError((prev) => { return { locationError: true, locationErrorMess: "Fill in the blanks" } });
      return true;
    } else {
      setLocationError((prev) => { return { ...prev, locationErrorMess: false } });
    }
    return false;
  }, [ty])

  const validateImage = useCallback((value) => {
    if (value.length == 0) {
      setImageError((prev) => { return { imgError: true, imgErrorMess: "Image is required" } });
      return true;
    } else {
      setImageError((prev) => { return { ...prev, imgError: false } });
      return false;
    }
  }, [images])


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

            {step === 1 ? <Form1 onChangeValue={(e) => { setTy(e.ty); setIsDisable(validateType(e.ty)) }} />
              : step === 2 ? <Form2 onChangeValue={(e) => { setPrivacy(e.privacy); setIsDisable(validatePrivacy(e.privacy)) }} />
                : step === 3 ? <Form3 onChangeValue={(e) => { setProvincia(e.provincia); setCarrer(e.carrer); setCiutat(e.ciutat); setCountry(e.country); setIsDisable(validateLocation(e)) }} />
                  : step === 4 ? <Form4 onChangeValue={(e) => { setGuests(e.guests), setBeds(e.beds), setBedrooms(e.bedrooms), setBathrooms(e.bathrooms) }} />
                    : step === 5 ? <Form5 onChangeValue={(e) => { setkitchen(e.kitchen), setswiming_pool(e.swiming_pool), setgarden(e.garden), setbillar_table(e.billar_table); setgym(e.gym); setspacious(e.spacious); setTV(e.TV), setfree_parking(e.free_parking), setair_conditioning(e.air_conditioning), setwashing_machine(e.washing_machine), setdishwasher(e.dishwasher), setWIFII(e.WIFII), setcentral(e.central), setquite(e.quite), setalarm(e.alarm), setsmoke_detector(e.smoke_detector), sethealth_kit(e.health_kit) }} />
                      : step === 6 ? <Form6 onChangeValue={(e) => { setImages(e.images); setIsDisable(validateImage(e.images)) }} />
                        : step === 7 ? <Form7 onChangeValue={(e) => { setTitle(e.title); setIsDisable(validateTitle(e.title)) }} />
                          : step === 8 ? <Form8 onChangeValue={(e) => { setDes(e.descript); setIsDisable(validateDescription(e.descript)) }} />
                            : <Form9 onChangeValue={(e) => { setPrice(e.price); () => { event.preventDefault() } }} />
            }
          </Box>
          <Box backgroundColor='white' marginY='20' height='150px' position='fixed' top='80%' width='100vw'>
            <Divider></Divider>
            <ButtonGroup width='100vw' mt="2%" w="100%" align="center" >
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
                    isDisabled={step === totalSteps || isDisable}
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