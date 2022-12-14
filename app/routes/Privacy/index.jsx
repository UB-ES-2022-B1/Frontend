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
        <Heading as='h2' size='xl'>Housh Privacy</Heading>
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
      
          <Text > If your country of residence or establishment is in the European Economic Area <Text as='b'>(“EEA”)</Text>, Switzerland or the United Kingdom, the <Text as='b'>Privacy policy for European Users</Text> will apply to you.</Text>
          <Spacer></Spacer>
          <Text>If your country of residence or establishment is outside the EEA, Switzerland and the UK, the <Text as='b'>Non-European Privacy policy</Text> will apply to you.</Text>
          
        </Box>
        </Center>
        
        
          <Box>
          <Heading size='md'>Privacy Policy for European Users</Heading>
          </Box>
          <Box>
            <Text>Housh exists to help build connections between people and make the world more open and inclusive. In short—to build a world where anyone can belong anywhere. We are a community built on trust. A fundamental part of earning that trust means being clear about how we use your information and protecting your human right to privacy. </Text>
            <Text> This Privacy Policy describes how Housh, Inc. and its affiliates (“we,” “us,” or Housh), process personal information in relation to your use of the Housh Platform. Depending on where you live and what you are doing on the Housh Platform, the supplemental privacy pages listed below may apply to you. Please follow the links and review the supplemental information describing how we process personal information for those regions and services. </Text>
          </Box>
         <Box>
            <Text as='b'>2. PERSONAL INFORMATION WE COLLECT</Text>
            <Text>We collect personal information about you when you use the Housh Platform. Without it, we may not be able to provide all services requested. This information includes:</Text>
            <Text><Text as='b'>Contact Information, Account, Profile Information.</Text> Such as your first name, last name, phone number, postal address, email address, date of birth, and profile photo, some of which will depend on the features you use.</Text>
            <Text><Text as='b'>Identity Verification and Payment Information.</Text>Such as images of your government issued ID (as permitted by applicable laws), your ID number or other verification information, bank account or payment account information. ​​If you are not an Housh user, we may receive payment information relating to you, such as when an Housh user provides your payment card to complete a booking. If a copy of your ID is provided to us, we may scan, use, and store information contained in your ID to verify your identity.</Text>
         </Box>
         <Box>
            <Text as='b'>2.2 Information you choose to give us. </Text>
            <Text>You can choose to provide us with additional personal information. This information may include:</Text>
            <Text><Text as='b'>Additional Profile Information.</Text> Such as gender, preferred language(s), city, and personal description. Some of this information as indicated in your account settings is part of your public profile page and will be publicly visible.</Text>
            <Text><Text as='b'>Information About Others.</Text> Such as a payment instrument belonging to another person or information about a co-traveler. By providing us with personal information about others, you certify that you have permission to provide that information to Housh for the purposes described in this Privacy Policy, have shared the Housh Privacy Policy with them, and they have read and understood that it applies to them. </Text>
            <Text><Text as='b'>Address Book Contact Information.</Text> Address book contacts you import or enter manually.</Text>
            <Text><Text as='b'>Other Information.</Text> Such as when you fill in a form, add information to your account, respond to surveys, post to community forums, participate in promotions, communicate with our customer care team and other Members, or share your experience with us. This may include health information if you choose to share it with us.</Text>
         </Box>
          
          

      </GridItem>
    </Grid>
    );
}