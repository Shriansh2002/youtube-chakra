import { Box, Button, Divider, Icon, Image, Text } from '@chakra-ui/react';
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

const videoData = {
    name: 'One Direction - Night Changes - RTL LATE NIGHT',
    views: '604 M',
    embedLink: 'https://www.youtube.com/embed/oXwXzB9xmYg',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam alias magni ex expedita nisi et possimus cumque velit, aperiam repellendus sapiente corrupti eveniet numquam.',
    channel: {
        channelName: 'One Direction',
        channelSubscribers: '37.5M',
        channelLink: 'https://www.youtube.com/channel/UCb2HGwORFBo94DmRx4oLzow',
        channelLogo: 'https://yt3.ggpht.com/ytc/AMLnZu8lV9YA7m7BtmIyJwAT1Pgn5CEhZsUuLlGmrcVY6oY=s176-c-k-c0x00ffffff-no-rj'
    }
};

const MainLeft = () => {
    return (
        <Box mt='10' display={'flex'} flexDir={'column'}>
            <iframe
                src={videoData?.embedLink}
                title="One Direction - Night Changes - RTL LATE NIGHT"
                frameBorder="0"
                width={720}
                height={405}
            />

            <Box display={'flex'} justifyContent={'space-between'}>
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

            <Divider mt='2' />

            <Box mt='10' display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
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
                    <Button variant='outline' color='red.500' borderColor={'red.500'}>
                        Subscribe
                    </Button>
                </Box>
            </Box>

            <Box mt='5' overflowWrap={'break-word'}>
                
            </Box>

        </Box>
    );
};

export default MainLeft;