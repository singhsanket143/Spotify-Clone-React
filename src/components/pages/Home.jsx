import { ProfileBanner } from "../atoms/ProfileBanner"
import { GradientWrapper } from "../molecules/GradientWrapper"

export const Home = () => {

    const artists = [
        { id: 1, name: "The Weeknd", image: "https://robohash.org/weeknd" },
        { id: 2, name: "Artist 2", image: "https://robohash.org/artist2" },
        {
            id: 3,
            name: "Artist 3",
            image: "https://robohash.org/artist3"
        }
    ]


    return (
        <GradientWrapper>
            <ProfileBanner />

            <div
                className="py-12"
            >
                <div className="text-white px-10">
                    
                    {/* Artist header */}   
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold">
                            Top artist this month
                        </h2>
                        <p className="text-md">
                            Based on your listening habits
                        </p>
                    </div>

                    {/* Artist lists */}
                    <div className="flex">
                    {artists.map((artist) => (
                        <div key={artist.id} className="px-2 w-1/5">
                            <div
                                className="p-4 rounded-lg bg-gray-900"
                            >   
                                <img 
                                    src={artist.image}
                                    className="w-full h-auto rounded-full"
                                
                                />
                                <div className="mt-4">
                                    <h3 className="text-lg">{artist.name}</h3>
                                    <p className="text-xs">
                                        Artist
                                    </p>
                                
                                </div>

                            </div>
                        </div>
                    ))}
                    </div>

                </div>

            </div>
        </GradientWrapper>
    )
}