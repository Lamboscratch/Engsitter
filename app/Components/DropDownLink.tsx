import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
    currentPath: string;
    path: string;
    name: string;
    linkClass: string;
    itemClass: string;
    rightArrowClass: string;
}

const DropDownLink = ({ currentPath, path, name, linkClass, itemClass, rightArrowClass }: Props) => {
    return (
        <Link className={`${currentPath === path ? "font-semibold" : ""} ${linkClass}`} href={path}>
            <Item className={itemClass}>
                {name + " "}
                <div className={rightArrowClass}>
                    <MdOutlineKeyboardArrowRight />
                </div>
            </Item>
        </Link>
    );
};

export default DropDownLink;
