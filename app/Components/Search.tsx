import siteMetadata from "@/app/Data/siteMetadata";
import { KBarButton } from "pliny/search/KBarButton.js";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
    style: string;
}

export default function Search({ style }: Props) {
    if (siteMetadata.search && siteMetadata.search.provider === "kbar") {
        return (
            <KBarButton className={style} aria-label="Search">
                <IoSearchOutline className="text-blackPrimary dark:text-whitePrimary w-[1.65rem] h-[1.65rem]" />
            </KBarButton>
        );
    }
}
