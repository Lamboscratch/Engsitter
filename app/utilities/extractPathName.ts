import { IconType } from "react-icons";
import { BsFilePost } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import { MdTipsAndUpdates } from "react-icons/md";

interface Links {
    name: string;
    path: string;
    Icon: IconType;
}

const links: Links[] = [
    {
        name: "Home",
        path: "/",
        Icon: IoHomeSharp,
    },
    {
        name: "Posts",
        path: "/posts",
        Icon: BsFilePost,
    },
    {
        name: "Resources",
        path: "/resources",
        Icon: MdTipsAndUpdates,
    },
];

export default links;
