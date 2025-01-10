import { useState } from "react";
import { SidebarPlaylistItem } from "../atoms/SidebarPlaylistItem"

export const SidebarPlaylist = () => {

    const [playlists] = useState([
        {name: "My Playlist"},
        {name: "Music Mania"},
        {name: "Rock On"}
    ]);

    return (
        <div 
        className="py-5 h-2/3 overflow-y-auto"
    >

        <ul className="space-y-2">
            {playlists.map((playlist) => (
                <SidebarPlaylistItem key={playlist.name} name={playlist.name} />
            ))}
            
        </ul>


    </div>
    )
}