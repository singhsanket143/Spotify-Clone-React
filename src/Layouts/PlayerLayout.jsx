import { Player } from "../components/organisms/Player"
import { Sidebar } from "../components/organisms/Sidebar"

export const PLayerLayout = ({ children }) => {
    return (
        <div
            className="w-screen h-screen relative"
        >

            {/* Sidebar */}

            <div className="absolute top-0 left-0 w-64 bg-green-900 h-screen">
                <Sidebar />
            </div>


            {/* Main board content */}
            <div
                className="ml-64 mb-24"
            >
                <div className="h-[calc(100vh-100px)]">
                    {children}
                </div>
            </div>

            {/* Player */}
            <div className="absolute bottom-0 left-0 w-screen h-[100px]">
                <Player /> 
            </div>
        </div>
    )
}