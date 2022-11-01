import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';

export default function HouseCharacteristics() {

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Text

            fontSize={{ base: '20px', lg: '18px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'800'}
            textTransform={'uppercase'}
            mb={'4'}>
            SERVICES
          </Text>

          <List spacing={2}>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Kitchen:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Swimming Pool:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Garden:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Pool table:
              </Text>{' '}
              No
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Gym:
              </Text>{' '}
              No
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                TV:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                WIFI:
              </Text>{' '}
              Yes{' '}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Washing machine:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Dishwasher:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Air-conditioning:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Parking:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Spacious:
              </Text>{' '}
              Yes
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Central:
              </Text>{' '}
              No
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Calmed:
              </Text>{' '}
              Yes
            </ListItem>
          </List>
        </Box>

        <Box>
          <Text

            fontSize={{ base: '20px', lg: '18px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'800'}
            textTransform={'uppercase'}
            mb={'4'}>
            SECURITY
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Alarm
                </Text>{' '}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Master Chronometer Certified
                </Text>{' '}
              </ListItem>{' '}
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Smoke Detector
                </Text>{' '}
              </ListItem>
            </List>

          </SimpleGrid>

        </Box>
      </SimpleGrid>

    </Box>


  )
}