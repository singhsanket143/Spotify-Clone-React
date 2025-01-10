import { Link } from "react-router-dom"

export const SidebarPlaylistItem = ({ name }) => {
    return (
        <li className="px-5">
            <Link className="hover:underline">
                {name}
            </Link>
        </li>
    )
}