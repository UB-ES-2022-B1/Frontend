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
import React, { useState, useCallback } from 'react'



export default function HouseCharacteristics(params) {
  const {Kitchen,swimming,garden,pooltable,gym,tv,wifi,
    washingMachine,dishwasher,aireAcond,parking,spacious,
    central,calmed,Alarm,botiquin,smokeDetector} = params;

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
            {Kitchen ?
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Kitchen:
                </Text>{' '}
                Yes
              </ListItem>
              :
              null}
              {swimming ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Swimming Pool:
              </Text>{' '}
              Yes
            </ListItem>
            : null}
            {garden ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Garden:
              </Text>{' '}
              Yes
            </ListItem>
            : null}
            {pooltable ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Pool table:
              </Text>{' '}
              No
            </ListItem>
            : null}
            {gym ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Gym:
              </Text>{' '}
              No
            </ListItem>
            : null}
            {tv ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                TV:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
            {wifi ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                WIFI:
              </Text>{' '}
              Yes{' '}
            </ListItem>
            :null }
            {washingMachine ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Washing machine:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
            {dishwasher ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Dishwasher:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
            {aireAcond ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Air-conditioning:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
            {parking ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Parking:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
            {spacious ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Spacious:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
            {central ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Central:
              </Text>{' '}
              No
            </ListItem>
            :null}
            {calmed ?
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Calmed:
              </Text>{' '}
              Yes
            </ListItem>
            :null}
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
              {Alarm ?
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Alarm
                </Text>{' '}
              </ListItem>
              :null}
              {botiquin ?
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  First aid kit
                </Text>{' '}
              </ListItem>
              :null}
              {smokeDetector ?
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Smoke Detector
                </Text>{' '}
              </ListItem>
              :null}
            </List>

          </SimpleGrid>

        </Box>
      </SimpleGrid>

    </Box>


  )
}