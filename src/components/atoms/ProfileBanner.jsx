export const ProfileBanner = () => {
    return (
        <div
                className="bg-purple-600 p-10 flex items-end"
            >
                <div
                    className="p-5"
                >
                    <img 
                        src={'https://robohash.org/sanket'}
                        className={`w-40 h-40 shadow-2xl rounded-full`}
                    />

                </div>

                <div
                    className="p-5 leading-10 text-white"
                >

                    <p className="text-xs font-bold uppercase">
                        Profile
                    </p>

                    <h1 className="text-6xl font-bold">
                        Sanket Singh
                    </h1>

                    <p className="text-xs">
                        Public playlist
                    </p>

                </div>

            </div>
    );
}