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


export default function addTitle()
{
    const [textAreaCount, setTextAreaCount] = React.useState('');
    const [countError, setcountError] = useState(false)
    const [countErrorMessages, setcountErrorMessages] = useState('')

    ;

    
                
    const validateCount = useCallback(() => {
        if(textAreaCount.length>50){
            setcountErrorMessages('Maximum 50 characters.');
            setcountError(true);
        }
        
        else{
            setcountError(textAreaCount === '')
    
        }
      }, [textAreaCount])


    const recalculate = e => {
        console.log("event value:", e);
        setTextAreaCount(e.target.value.length);
        
      };

    return(

        <div className="register-form">
        <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
                <Heading>{'WRITE YOUR TITTLE'}</Heading>
            </Box>
                <Box my={4} textAlign="left">
                
                <FormControl isInvalid={countError}>
                    <FormLabel>The title of your ad should reveal the highlights of your property</FormLabel>
                    
                    <Input type='txt'rows="3" cols="30" autocomplete="off" placeholder="Beautiful house in Menorca..." onChange={(e) => { setcountError(e.target.value) }}></Input>
                    <p>{textAreaCount}</p>
                    {!countError ? null : (
                  <FormErrorMessage>{countErrorMessages}</FormErrorMessage>)}
                    </FormControl>
                
                </Box>
                
            </Box>
        </Flex>
    </div>



    )
}