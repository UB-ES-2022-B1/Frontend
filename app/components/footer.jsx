import {
    Box,
    Button,
    Divider,
    Flex,
    Spacer,
    Text,
} from '@chakra-ui/react'

export default function () {

    const navicateToPrivacy = () => {
        //window.location.href = '/privacy';
    }
    const navicateToCondition = () => {
        //window.location.href = '/condition';
    }

    return (
        <Flex zIndex={5} width="100%" height='50px' position='fixed'  left='0' bottom='0'>
            <Box width="full" backgroundColor="#FAF7F0">
                <Divider></Divider>
                <Flex marginLeft='95' marginTop='2'>
                    <Text color='#696969'>© Housh 2022</Text>
                    <Text color='#696969' marginLeft='3'>·</Text>
                    <Button variant='link' color='#808080' marginLeft='3' onClick={navicateToPrivacy()}>
                        Privacy
                    </Button>
                    <Text color='#696969' marginLeft='3'>·</Text>
                    <Button variant='link' color='#808080' marginLeft='3' onClick={navicateToCondition()}>
                        Conditions
                    </Button>
                    <Spacer></Spacer>
                    <Text color='#696969' marginRight='95'>€ EUR</Text>
                </Flex>
            </Box>
        </Flex>

    )
}