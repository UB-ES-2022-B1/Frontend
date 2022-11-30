import {
    Box,
    Text,
    Flex,
    Heading
} from '@chakra-ui/react'

import React, { useState, useCallback } from 'react'

export default function (params) {
    const { description } = params;


    return (
        <Flex width="full">
            <Box>
                <Text as='b' fontSize='xl'>
                    About this space
                </Text>
                <Text fontSize='md'>
                    {description}
                </Text>
            </Box>
        </Flex>

    )
}