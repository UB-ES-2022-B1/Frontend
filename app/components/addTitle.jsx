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
import { Text } from '@chakra-ui/react'
import {
    FormLabel,
    Flex,
    Box,
    Input,
    Heading,
} from '@chakra-ui/react'


export default function addTitle(params) {

    const [textAreaCount, setTextAreaCount] = React.useState('');
    const { onChangeValue } = params

    useEffect(() => onChangeValue({ 'title': textAreaCount }), [textAreaCount])


    return (
        <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
            <Box p={8} >
                <Box>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Title your ad
                    </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <Text>The title of your accommodation should reveal the highlights of your accommodation</Text>
                </Box>
                <Box my={4} >
                    <Input width="full" type='txt' value={textAreaCount} rows="3" cols="30" autocomplete="off" placeholder="Beautiful house in Menorca..." onChange={(e) => { setTextAreaCount(e.target.value) }} ></Input>
                </Box>
            </Box>
        </Flex>
    )
}