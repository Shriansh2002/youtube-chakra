import React from 'react';
import { useParams } from 'react-router-dom';

const ChannelPage = () => {
    const { id } = useParams(); //will store the slugName of the channel

    return (
        <h1>{id}</h1>
    );
};

export default ChannelPage;