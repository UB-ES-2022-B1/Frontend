import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    IconButton,
  } from '@chakra-ui/react';
  import { CloseIcon } from '@chakra-ui/icons'

function RemovableImageCard(props){
    const {url,remove} = props

    const handleRemove = ()=>{
        remove()
    }

    return(
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        width="175px"
        height="175px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        overflow="hidden"
        >
        {(
            <IconButton
            variant='outline'
            colorScheme='red'
            aria-label='Remove image'
            position="absolute"
            size="50%"
            top={1}
            right={1}
            bg="red.100"
            opacity="0.6"
            icon={<CloseIcon/>}
            onClick={handleRemove}
            />
        )}

        <Image
          src={url}
          rounded="lg"
          boxSize="100%"
          objectFit={'cover'}
          />
      </Box>
    )
}

export default RemovableImageCard