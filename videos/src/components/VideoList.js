import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    //videos.map maps the videos to a video list
    const renderedList = videos.map((video) => {
        return <VideoItem video={video}/>;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;