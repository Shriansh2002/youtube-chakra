import { Avatar, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BiCheck } from 'react-icons/bi';

const CardOne = ({ video }) => {
    return (
        <Box
            maxW='sm'
            overflow='hidden'
            my='2.5'
        >
            <Image
                src={video.imageUrl}
                alt='Image'
                width={320}
                height={180}
                borderRadius='lg'
            />

            <Box>
                <Box fontWeight='semibold' as='h4' mt='2'>
                    {video.title}
                </Box>

                <Box display={'flex'} flexDir='row' mt='2'
                    alignItems='center'
                    mx='1'
                    justifyContent={'space-between'}
                >

                    <Box display={'flex'} flexDir='row' alignItems='center'>
                        <Avatar
                            src={video.channel.logoUrl}
                            boxSize={10}
                        />
                        <Text fontWeight={'bold'} ml='2'>{video.channel.name}</Text>
                        {video.channel.verified && (
                            <BiCheck color='red' />
                        )}
                    </Box>
                    <Text fontWeight={'bold'} opacity={0.6} ml='2'>
                        {video.views} Views
                    </Text>

                </Box>
            </Box>

        </Box >
    );
};

export default CardOne;