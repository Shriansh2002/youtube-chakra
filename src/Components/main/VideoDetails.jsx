import { Box, Button, Collapse, Image, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const VideoDetails = ({ videoData, handleSubscribedState }) => {
    const [show, setShow] = useState(false);
    const toast = useToast();

    const handleToggle = () => setShow(!show);

    return (
        <>
            <Box mt='5' display={'flex'} flexDir={'row'} justifyContent={'space-between'} width={720}>
                <Box display={'flex'} flexDir={'row'} gap={4}>

                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={videoData?.channel?.channelLogo}
                        alt={videoData?.channel?.channelName}
                        borderRadius={10}
                    />

                    <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
                        <Text fontWeight={'bold'}>{videoData?.channel?.channelName}</Text>
                        <Text opacity={0.5}>{videoData?.channel?.channelSubscribers} Subscribers</Text>
                    </Box>

                </Box>

                <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
                    <Button
                        variant='outline'
                        color={videoData.channel.subscribed ? 'white' : 'red.500'}
                        backgroundColor={videoData.channel.subscribed ? 'gray' : 'white'}
                        borderColor={videoData.channel.subscribed ? 'gray' : 'red.500'}
                        _hover={{
                            color: videoData.channel.subscribed ? 'white' : 'red.500',
                            backgroundColor: videoData.channel.subscribed ? 'gray' : 'white',
                        }}
                        _active={{ color: videoData.channel.subscribed ? 'white' : 'red.500', }}
                        borderRadius={12}
                        onClick={() => {
                            // set show to true
                            handleSubscribedState();
                            toast({
                                title: videoData.channel.subscribed ? 'Unsubscribed' : 'Subscribed',
                                status: 'info',
                                position: 'top-right',
                                duration: 1500,
                                isClosable: true,
                            });
                        }}
                    >
                        {videoData.channel.subscribed ? 'Unsubscribe' : 'Subscribe'}
                    </Button>
                </Box>
            </Box>
            <Box mt='5' overflowWrap={'break-word'} width={720}>
                <Collapse startingHeight={100} in={show}>
                    {videoData?.description}
                </Collapse>
                <Text
                    onClick={handleToggle}
                    mt={2}
                    opacity={0.5}
                    w='fit-content'
                    cursor='pointer'
                    fontSize={'xs'}
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                >
                    Show {show ? 'Less' : 'More'}
                </Text>
            </Box>
        </>
    );
};

export default VideoDetails;