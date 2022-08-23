import { Avatar, Box, Icon, Image, Input } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { CgAddR } from 'react-icons/cg';
import { AiFillAppstore } from 'react-icons/ai';
import { BiNotification } from 'react-icons/bi';

const Header = () => {
    return (
        <Box
            display={'flex'} justifyContent={'space-between'} alignItems={'center'}
            position='sticky'
            top='0' zIndex='999'
            borderBottom='1px solid #282828'
            px={4}
            background={'white'}
        >
            <Icon as={AiOutlineMenu} boxSize="6" />

            <Box w='20%' display={'flex'} alignItems={'center'}>
                <Box display={'flex'} alignItems='center' >
                    <Image
                        src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
                        alt="youtube logo"
                        width='150px'
                        ml={4}
                    />
                </Box>

            </Box>


            <Box w='90%' ml='6'>
                <Box display={'flex'} alignItems='center' >
                    <Box w='80%' display={'flex'} alignItems='center'>
                        <Icon as={HiOutlineMicrophone} boxSize="5" opacity='0.5' />
                        <Input
                            ml='2'
                            type='text' placeholder='Type to Search'
                            variant='unstyled'
                            _placeholder={{
                                opacity: 0.5, color: '#000'
                            }}
                        />
                    </Box>

                    <Box w='10%' display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Icon as={CgAddR} boxSize="5" />
                        <Icon as={AiFillAppstore} boxSize="5" />
                        <Icon as={BiNotification} boxSize="5" />
                    </Box>

                    <Box w='10%' display={'flex'} alignItems='center' justifyContent={'center'}>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
                    </Box>
                </Box>

                {/* <Divider mt='5' /> */}
            </Box>
        </Box >

    );
};

export default Header;