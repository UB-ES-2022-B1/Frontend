import {
    Box,
    Button,
    Text,
    Flex,
    ButtonGroup,
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverBody,
    Portal,
    PopoverCloseButton,
    AspectRatio,
    PopoverArrow,
    PopoverHeader,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    IconButton,
    FormErrorMessage,
    FormControl,
    Icon,
} from '@chakra-ui/react'
import { FiHeart } from "react-icons/fi";
import { ExternalLinkIcon, StarIcon, AddIcon } from '@chakra-ui/icons'
import { Search2Icon } from '@chakra-ui/icons'
import React, { useState, useCallback } from 'react'
import { useEffect } from 'react';
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon,
} from 'react-share';
import styled from '@emotion/styled';
import { isAuthenticated } from '~/session';
import { getAccessToken } from '~/session';
import { SERVER_DNS } from '~/utils/constants'


export default function (params) {
    const { title, town, province, country } = params;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [isClicked, setisClicked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => { isAuthenticated().then(res => setIsLoggedIn(res)) }, [])

    async function favorits() {
        let access = await getAccessToken()
        let jsonData = { "id_house": params.id, "toAdd": !isClicked}
        let response = fetch(`${SERVER_DNS}/favorites/add-favorites`,
          {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData),
            headers: {
              'Authorization': `Bearer ${access}`,
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .catch((error) => {})        
      }
    return (
        <Flex width="full" align="center" justifyContent="center" >
            <Box p='3' >
                <Box>
                    <Text fontSize='3xl' as='b' >
                        {title}
                    </Text>
                </Box>
                <Box>
                    <Popover>
                        <PopoverTrigger>
                            <Button variant='link'>
                                <Text as='u' fontSize='s' color='black'>{town}, {province}, {country}</Text>
                            </Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <AspectRatio ratio={16 / 9}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.606542300334!2d2.38587346203276!3d41.5040672636782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b40e8e0bb51d%3A0xdd59b14962b72550!2sBiblioteca%20Municipal%20Ernest%20Lluch%20i%20Mart%C3%ADn!5e0!3m2!1ses!2ses!4v1666721520825!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </AspectRatio>
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>

                    <ButtonGroup variant='outline' spacing='1' marginLeft={500}>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton variant='ghost' aria-label='Compartir' leftIcon={<ExternalLinkIcon />}>
                                </IconButton >
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>Share this accommodation</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <FacebookShareButton
                                            url={'http://localhost:3000'}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                        >
                                            <FacebookIcon size={40} round={true} />
                                        </FacebookShareButton>

                                        <WhatsappShareButton
                                            url={'http://localhost:3000'}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                        >
                                            <WhatsappIcon size={40} round={true} />
                                        </WhatsappShareButton>

                                        <TwitterShareButton
                                            url={'http://localhost:3000'}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                        >
                                            <TwitterIcon size={40} round={true} />
                                        </TwitterShareButton>

                                        <EmailShareButton
                                            url={'http://localhost:3000'}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                        >
                                            <EmailIcon size={40} round={true} />
                                        </EmailShareButton>

                                        <TelegramShareButton
                                            url={'http://localhost:3000'}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                        >
                                            <TelegramIcon size={40} round={true} />
                                        </TelegramShareButton>
                                    </PopoverBody>
                                </PopoverContent>

                            </Portal>
                        </Popover>
                        {isLoggedIn ?
                            <IconButton variant='ghost' onClick={() => { setisClicked(!isClicked); favorits() }} icon={<FiHeart className='heart' fill={isClicked ? "red" : "white"} color={isClicked ? "red" : "black"} />}>
                            </IconButton >
                            : null}
                    </ButtonGroup>
                </Box>
            </Box>
        </Flex>
    )
}