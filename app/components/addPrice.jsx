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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  Slider,
  FormErrorMessage,
  FormHelperText,
  Select,
  Flex,
  Box,
  SliderTrack,
  SliderFilledTrack,
  Heading,
  SliderThumb,
  Input, 
  Button, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement 
} from '@chakra-ui/react'

export default function addPrice(params)
{

    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')

    const [value, setValue] = React.useState('50')
    const {onChangeValue} = params
    useEffect(()=>onChangeValue({'price':value}),[value])
    

    return(
            <div className="register-form">
                <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
                    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Box textAlign="center">
                        <Heading>{'PRICE'}</Heading>
                    </Box>
                        <Box my={4} textAlign="left">
                        
                            <FormLabel>Price per night</FormLabel>
                            <Flex>
                                <NumberInput step={25} min={0} onChange={(valueString) => setValue(parse(valueString))} value={format(value)} maxW='400px' mr='2rem'>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                    <NumberIncrementStepper
                                     bg='green.200'
                                     _active={{ bg: 'green.300' }}
                                     children='+' />
                                    <NumberDecrementStepper
                                    bg='pink.200'
                                    _active={{ bg: 'pink.300' }}
                                    children='-' />
                                    </NumberInputStepper>
                                </NumberInput>
                                
                                </Flex>
                            
                        </Box>
                        
                    </Box>
                </Flex>
            </div>
    )
}
