
import { Logo } from "../atoms/Logo"

import { SidebarNavigationMenu } from "../atoms/SidebarNavigationMenu";
import {Divider} from "../atoms/Divider";
import { SidebarPlaylist } from "../molecules/SidebarPlaylist";
export const Sidebar = () => {

    

    return (
        <div
            className="w-full bg-black px-2 text-gray-400 h-[calc(100vh-100px)]"
        >   

            <div
                className="h-full py-5"
            >   

                {/* Logo */}

                <Logo 
                    width={16}
                    height={16}
                />

                {/* Navigation Menu */}

                <SidebarNavigationMenu />

                {/* Divider */}
                <Divider />

                {/* Playlists */}

                <SidebarPlaylist />

            </div>

        </div>
    )
}