/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { BiCheck } from 'react-icons/bi';
import millify from 'millify';
import { format } from 'timeago.js';
import axios from "axios";
import { useEffect, useState } from 'react';


const FeaturedCard = () => {
    return (
        <Box>
            <Text fontWeight={'semibold'} textTransform={'uppercase'}>Featured Video ▶️</Text>

            <Box display={'flex'} gap={5} mt='4'>
                <Box>
                    <Image
                        src='https://i.ytimg.com/vi/ux6zXguiqxM/maxresdefault.jpg?v=63065d5b'
                        alt='Apple Event'
                        width={160 * 3.2}
                        height={90 * 2.5}
                    />
                </Box>

                <Box display={'flex'} flexDir={'column'} gap={2}>
                    <Text fontWeight={'bold'}>
                        Apple Event &mdash; September 7
                    </Text>
                    <Text opacity={0.7} fontSize={12}>
                        Scheduled for 9/7/22, 10:30 PM
                    </Text>
                    <Box>
                        Watch the special Apple Event.
                        September 7, 2022, at 10 a.m. PT.
                        Set a reminder and we{"’"}ll send you an update before the show.
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};


const VideoCard = ({ video: { snippet } }) => {
    const [views, setViews] = useState(0);

    const functionSetViews = async () => {
        const res = await axios.get(`
            https://www.googleapis.com/youtube/v3/videos?id=${snippet.resourceId.videoId}&key=${process.env.REACT_APP_GOOGLE_CLOUD_API_KEY}&fields=items(id,statistics)&part=statistics
        `);
        setViews(res.data.items[0].statistics.viewCount);

    };
    functionSetViews();

    return (
        <Box
            py='2.5'
        >
            <Image
                src={snippet?.thumbnails?.maxres.url}
                alt='Image'
                width={160 * 3.2}
            />

            <Box display={'flex'} flexDir='column' justifyContent={'space-between'}>
                <Text fontWeight='semibold' py='2' fontSize={13} h='45px'>
                    {snippet?.title}
                </Text>

                <Box display={'flex'} alignItems='center' pt='5'>
                    <Text fontWeight={'bold'} fontSize={'xs'}>
                        {snippet?.videoOwnerChannelTitle}
                    </Text>
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
                        {millify(views)} views
                        {' '}·{' '}
                        {format(snippet?.publishedAt)}
                    </Text>
                </Box>
            </Box>

        </Box >
    );
};


const HomePanel = () => {
    let featured = true; //todo: to get this from the data

    document.title = 'Apple - YouTube';
    const YT_plalist_items_api = process.env.REACT_APP_YT_PLAYLIST_API;
    const API_key = process.env.REACT_APP_GOOGLE_CLOUD_API_KEY;
    const PlayListOne = 'PLHFlHpPjgk72Si7r1kLGt1_aD3aJDu092';

    const [playListOne, setPlayListOne] = useState([]);

    useEffect(() => {
        async function executeIT() {
            const res = await axios.get(
                `${YT_plalist_items_api}?part=snippet&playlistId=${PlayListOne}&key=${API_key}&maxResults=50`
            );
            setPlayListOne(res.data.items);
        }
        executeIT();
    }, []);


    // consoling the object
    // console.log("Object 1", playListOne);


    const ChannelCategories = [
        {
            title: 'Discover More from our Apple Events',
            subtitle: 'Catch up on what was announced at the Apple special event and more.',
            videos: [
                playListOne
            ]
        },
        {
            title: 'Mac', videos: [
                // playListOne
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



    return (
        <Box>
            {featured && <FeaturedCard />}

            {ChannelCategories.map((category, index) => (
                <Box key={index} pt='12'>
                    <Box fontWeight={'semibold'} display='flex' gap={5}>
                        <Text fontSize={20}>{category.title}</Text>
                        <Text opacity={0.5}>▶️ Play</Text>
                    </Box>
                    <Box fontWeight={'normal'} display='flex' gap={5}>
                        <Text opacity={0.7} fontSize={15}>{category?.subtitle}</Text>
                    </Box>


                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={5}
                        slidesPerView={5}
                        navigation
                    >
                        {category?.videos[0]?.map((video, index) => (
                            <SwiperSlide key={index}>
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