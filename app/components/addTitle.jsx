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


export default function addTitle(params)
{
    console.log('a')
    const [textAreaCount, setTextAreaCount] = React.useState('');
    const {onChangeValue} = params

    useEffect(()=>onChangeValue({textAreaCount}),[textAreaCount])
                

    return(

        <div className="register-form">
        <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
                <Heading>{'WRITE YOUR TITTLE'}</Heading>
            </Box>
                <Box my={4} textAlign="left">
                
                
                    <FormLabel>The title of your ad should reveal the highlights of your property</FormLabel>
                    
                    <Input type='txt' value={textAreaCount} rows="3" cols="30" autocomplete="off" placeholder="Beautiful house in Menorca..." onChange={(e) => { setTextAreaCount(e.target.value) }} ></Input>
                    
                    
                
                </Box>
                
            </Box>
        </Flex>
    </div>



    )
}