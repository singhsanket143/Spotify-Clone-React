import { PlayerControllerContainer } from "../molecules/PlayerController/PlayerControllerContainer"

export const Player = () => {

    

    return (
        <div
            className="bg-black text-white h-full flex items-center justify-center border-t border-green-900"
        >
            <div
                className="bg-gray-900 w-screen"
            >
                <div className="flex items-center">

                    <div className="p-5 w-1/3">
                        <p className="text-lg font-bold">Song 1</p>
                        <p className="text-sm text-gray-400">Artist 1</p>
                    </div>

                    <div className="w-2/5">
                        <PlayerControllerContainer />
                    </div>
                </div>

            </div>
        </div>
    )
}