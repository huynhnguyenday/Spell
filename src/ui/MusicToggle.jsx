import { useEffect, useRef, useState } from "react";

const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio("/audio/Christmas-Time-chosic.com_.mp3");
        audioRef.current.loop = true;
        return () => {
            audioRef.current.pause();
        };
    }, []);

    const handleToggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((error) => console.error("Lỗi phát nhạc:", error));
            }
        }
    };

    return (
      <button
        onClick={handleToggleMusic}
        className="fixed top-4 right-4 bg-amber-300 rounded-2xl p-3 text-xl text-yellow-900 hover:scale-90 transition duration-300 shadow-lg"
      >
        {isPlaying ? (
          <p>
            Tắt <i className="pl-3 fa-solid fa-music"></i>
          </p>
        ) : (
          <p>
            Bật <i className="pl-3 fa-solid fa-music"></i>
          </p>
        )}
      </button>
    );
};

export default MusicToggle;
