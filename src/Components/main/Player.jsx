import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { MdVideoLibrary } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';

const operations = [
    {
        name: 'Save',
        icon: MdVideoLibrary
    }, {
        name: 'Like',
        icon: FiHeart,
        color: 'red.600'
    }
];

const Player = ({ videoData }) => {
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
                    <Text py='2' mt='3' size='2xl' fontWeight={'bold'}>{videoData?.name}</Text>
                    <Text py='2' opacity={0.5} fontWeight={'bold'}>{videoData?.views} views</Text>
                </Box>

                <Box display={'flex'}>
                    {operations.map((item, index) => (
                        <Box display={'flex'} key={index} justifyContent='center' alignItems={'center'} gap={2} p='2'>
                            {<Icon as={item.icon} boxSize={5} color={item?.color} />}
                            <Text color={item?.color}>{item.name}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Player;