import { Arrow, Content, Portal, Root, Trigger } from "@radix-ui/react-dropdown-menu";
import { usePathname } from "next/navigation";
import { IoIosArrowDropdown } from "react-icons/io";
import DropDownLink from "./DropDownLink";

export default function DropDownMenu() {
    const currentPath = usePathname();

    const itemClass = "group text-base leading-none rounded-[3px] flex items-center h-[30px] px-[3px] relative select-none outline-none data-[highlighted]:bg-orangeSite";
    const rightArrowClass = "ml-auto pl-[20px] group-data-[highlighted]:text-white";
    const linkClass = "hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit";

    return (
        <div className="leading-extraSmall text-inherit sm:hidden">
            <Root>
                <Trigger asChild>
                    <button className="w-[31px] h-[31px] inline-flex items-center justify-center shadow-black rounded-full outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" aria-label="Customise options">
                        <IoIosArrowDropdown className="w-[1.65rem] h-[1.65rem]" />
                    </button>
                </Trigger>
                <Portal>
                    <Content
                        className="min-w-36 bg-white dark:text-blackPrimary rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                    >
                        <DropDownLink currentPath={currentPath} path="/" name="Home" linkClass={linkClass} itemClass={itemClass} rightArrowClass={rightArrowClass} />
                        <DropDownLink currentPath={currentPath} path="/Posts" name="Posts" linkClass={linkClass} itemClass={itemClass} rightArrowClass={rightArrowClass} />
                        <DropDownLink currentPath={currentPath} path="/Tips" name="Tips" linkClass={linkClass} itemClass={itemClass} rightArrowClass={rightArrowClass} />
                        <Arrow className="fill-white" />
                    </Content>
                </Portal>
            </Root>
        </div>
    );
}
