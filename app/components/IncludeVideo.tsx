import Script from "next/script";

export default function IncludeVideo() {
    return (
        <Script id="video-replace">{`
            let imgs = document.getElementsByTagName ("img");
            for (let i = 0; i < imgs.length; i++) {
                if (imgs [i].alt.startsWith ("Video - ")) {
                    let src = imgs [i].src;
                    let alternate = imgs [i].alt.split ("Video - ") [1];
                    let type = src.split (".") [1];

                    let video = document.createElement ("video");
                    video.controls = true;
                    video.src = "/images/" + src.split ("images/") [1];
                    video.innerHTML = alternate;

                    imgs [i].replaceWith (video);
                }
            }
        `}</Script>
    );
}
