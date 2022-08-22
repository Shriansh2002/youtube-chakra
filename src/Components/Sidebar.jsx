import { Avatar, Box, Center, Divider, Icon, Text } from '@chakra-ui/react';
import React from 'react';

import { MdExplore, MdVideoLibrary, MdOutlineHistory } from 'react-icons/md';
import { AiFillFire, AiFillPlayCircle } from 'react-icons/ai';
import { FiClock, FiHeart, FiRadio } from 'react-icons/fi';
import { BsChevronDown, BsDot } from 'react-icons/bs';

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
        name: 'Google',
        imageUrl: 'https://yt3.ggpht.com/ytc/AMLnZu8MVe0jHIPqgFzsalBgIeO5ev_0tTjEbc_2lv4Vh4o=s176-c-k-c0x00ffffff-no-rj',
        newVideo: true,
        streaming: false
    },
    {
        name: 'Adobe',
        imageUrl: 'https://yt3.ggpht.com/x6ZLz8y3dF2Mfy1ZqLE4tiJYbQsgDusOr_cTLWYNXyoNiZdvwAlIX9xjKmeGferxaXXYE1YaNSE=s176-c-k-c0x00ffffff-no-rj-mo',
        newVideo: false,
        streaming: true
    },
];

const Sidebar = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} px={5}>
            <Box>
                {listOne.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} py={2}>
                        <Icon as={item.icon} boxSize={5} />
                        <Text py='2' pl='8'>{item.name}</Text>
                    </Box>
                ))}
                <Center my='5'>
                    <Divider />
                </Center>
                {listTwo.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} py={2}>
                        <Icon as={item.icon} boxSize={5} />
                        <Text py='2' pl='8'>{item.name}</Text>
                    </Box>
                ))}

                <Box display={'flex'} alignItems={'center'} py={2}>
                    <Icon as={BsChevronDown} opacity='0.5' />
                    <Text py='2' pl='8' textTransform={'uppercase'} color='gray.400'>
                        Show More
                    </Text>
                </Box>

                <Text py='2' textTransform={'uppercase'} fontSize='12px'>
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


            </Box>
        </Box>
    );
};

export default Sidebar;;