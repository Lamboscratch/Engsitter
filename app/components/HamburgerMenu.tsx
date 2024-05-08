import checkLink from "@/app/utilities/checkLink";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFilePost } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export default function HamburgerMenu() {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const liClass = "mx-4 h-16 flex justify-items-center items-center border-solid border-gray-200 border-b dark:border-zinc-700";
    const underlineClass = "font-semibold underline decoration-solid decoration-orangeSite underline-offset-4";
    const iconClass = "w-[1.65rem] h-[1.65rem]";

    function clickAction() {
        setIsOpen(!isOpen);
    }

    return (
        <Flex className="initial:flex sm:hidden" direction="row" justify="center" align="center">
            <button className="initial:flex sm:hidden" onClick={clickAction} aria-label="Hamburger menu button">
                <AiOutlineMenu className={iconClass} />
            </button>
            <ul id="menu" className={`h-dvh w-[calc(100vw-(100vw-100%))] absolute top-0 left-0 z-30 ${isOpen ? "block" : "hidden"} sm:hidden bg-whitePrimaryFull dark:bg-blackPrimaryFull`}>
                <li className={liClass}>
                    <button className="ml-auto justify-self-center" onClick={clickAction} aria-label="Close menu button">
                        <AiOutlineClose className={iconClass} />
                    </button>
                </li>
                <li className={liClass}>
                    <Link className={`${checkLink(currentPath!, "/") ? underlineClass : ""} justify-self-center text-xl`} href="/" onClick={clickAction} aria-label="Go to home page">
                        Home
                    </Link>
                    <Link className="ml-auto" href="/" onClick={clickAction} aria-label="Go to home page">
                        <IoHomeSharp className={iconClass} />
                    </Link>
                </li>
                <li className={liClass}>
                    <Link className={`${checkLink(currentPath!, "/posts") ? underlineClass : ""} justify-self-center text-xl`} href="/posts" onClick={clickAction} aria-label="Go to posts page">
                        Posts
                    </Link>
                    <Link className="ml-auto" href="/posts" onClick={clickAction} aria-label="Go to posts page">
                        <BsFilePost className={iconClass} />
                    </Link>
                </li>
                <li className={liClass}>
                    <Link className={`${checkLink(currentPath!, "/resources") ? underlineClass : ""} justify-self-center text-xl`} href="/resources" onClick={clickAction} aria-label="Go to resources page">
                        Resources
                    </Link>
                    <Link className="ml-auto" href="/resources" onClick={clickAction} aria-label="Go to resources page">
                        <FaLightbulb className={iconClass} />
                    </Link>
                </li>
            </ul>
        </Flex>
    );
}
