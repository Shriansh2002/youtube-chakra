import { Box } from '@chakra-ui/react';
import React from 'react';
import AutoPlayButton from '../extras/AutoPlayButton';
import CardOne from './CardOne';


const suggestedVideos = [
    {
        imageUrl: 'https://i.ytimg.com/vi/QJO3ROT-A4E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnvJXr_fn3DDR9zOkXbd4ms-JGkQ',
        title: 'One Direction - What Makes You Beautiful (Official Video)',
        views: '3.3 M ',
        channel: {
            name: 'One Direction',
            logoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu8lV9YA7m7BtmIyJwAT1Pgn5CEhZsUuLlGmrcVY6oY=s176-c-k-c0x00ffffff-no-rj',
            verified: true,
        }
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/Az-mGR-CehY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABi0kefPQ31TbkiXVZcMf3MDw99w',
        title: 'K-391 & Alan Walker - Ignite (feat. Julie Bergan & Seungri)',
        views: '432 M ',
        channel: {
            name: 'K391',
            logoUrl: 'https://yt3.ggpht.com/zLPySo6V5Q_rnRWDUukNygDWU1MV-rtZByLwC0Rygth98sGKZ608IK1G_LNtDkQG1mJzK1a41A=s176-c-k-c0x00ffffff-no-rj',
            verified: true,
        }
    },

    {
        imageUrl: 'https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtA7onuiJmHyjpL6XPfyW6d_fSeg',
        title: 'Ed Sheeran - Shape of You (Official Music Video)',
        views: '5.7 B ',
        channel: {
            name: 'Ed Sheeran',
            logoUrl: 'https://yt3.ggpht.com/-syoRcPPGt3NE3TzbKJsefa5Rej4w_lSof-aXSm1Q9cDx5Gyn-Cuus8UKjKBtILs_Bqwgc_i0A=s88-c-k-c0x00ffffff-no-rj',
            verified: false,
        }
    },

];


const MainRight = () => {
    return (
        <Box mt='10' display={'flex'} flexDir={'column'} mx={10}>
            <AutoPlayButton />

            {suggestedVideos.map((video, index) => (
                <CardOne video={video} key={index} />
            ))}

        </Box>
    );
};

export default MainRight;