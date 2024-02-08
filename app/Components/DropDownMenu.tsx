import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
    className: string;
}

const DropDownMenu = ({ className }: Props) => {
    const currentPath = usePathname();

    return (
        <div className={className}>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className="w-[31px] h-[31px] inline-flex items-center justify-center shadow-black rounded-full outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" aria-label="Customise options">
                        <IoIosArrowDropdown size={29} />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="min-w-40 bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                    >
                        <Link className={`${currentPath === "/" ? "font-semibold" : ""} hover:text-gray-600 transition-colors dark:hover:text-gray-300`} href={"/"}>
                            <DropdownMenu.Item className="group text-base leading-none rounded-[3px] flex items-center h-[30px] px-[3px] relative select-none outline-none data-[highlighted]:bg-orangeSite data-[highlighted]:text-violet1">
                                Home{" "}
                                <div className="ml-auto pl-[20px] group-data-[highlighted]:text-white">
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                            </DropdownMenu.Item>
                        </Link>
                        <Link className={`${currentPath === "/posts" ? "font-semibold" : ""} hover:text-gray-600 transition-colors dark:hover:text-gray-300`} href={"/posts"}>
                            <DropdownMenu.Item className="group text-base leading-none rounded-[3px] flex items-center h-[30px] px-[3px] relative select-none outline-none data-[highlighted]:bg-orangeSite data-[highlighted]:text-violet1">
                                Posts{" "}
                                <div className="ml-auto pl-[20px] group-data-[highlighted]:text-white">
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                            </DropdownMenu.Item>
                        </Link>
                        <Link className={`${currentPath === "/snippets" ? "font-semibold" : ""} hover:text-gray-600 transition-colors dark:hover:text-gray-300`} href={"/snippets"}>
                            <DropdownMenu.Item className="group text-base leading-none rounded-[3px] flex items-center h-[30px] px-[3px] relative select-none outline-none data-[highlighted]:bg-orangeSite data-[highlighted]:text-violet1">
                                Snippets{" "}
                                <div className="ml-auto pl-[20px] group-data-[highlighted]:text-white">
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                            </DropdownMenu.Item>
                        </Link>

                        <DropdownMenu.Arrow className="fill-white" />
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
};

export default DropDownMenu;
