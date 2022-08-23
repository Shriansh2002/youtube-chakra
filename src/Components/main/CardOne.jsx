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
                width={288}
                height={162}
                borderRadius='lg'
            />

            <Box>
                <Text fontWeight='semibold' mt='2' fontSize={'md'}>
                    {video.title}
                </Text>

                <Box display={'flex'} flexDir='row' mt='2'
                    alignItems='center'
                    mx='1'
                    justifyContent={'space-between'}
                >

                    <Box display={'flex'} flexDir='row' alignItems='center'>
                        <Avatar
                            src={video.channel.logoUrl}
                            boxSize={8}
                        />
                        <Text fontWeight={'bold'} fontSize={'xs'} ml='2'>{video.channel.name}</Text>
                        {video.channel.verified && (
                            <BiCheck color='red' />
                        )}
                    </Box>
                    <Text fontWeight={'bold'} opacity={0.6} ml='2' fontSize={'xs'}>
                        {video.views} Views
                    </Text>

                </Box>
            </Box>

        </Box >
    );
};

export default CardOne;