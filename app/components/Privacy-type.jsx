import {
    Button,
    Box,
    Flex,
    Spacer,
} from '@chakra-ui/react'

export default function (params) {
    const [privacy, setPrivacy] = useState('');

    return (
        <Flex width="full" align="center" justifyContent="center" padding={"20px"} >
            <Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => {setTy('An entire accommodation')}}>
                    An entire accommodation
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' onClick={() => {setTy('A private room')}}>
                    A private room
                        <Spacer></Spacer>
                    </Button>
                </Box>
                <Box p='1'>
                    <Button variant='outline' width='600px' borderRadius={12} height='70px' textAlign="left" onClick={() => {setTy('A shared room')}}>
                        A shared room
                        <Spacer></Spacer>
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}