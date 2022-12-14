import {Container, Text} from '@chakra-ui/react'
import { Routes, Route, useNavigate, redirect } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { MdBuild , MdCall } from "react-icons/md"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Flex,
  Box,
  Heading,
  Center,
  Input,
  Button, 
  InputGroup,
  Spacer,
  Grid,
  GridItem,
  InputLeftElement, 
  InputRightElement,
  IconButton,
  
} from '@chakra-ui/react'

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export default function Index() {

    return (
      <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      templateColumns='repeat(4, 1fr)'
      color='blackAlpha.700'
      
    >
      
      <GridItem pl='2' area={'header'}>
        <Text mb ="15px" as='u'>Legal conditions</Text>
        <Spacer />
        <Heading as='h2' size='xl'>Terms and Conditions</Heading>
      </GridItem>
      <GridItem colSpan={1} pl='2' area={'nav'}>
        <Container padding={15}>
        <Box  borderColor="#CDFCF6" borderRadius='lg' borderWidth='3px' alignItems='center' margin={'auto'}>
          <Box>
            <Text as='b'>Do you need to contact us?</Text>
          </Box>
          <Box>
            <Text>You can contact us by calling the following number:</Text>
            </Box>
            <Center>
            <Button colorScheme='teal' leftIcon={<MdCall />} variant='outline'>619373806</Button>
            </Center>
          
          </Box>
        </Container>
      </GridItem>
      
      <GridItem marginRight={9} colSpan={3} pl='2' bg='white' area={'main'}>
      
        <Center>
      <Box w={700} borderColor="#CDFCF6" borderRadius='lg' borderWidth='3px' alignItems='center' margin={1} >
      
          <Text > If your country of residence or establishment is in the European Economic Area <Text as='b'>(“EEA”)</Text>, Switzerland or the United Kingdom, the <Text as='b'>Terms of Service for European Users</Text> will apply to you.</Text>
          <Spacer></Spacer>
          <Text>If your country of residence or establishment is outside the EEA, Switzerland and the UK, the <Text as='b'>Non-European Terms of Service</Text> will apply to you.</Text>
          
        </Box>
        </Center>
        
        
          <Box>
          <Heading size='md'>Terms of Service for European Users</Heading>
          </Box>
          <Box>
            <Text>As a consumer residing in the EEA, you can access the European Commission's online dispute resolution platform here: <Link color='teal.500' href='https://ec.europa.eu/consumers/odr'>https://ec.europa.eu/consumers/odr</Link> .Housh makes no commitment or obligation to use an alternative dispute resolution entity to resolve disputes with consumers. The European Commission's online dispute resolution platform is not available to residents of Switzerland or the United Kingdom.</Text>
          </Box>
         
          <Box>
            <Text as='b'>Section 24 of these Terms contains an arbitration clause and class action waiver that applies to all claims brought against Housh in the United States. We ask you to read it carefully.</Text>
          </Box>
          <Box>
            <Text>Last updated: February 10, 2022</Text>
          </Box>
          <Box>
          <Text>Thank you for trusting Housh.</Text>
          </Box>
          <Box>
            <Text>These Terms of Service for European Users (hereinafter the <Text as='b'>"Terms"</Text>) are a legally binding contract between you and Housh, which governs your right to use Housh's websites, applications and other offerings ( collectively referred to as the <Text as='b'>"Housh Platform"</Text>). When these Terms use <Text as='b'>"Housh "</Text>, <Text as='b'>"we"</Text>, <Text as='b'>"us"</Text> or <Text as='b'>"our"</Text>, they mean the Housh entity with whom you contract.</Text>
          </Box>
          <Box>
            <Text>The Housh Platform offers an online venue that enables users (<Text as='b'>"Members"</Text>) to publish, offer, search for, and book services. Members who publish and offer services are <Text as='b'>"Hosts"</Text>“Hosts” and Members who search for, book, or use services are <Text as='b'>"Guests"</Text>. Hosts offer <Text as='b'>"Accommodations"</Text>, activities, excursions and events (<Text as='b'>"Experiences"</Text>“), and a variety of travel and other services (collectively, <Text as='b'>"Host Services"</Text>, and each Host Service offering, a “Listing”). You must register an account to access and use many features of the Housh Platform, and must keep your account information accurate. As the provider of the Housh Platform, Housh does not own, control, offer or manage any Listings, Host Services, or tourism services. Housh is not a party to the contracts entered into directly between Hosts and Guests, nor is Housh a real estate broker, travel agency, insurer or an organiser or retailer of travel packages under Directive (EU) 2015/2302. Housh is not acting as an agent in any capacity for any Member.</Text>
          </Box>
          <Box>
          If you Host, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties that apply to your Host Services.
          </Box>
          

      </GridItem>
    </Grid>
    );
}