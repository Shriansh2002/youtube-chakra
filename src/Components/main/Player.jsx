import { Box, Icon, Link, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { MdVideoLibrary } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';


const Player = ({ videoData, handleLikedState }) => {
    const toast = useToast();
    const localFunctionCalled = () => {
        handleLikedState();
        toast({
            title: videoData.liked ? 'Unliked' : 'Liked',
            status: videoData.liked ? 'warning' : 'success',
            position: 'top-right',
            duration: 1500,
            isClosable: true,
        });
    };
    return (
        <>
            <iframe
                src={videoData?.embedLink}
                title="One Direction - Night Changes - RTL LATE NIGHT"
                frameBorder="0"
                width={720}
                height={405}
            />

            <Box display={'flex'} justifyContent={'space-between'} width={720}>
                <Box>
                    <Text py='2' mt='3' size='sm' fontWeight={'medium'}>
                        <Link color='blue.500' href='#' textTransform={'uppercase'} size='sm'>
                            #1 on Trending
                        </Link>
                    </Text>
                    <Text size='2xl' fontWeight={'bold'}>{videoData?.name}</Text>
                    <Text py='2' opacity={0.5} fontWeight={'bold'}>{videoData?.views} views</Text>
                </Box>

                <Box display={'flex'}>

                    <Box display={'flex'} justifyContent='center' alignItems={'center'} gap={2} p='2'>
                        <Icon as={MdVideoLibrary} boxSize={5} />
                        <Text>Save</Text>
                    </Box>

                    <Box display={'flex'} justifyContent='center' alignItems={'center'} gap={2} p='2' onClick={() => localFunctionCalled()} cursor='pointer'>
                        <Icon as={FiHeart} boxSize={5} color={videoData.liked ? 'red.600' : ''} />
                        <Text color={videoData.liked ? 'red.600' : ''}>
                            {videoData.liked ? 'Liked' : 'Like'}
                        </Text>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Player;