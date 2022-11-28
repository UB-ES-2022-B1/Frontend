import {
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Divider,
} from '@chakra-ui/react';

export default function HouseCharacteristics(params) {
  const { Kitchen, swimming, garden, pooltable, gym, tv, wifi,
    washingMachine, dishwasher, aireAcond, parking, spacious,
    central, calmed, Alarm, botiquin, smokeDetector } = params;

  return (
    <Box>
        <Box>
          <Text as='b' fontSize='xl'>
            What is in this accommodation?
          </Text>
          
          <Box marginLeft={4}>
            {swimming || parking || gym ?
              <Text as='b' fontSize='md'> Parking and facilities </Text>
              : null}
            {swimming ?
              <Text fontSize='md'>Swimming pool </Text>
              : null}
            {swimming ?
              <Divider marginTop={2} marginBottom={2}></Divider>
              : null}
            {parking ?
              <Text fontSize='md'>Free parking on premises </Text>
              : null}
            {parking ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {gym ?
              <Text fontSize='md'>GYM </Text>
              : null}
            {gym ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>

          <Box marginLeft={4}>
            {smokeDetector || botiquin || Alarm ?
              <Text as='b' fontSize='md'> Home security </Text>
              : null}
            {Alarm ?
              <Text fontSize='md'>Alarm </Text>
              : null}
            {Alarm ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {botiquin ?
              <Text fontSize='md'>First aid kit </Text>
              : null}
            {botiquin ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {smokeDetector ?
              <Text fontSize='md'>Smoke Detector </Text>
              : null}
            {smokeDetector ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>

          <Box marginLeft={4}>
            {spacious || calmed || central ?
              <Text as='b' fontSize='md'> Characteristic </Text>
              : null}
            {central ?
              <Text fontSize='md'>Central </Text>
              : null}
            {central ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {calmed ?
              <Text fontSize='md'>Calmed </Text>
              : null}
            {calmed ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {spacious ?
              <Text fontSize='md'>Spacious </Text>
              : null}
            {spacious ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>

          <Box marginLeft={4}>
            {pooltable || tv ?
              <Text as='b' fontSize='md'> Entertainment </Text>
              : null}
            {pooltable ?
              <Text fontSize='md'>Pool table </Text>
              : null}
            {pooltable ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {tv ?
              <Text fontSize='md'>High definition television </Text>
              : null}
            {tv ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>

          <Box marginLeft={4}>
            {wifi ?
              <Text as='b' fontSize='md'> Internet and office </Text>
              : null}
            {wifi ?
              <Text fontSize='md'>Wifi </Text>
              : null}
            {wifi ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>

          <Box marginLeft={4}>
            {Kitchen ?
              <Text  as='b' fontSize='md'> Kitchen and dining room </Text>
              : null}
            {Kitchen ?
              <Text fontSize='md'>Kitchen available for guest use </Text>
              : null}
            {Kitchen ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>

          <Box marginLeft={4}>
            {washingMachine || dishwasher || aireAcond?
              <Text as='b' fontSize='md'>Home appliances</Text>
              : null}
            {washingMachine ?
              <Text fontSize='md'>Washing machine</Text>
              : null}
            {washingMachine ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
            {aireAcond ?
              <Text fontSize='md'>Air-conditioning</Text>
              : null}
            {aireAcond ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
              {dishwasher ?
              <Text fontSize='md'>Dishwasher</Text>
              : null}
            {dishwasher ?
              <Divider marginTop={2} marginBottom={2}></Divider> 
              : null}
          </Box>
        </Box>
    </Box>


  )
}