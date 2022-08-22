import { Avatar, Box, Center, Divider, Icon, Text } from '@chakra-ui/react';
import React from 'react';

import { MdExplore, MdVideoLibrary, MdOutlineHistory, MdOutlineFeedback } from 'react-icons/md';
import { AiFillFire, AiFillPlayCircle } from 'react-icons/ai';
import { FiClock, FiHeart, FiRadio, FiSettings } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';

import ShowMore from '../extras/ShowMore';
const listOne = [
    {
        name: 'Explore',
        icon: MdExplore,
    },
    {
        name: 'Trending',
        icon: AiFillFire
    },
    {
        name: 'Subscription',
        icon: AiFillPlayCircle
    },
];

const listTwo = [
    {
        name: 'Library',
        icon: MdVideoLibrary,
    },
    {
        name: 'History',
        icon: MdOutlineHistory
    },
    {
        name: 'Watch Later',
        icon: FiClock
    },
    {
        name: 'Liked Videos',
        icon: FiHeart
    },

];

const subscriptionList = [
    {
        name: 'YouTube',
        imageUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-HEpD0lRtLy7RSYRqW5ZfmO3bD9kBnUOJ0mXzhsQ=s176-c-k-c0x00ffffff-no-rj-mo',
        newVideo: false,
        streaming: true
    },
    {
        name: 'Apple',
        imageUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
        newVideo: true,
        streaming: false
    },
    {
        name: 'Google',
        imageUrl: 'https://yt3.ggpht.com/ytc/AMLnZu8MVe0jHIPqgFzsalBgIeO5ev_0tTjEbc_2lv4Vh4o=s176-c-k-c0x00ffffff-no-rj',
        newVideo: true,
        streaming: false
    },
    {
        name: 'Adobe',
        imageUrl: 'https://yt3.ggpht.com/x6ZLz8y3dF2Mfy1ZqLE4tiJYbQsgDusOr_cTLWYNXyoNiZdvwAlIX9xjKmeGferxaXXYE1YaNSE=s176-c-k-c0x00ffffff-no-rj-mo',
        newVideo: false,
        streaming: false
    },
    {
        name: 'Meta',
        imageUrl: 'https://yt3.ggpht.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s176-c-k-c0x00ffffff-no-rj',
        newVideo: true,
        streaming: false
    },
];

const youtubeMore = [
    {
        name: 'Settings',
        icon: FiSettings
    },
    {
        name: 'Send Feedback',
        icon: MdOutlineFeedback
    },
];

const Sidebar = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} px={5} overflow={'auto'} h='90vh'>
            <Box>
                {listOne.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} py={1.5}>
                        <Icon as={item.icon} boxSize={5} />
                        <Text py='2' pl='8'>{item.name}</Text>
                    </Box>
                ))}
                <Center my='2'>
                    <Divider />
                </Center>
                {listTwo.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} py={1.5}>
                        <Icon as={item.icon} boxSize={5} />
                        <Text py='2' pl='8'>{item.name}</Text>
                    </Box>
                ))}

                <ShowMore />

                <Text py='2' mt='3' ml='5' textTransform={'uppercase'} fontSize='12px' fontWeight={'bold'} opacity={0.7}>
                    SUBSCRIPTIONS
                </Text>
                {subscriptionList.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} py={2} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'}>
                            <Avatar name='Dan Abrahmov' src={item.imageUrl} size='xs' />
                            <Text py='2' pl='8'>{item.name}</Text>
                        </Box>
                        {item.newVideo && (
                            <Icon as={BsDot} boxSize={5} color='blue.500' />
                        )}
                        {item.streaming && (
                            <Icon as={FiRadio} boxSize={5} color='red.500' />
                        )}
                    </Box>
                ))}

                <ShowMore />

                <Text py='2' mt='3' ml='5' textTransform={'uppercase'} fontSize='12px' fontWeight={'bold'} opacity={0.7}>
                    More From Youtube
                </Text>
                {youtubeMore.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} py={2} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'}>
                            <Icon as={item.icon} boxSize={5} />
                            <Text py='2' pl='8'>{item.name}</Text>
                        </Box>
                    </Box>
                ))}

            </Box>
        </Box>
    );
};

export default Sidebar;;