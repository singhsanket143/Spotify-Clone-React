import { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import Audio1 from '../../assets/1.mp3';
import Audio2 from '../../assets/2.mp3';

import {
    MdShuffle,
    MdSkipNext,
    MdSkipPrevious,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat

} from "react-icons/md";

export const PlayerController = () => {
    const songs = [
        {
            id: 1,
            name: "Song 1",
            artist: {
                name: "Artist 1",
                image: "https://robohash.org/artist1"
            },
            url: Audio1
        },
        {
            id: 2,
            name: "Song 2",
            artist: {
                name: "Artist 2",
                image: "https://robohash.org/artist2"
            },
            url: Audio2
        }
    ]

    const soundRef = useRef(null);

    const [playerState, setPlayerState] = useState({
        playing: true,
        index: 0,
        seek: 0.0,
        isSeeking: false,
        repeat: false,
        shuffle: false,
        duration: 0.0
    });

    useEffect(() => {
        console.log(songs[playerState.index].url);
    }, [playerState.index]);

    return (
        <div
            className="text-white"
        >

            <ReactHowler 
                ref={soundRef}
                src={songs[playerState.index].url}
                playing={playerState.playing}
            />
            <div
                className="flex justify-center items-center space-x-4 py-4 text-gray-400"
            >
                <button
                    className="text-xl text-white"
                >
                    <MdShuffle />
                </button>
                <button
                    className="text-2xl"
                >
                    <MdSkipPrevious />
                </button>
                {
                    playerState.playing ? (
                        <button
                            onClick={() => setPlayerState({...playerState, playing: false})}
                            className="text-4xl text-white"
                        >
                            <MdOutlinePauseCircleFilled />
                        </button>
                    ) : (
                        <button
                            onClick={() => setPlayerState({...playerState, playing: true})}
                            className="text-4xl text-white"
                        >
                            <MdOutlinePlayCircleFilled />
                        </button>
                    )
                }
                <button
                    className="text-2xl"
                >
                    <MdSkipNext />
                </button>
                <button
                    className="text-xl text-white"
                >
                    <MdOutlineRepeat />
                </button>
            </div>
        </div>
    )
}