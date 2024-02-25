const ImageTheme = () => {
    const darkLightClass = "fill-blackPrimaryFull dark:fill-whitePrimaryFull stroke-blackPrimaryFull dark:stroke-whitePrimaryFull";

    return (
        <svg className="w-7 h-7" version="1.1" height="480" width="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
            <polygon points="240, 80 0, 0 0, 80 240, 160" stroke="#ffad00" fill="#ffad00" strokeWidth="1" />
            <polygon points="0, 40 80, 40 80, 200 0, 200" stroke="#ffad00" fill="#ffad00" strokeWidth="1" />
            <polygon points="240, 240 0, 160 0, 240 240, 320" stroke="#ffad00" fill="#ffad00" strokeWidth="1" />
            <polygon points="0, 200 80, 200 80, 360 0, 360" stroke="#ffad00" fill="#ffad00" strokeWidth="1" />
            <polygon points="240, 400 0, 320 0, 400 240, 480" stroke="#ffad00" fill="#ffad00" strokeWidth="1" />
            <polygon className={darkLightClass} points="240, 80 480, 0 480, 80 240, 160" stroke="#111113" fill="#111113" strokeWidth="1" />
            <polygon className={darkLightClass} points="240, 120 320, 120 320, 280 240, 280" stroke="#111113" fill="#111113" strokeWidth="1" />
            <polygon className={darkLightClass} points="240, 240 480, 160 480, 240 240, 320" stroke="#111113" fill="#111113" strokeWidth="1" />
            <polygon className={darkLightClass} points="400, 240 480, 240 480, 400 400, 400" stroke="#111113" fill="#111113" strokeWidth="1" />
            <polygon className={darkLightClass} points="240, 400 480, 320 480, 400 240, 480" stroke="#111113" fill="#111113" strokeWidth="1" />
        </svg>
    );
};

export default ImageTheme;
