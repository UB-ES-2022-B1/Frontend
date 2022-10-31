import { useLoaderData } from "@remix-run/react";
import { useState, useMemo, useEffect, useCallback } from "react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun'
import { calculateAge } from '~/utils/dateUtils';
import ErrorMessage from '~/components/ErrorMessage'
import 'react-phone-input-2/lib/style.css'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React from 'react';
import {Text} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Flex,
  Box,
  Heading,
  Input, 
  Button, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement 
} from '@chakra-ui/react'

export default function addDescription(){
const [textArea, setTextAreaCount] = React.useState('');
    const [textError, settextError] = useState(false)
    const [textErrorMessages, settextErrorMessages] = useState('')


                
    const validatetext = useCallback(() => {
        if(textArea.length>500){
            settextErrorMessages('Maximum 500 characters.');
            settextError(true);
        }
        
        else{
            settextError(textArea === '')
    
        }
      }, [textArea])
  return(
    <div className="register-form">
        <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
                <Heading>{'WRITE YOUR DESCRIPTION'}</Heading>
            </Box>
                <Box my={4} textAlign="left">
                
                <FormControl isInvalid={textError}>
                    <FormLabel>Write your description</FormLabel>
                    
                    <Input type='txt'rows="3" cols="30" autocomplete="off" placeholder="Enjoy the comfort of this accommodation and have a great time..." onChange={(e) => { settextError(e.target.value) }}></Input>
                    <p>{textArea}</p>
                    {!textError ? null : (
                  <FormErrorMessage>{textErrorMessages}</FormErrorMessage>)}
                    </FormControl>
                  
                </Box>
                
            </Box>
        </Flex>
    </div>
  )
}
