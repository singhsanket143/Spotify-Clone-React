export const GradientWrapper = ({ 
    fromColor = 'purple-500', 
    viaColor = 'purple-600', 
    toColor = 'black', 
    children 
}) => {

    return (
        <div
            className={`h-full overflow-y-auto bg-gradient-to-b from-${fromColor} via-${viaColor} to-${toColor}`}
        >

            {children}

        </div>
    )

}