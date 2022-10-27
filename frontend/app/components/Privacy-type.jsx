import {
    Button,
    Box,
    Flex,
    Spacer,
} from '@chakra-ui/react'

export default function (params) {

    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px'>
                    An entire accommodation
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px'>
                    A private room
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' textAlign="left">
                        A shared room
                        <Spacer></Spacer>
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}