import Image from "next/image";
import logoDark from "../../public/images/logo-flat-dark.svg";
import logoLight from "../../public/images/logo-flat-light.svg";

const ImageTheme = () => {
    const imageSize = 27;

    return (
        // <>
        //     <div>
        //         <Image className="block dark:hidden" src={logoDark} alt="Logo" width={imageSize} height={imageSize} />
        //     </div>
        //     <div>
        //         <Image className="hidden dark:block" src={logoLight} alt="Logo" width={imageSize} height={imageSize} />
        //     </div>
        // </>
        <svg className="w-7 h-7" version="1.1" height="480" width="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
            <path className="stroke-blackPrimaryFull dark:stroke-whitePrimaryFull" d="M240 35 A200 200 0 0 1 240 445" fill="none" strokeWidth="70" />
            <rect className="fill-blackPrimaryFull dark:fill-whitePrimaryFull" x="0" y="272" width="70" height="208"></rect>
            <rect x="102" y="0" width="72" height="70" fill="#ffad00"></rect>
            <rect x="102" y="136" width="139" height="70" fill="#ffad00"></rect>
            <rect x="136" y="272" width="105" height="70" fill="#ffad00"></rect>
            <rect className="fill-blackPrimaryFull dark:fill-whitePrimaryFull" x="0" y="410" width="241" height="70"></rect>
            <path d="M240 171 A68 68 0 0 1 240 307" fill="none" stroke="#ffad00" strokeWidth="70" />
            <path d="M103 35 A68 68 0 1 0 103 171" fill="none" stroke="#ffad00" strokeWidth="70" />
        </svg>
    );
};

export default ImageTheme;
