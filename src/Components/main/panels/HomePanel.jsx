import { Box, Divider, Image, Text } from '@chakra-ui/react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiCheck } from 'react-icons/bi';

const FeaturedCard = () => {
    return (
        <Box>
            <Text fontWeight={'semibold'} textTransform={'uppercase'}>Featured Video ▶️</Text>

            <Box display={'flex'} gap={5} mt='4'>
                <Box>
                    <Image
                        src='https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA'
                        alt='Dan Abramov'
                        width={160 * 4.4}
                        height={90 * 1.5}
                    />
                </Box>

                <Box display={'flex'} flexDir={'column'} gap={2}>
                    <Text fontWeight={'bold'}>
                        WWDC 2022 - June 6 | Apple
                    </Text>
                    <Box display={'flex'} gap={3}>
                        <Text _hover={{ opacity: 1 }} opacity={0.5}>Apple</Text>
                        <Text opacity={0.5}>1.2M Views</Text>
                        <Text opacity={0.5}>5 Days Ago</Text>
                    </Box>
                    <Box>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magnam ratione dolores aliquam labore delectus eum non sequi,
                        incidunt hic eaque animi beatae quod nisi laborum libero veritatis illum.
                        Soluta possimus aliquam maxime numquam!
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};


const VideoCard = ({ video }) => {
    return (
        <Box
            maxW='sm'
            overflow='hidden'
            my='2.5'
        >
            <Image
                src={video.imageUrl}
                alt='Image'
                width={210}
                height={117}
            />

            <Box>
                <Text fontWeight='semibold' mt='2' fontSize={'md'}>
                    {video.title}
                </Text>

                <Box display={'flex'} alignItems='center' mt='2'>
                    <Text fontWeight={'bold'} fontSize={'xs'}>{video.channel.name}</Text>
                    {video.channel.verified && (
                        <BiCheck color='red' />
                    )}
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    opacity={0.5}
                    fontSize={12}
                    gap={3}
                    fontWeight={'medium'}
                >
                    <Text>
                        {video.views} views
                        {' '}·{' '}
                        {video.date}
                    </Text>
                </Box>
            </Box>

        </Box >
    );
};


const ChannelCategories = [
    {
        title: 'Discover More from our Apple Events',
        videos: [
            {
                title: 'WWDC22 - Inside APple HQ, Day 1',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '1.32M',
                date: '5 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 2',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '1.32M',
                date: '4 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 3',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '1.52M',
                date: '3 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 4',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '3.32M',
                date: '2 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 1',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '1.32M',
                date: '5 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 2',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '1.32M',
                date: '4 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 3',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '1.52M',
                date: '3 Days Ago',
            }, {
                title: 'WWDC22 - Inside APple HQ, Day 4',
                channel: {
                    name: 'Apple',
                    logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj',
                    verified: true,
                },
                imageUrl: 'https://i.ytimg.com/vi/q5D55G7Ejs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC68k0iNM3aPHMMb7IGiuyG7RvsoA',
                views: '3.32M',
                date: '2 Days Ago',
            },
        ]
    },
    {
        title: 'Mac', videos: [

        ]
    },
    {
        title: 'iPhone', videos: [

        ]
    },
    {
        title: 'Accessories', videos: [

        ]
    },
    {
        title: 'iPad', videos: [

        ]
    },
    {
        title: 'Apple Music', videos: [

        ]
    },
];

const HomePanel = ({ data }) => {
    let featured = true; //todo: to get this from the data

    document.title = 'Apple - Home';



    return (
        <Box>
            {featured && <FeaturedCard />}

            {ChannelCategories.map((category, index) => (
                <Box key={index} pt='12'>
                    <Box fontWeight={'semibold'} display='flex' gap={5}>
                        <Text>{category.title}</Text>
                        <Text opacity={0.5}>▶️ Play</Text>
                    </Box>


                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={5}
                        slidesPerView={5}
                        navigation
                    >
                        {category.videos.map((video, index) => (
                            <SwiperSlide key={index} style={{ listStyle: 'none' }}>
                                <VideoCard video={video} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Divider />
                </Box>
            ))
            }




        </Box >
    );
};

export default HomePanel;