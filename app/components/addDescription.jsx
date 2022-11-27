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
  Heading,
  Flex,
  Box,
  Input,
} from '@chakra-ui/react'

export default function addDescription(params) {
  const [textArea, setTextAreaCount] = React.useState('');
  const [textError, settextError] = useState(false);
  const { onChangeValue } = params

  useEffect(() => onChangeValue({ 'descript': textArea }), [textArea])


  return (
    <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
      <Box p={8}>
        <Box >
          <Heading marginY='25px' lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Write a description
          </Heading>
          <Text marginY='25px'>The description of your advertisement must reveal particular characteristics of your accommodation</Text>
        </Box>
        <Box my={4} >
          <Input
            height='150px'
            type='txt'
            width="full"
            value={textArea}
            placeholder="Enjoy the comfort of this accommodation and have a great time..."
            onChange={(e) => { setTextAreaCount(e.target.value) }}
          ></Input>
        </Box>
      </Box>
    </Flex>
  )
}
