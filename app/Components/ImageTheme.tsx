import Image from "next/image";
import logoDark from "../../public/images/logo-flat-dark.svg";
import logoLight from "../../public/images/logo-flat-light.svg";

const ImageTheme = () => {
    return (
        <>
            <div data-hide-on-theme="dark">
                <Image className="dark:hidden" src={logoDark} alt="Logo" width={33} height={33} />
            </div>
            <div data-hide-on-theme="light">
                <Image className="hidden dark:block" src={logoLight} alt="Logo" width={33} height={33} />
            </div>
        </>
    );
};

export default ImageTheme;
