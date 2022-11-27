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
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex,
    Text,
    Box,
    Heading,
} from '@chakra-ui/react'

export default function addPrice(params) {

    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')

    const [value, setValue] = useState('100')
    const { onChangeValue } = params
    useEffect(() => onChangeValue({ 'price': value }), [value])


    return (
        <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
            <Box>
                <Box >
                    <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        It's time to set the price!
                    </Heading>
                    <Text marginY='25px'>You can change it whenever you want.</Text>
                </Box>
                <Box my={4} textAlign="center">
                    <Flex textAlign="center">
                        <NumberInput width="full" size='lg' step={5} min={0} onChange={(valueString) => setValue(parse(valueString))} value={format(value)} mr='2rem'>
                            <NumberInputField textAlign="center" />
                            <NumberInputStepper>
                                <NumberIncrementStepper
                                    _active={{ bg: 'green.300' }}
                                    children='+' />
                                <NumberDecrementStepper
                                    _active={{ bg: 'pink.300' }}
                                    children='-' />
                            </NumberInputStepper>
                        </NumberInput>
                    </Flex>
                    <Box align="center">
                        <Text fontSize='sm'>Price per night</Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}
