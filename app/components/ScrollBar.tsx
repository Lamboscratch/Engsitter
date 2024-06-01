import Script from "next/script";

export default function ScrollBar() {
    return (
        <div className="sticky top-[4rem] z-10 w-full">
            <div className="w-full h-[2px] bg-whitePrimaryFull dark:bg-blackPrimaryFull">
                <div className="h-[2px] bg-orangeSite w-0" id="scrollBar"></div>
                <Script id="progress-bar">{`
                    window.onscroll = function() {myFunction()};

                    function myFunction() {
                        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                        let scrolled = (winScroll / height) * 100;

                        let bar = document.getElementById("scrollBar");

                        if (bar !== null) {
                            bar.style.width = scrolled + "%";
                        }
                    }
                `}</Script>
            </div>
        </div>
    );
}
