"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoMdCheckmarkCircleOutline, IoMdCopy } from "react-icons/io";

interface Props {
    text: string;
}

export default function Copy({ text }: Props) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <button className="absolute top-0 right-0 z-10 p-2" aria-label="Copy text button">
            <CopyToClipboard text={text} onCopy={(copied) => copy()}>
                {copied ? <IoMdCheckmarkCircleOutline className="w-[1.1rem] h-[1.1rem] text-lg m-1 text-orangeSite" /> : <IoMdCopy className="w-[1.1rem] h-[1.1rem] text-lg m-1 text-grayPrimary transition-colors hover:text-lightGrayPrimary" />}
            </CopyToClipboard>
        </button>
    );
}
