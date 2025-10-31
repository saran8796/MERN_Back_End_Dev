import { useEffect, useRef, useState } from "react";

const VideoSkipping = () => {
  const mainVideoRef = useRef(null);
  const adRef = useRef(null);
  const [adPlayed, setadPlayed] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [count, setCount] = useState(5);
  const [skipEnabled, setSkipEnabled] = useState(false);

  useEffect(() => {
    const mainVideo = mainVideoRef.current;

    const handleTimeUpdate = () => {
      if (mainVideo.currentTime >= 10 && !adPlayed) {
        // console.log("hello bro");
        handleAd();
      }
    };

    mainVideo.addEventListener("timeupdate", handleTimeUpdate);
    return () => mainVideo.removeEventListener("timeupdate", handleTimeUpdate);
  }, [adPlayed]);

  const handleAd = () => {
    setadPlayed(true);
    setShowAd(true);
    mainVideoRef.current.pause();

    const adVideo = adRef.current;
    // adVideo.play();

    let timeleft = 5;
    setCount(timeleft);

    const interval = setInterval(() => {
      timeleft -= 1;
      setCount(timeleft);
      if (timeleft <= 0) {
        clearInterval(interval);
        setSkipEnabled(true);
      }
    }, 1000);
  };

  const handleSkipAd = () => {
    adRef.current.pause();
    setShowAd(false);

    mainVideoRef.current.play();
  };

  const handleEnd = () => {
    adRef.current.pause();
    setShowAd(false);

    mainVideoRef.current.play();
  };

  return (
    <>
      <div className="relative w-full max-w-3xl m-auto mt-20 flex justify-center items-center">
        {/* Main Video */}
        <video
          ref={mainVideoRef}
          className="w-full shadow-lg"
          controls
          src="./video/main.mp4"
        />
        {/* Ad Video */}
        {showAd && (
          <div className="absolute inset-0 bg-black">
            <video
              ref={adRef}
              src="./video/ad.mp4"
              autoPlay
              onEnded={handleEnd}
            />
            <button
              onClick={handleSkipAd}
              disabled={!skipEnabled}
              className={`absolute cursor-pointer bottom-4 right-4 px-4 py-2 rounded-lg text-white text-sm font-semibold ${
                skipEnabled
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
            >
              {skipEnabled ? "Skip ad" : `Skip ad in ${count}`}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoSkipping;
