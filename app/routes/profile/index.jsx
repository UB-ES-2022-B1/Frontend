import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Flex,
  Box,
  Heading,
  Divider
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from "react";
import { useLocalStorage } from '~/utils/localStorage'
import { useLoaderData } from "@remix-run/react";
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun';
import Cookies from 'js-cookie';

export default function Index() {
  const [products, setProducts] = useState('');
  const [email, setEmail] = useLocalStorage('email', '');
  const [nom, setNom] = useState('');
  const [cognoms, setCognoms] = useState('');
  const [telefon, setTelefon] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState('');

  
  function componentDidMount(res) {
    setNom(res.name),
      setCognoms(res.surname),
      setTelefon(res.phone),
      setCountry(res.country),
      setEmail(res.email),
      setData(res.birthdate)
  }
  useEffect(async () => {

    let jsonData = { "email": email }
    let response = fetch('https://houshbetesting.azurewebsites.net/accounts/get-profile', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res)
        return res.json();
      })
      .catch((text) => {
        console.log(text.msg);
      });
    response = await response;
    setProducts(response.msg);
  },[]
  )
  useEffectWithoutFirstRun(() => componentDidMount(products), [products])

  return (
    <div className="register-form">
      <Flex width="full" align="center" justifyContent="center" padding={"80px"}>
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>{'YOUR PROFILE'}</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <FormLabel>Name: {nom}</FormLabel>

            <FormLabel>Surname: {cognoms}</FormLabel>

            <FormLabel>Country: {country}</FormLabel>

            <FormLabel>Telephone: {telefon}</FormLabel>

            <FormLabel>Birth date: {data}</FormLabel>

            <FormLabel>Email: {email}</FormLabel>

          </Box>
        </Box>
      </Flex>
    </div>
  );
}