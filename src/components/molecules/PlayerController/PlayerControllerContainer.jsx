import { useEffect, useRef, useState } from "react";
import Audio1 from '../../../assets/1.mp3';
import Audio2 from '../../../assets/2.mp3';

import { PlayerController } from "./PlayerController";

export const PlayerControllerContainer = () => {
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
        playing: false,
        index: 0,
        seek: 0.0,
        isSeeking: false,
        repeat: false,
        shuffle: false,
        duration: 0.0
    });

    function nextSong() {
        if(playerState.shuffle) {
            // If shuffle is on, then we are going to randomly pick the sonf from the list
            const randomIndex = Math.floor(Math.random() * songs.length);
            setPlayerState({
                ...playerState,
                index: (randomIndex === playerState.index) ? (randomIndex + 1) % songs.length : randomIndex
            })
        } else {
            setPlayerState({
                ...playerState,
                index: (playerState.index + 1) % songs.length
            })
        }
    }

    function prevSong() {
        setPlayerState({
            ...playerState,
            index: (playerState.index - 1 + songs.length) % songs.length
        });
    }

    function handleShuffle() {
        setPlayerState({
            ...playerState,
            shuffle: !playerState.shuffle
        });
    }

    function handleSongLoad() {
        setPlayerState({
            ...playerState,
            duration: soundRef.current.duration()
        })
    }

    function handleSeek(e) {
        console.log(e.target.value);
        const value = parseFloat(e.target.value);
        setPlayerState({
            ...playerState,
            seek: value
        })
        soundRef.current.seek(value);
    } 

    useEffect(() => {
        let id;
        if(playerState.playing && !playerState.isSeeking) {
            const updateSeek = () => {
                setPlayerState({
                    ...playerState,
                    seek: soundRef.current.seek()
                });
                id = requestAnimationFrame(updateSeek);
            }

            // starting point of seek update recursive loop
            id = requestAnimationFrame(updateSeek);
            return () => cancelAnimationFrame(id);
        }

        cancelAnimationFrame(id);

    }, [playerState.playing, playerState.isSeeking]);

    if(!playerState) {
        return null;
    }

    return (
        <PlayerController 
            playerState={playerState}
            setPlayerState={setPlayerState}
            soundRef={soundRef}
            songs={songs}
            handleSongLoad={handleSongLoad}
            handleSeek={handleSeek}
            handleShuffle={handleShuffle}
            nextSong={nextSong}
            prevSong={prevSong}
            
        />
    )
}