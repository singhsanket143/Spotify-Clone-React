import ReactHowler from "react-howler";

import {
    MdShuffle,
    MdSkipNext,
    MdSkipPrevious,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat

} from "react-icons/md";
import { formatTime } from "../../../utils/timeFormatter";
import { useEffect } from "react";

export const PlayerController = ({
    playerState,
    setPlayerState,
    soundRef,
    songs,
    handleSongLoad,
    handleSeek,
    handleShuffle,
    nextSong,
    prevSong
}) => {

    useEffect(() => {  
        console.log(playerState)
    }, [playerState]);

    return (
        <div
            className="text-white"
        >

            <ReactHowler 
                ref={soundRef}
                src={songs[playerState.index].url}
                playing={playerState.playing}
                onLoad={handleSongLoad}
            />
            <div
                className="flex justify-center items-center space-x-4 py-4 text-gray-400"
            >
                <button
                    className="text-xl text-white"
                    onClick={handleShuffle}
                >
                    <MdShuffle />
                </button>
                <button
                    onClick={prevSong}
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
                    onClick={nextSong}
                >
                    <MdSkipNext />
                </button>
                <button
                    className="text-xl text-white"
                >
                    <MdOutlineRepeat />
                </button>
            </div>


            {/* Progress bar ui */}
            <div
                className="flex items-center justify-center space-x-2 text-xs text-gray-400 px-4"
            >
                <div
                    className="w-10 text-right"
                >
                    {formatTime(playerState.seek)}
                </div>

                <input 
                    type="range"
                    className="w-full bg-gray-800 accent-gray-600"
                    min={"0"}
                    value={playerState.seek}
                    max={playerState.duration || 0}
                    step="0.1"
                    onChange={handleSeek}
                    onMouseDown={() => { setPlayerState({ ...playerState, isSeeking: true }) }}
                    onMouseUp={() => { setPlayerState({ ...playerState, isSeeking: false }) }}
                />

                <div
                    className="w-10 text-left"
                >
                    {formatTime(playerState.duration)}
                </div>

            </div>
        </div>
    )
}