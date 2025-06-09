// "use client";

// import { useEffect, useState } from "react";

// const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
// const CHANNEL_USERNAME = "curious-us"; 

// export const LatestShorts = () => {
//   const [videoId, setVideoId] = useState(null);

//   useEffect(() => {
//     const fetchLatestShort = async () => {
//       try {
//         let res = await fetch(
//           `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_USERNAME}&key=${YOUTUBE_API_KEY}`
//         );
//         let data = await res.json();

//         if (!data.items || data.items.length === 0) {
//           console.error("Channel not found!");
//           return;
//         }

//         const uploadsPlaylistId = data.items[0].contentDetails.relatedPlaylists.uploads;

//         res = await fetch(
//           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${YOUTUBE_API_KEY}`
//         );
//         data = await res.json();

//         if (!data.items || data.items.length === 0) {
//           console.error("No videos found!");
//           return;
//         }

//         const latestVideoId = data.items[0].snippet.resourceId.videoId;
//         setVideoId(latestVideoId);
//       } catch (error) {
//         console.error("Error fetching video:", error);
//       }
//     };

//     fetchLatestShort();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">New Content</h1>
//       {videoId ? (
//        <iframe
//        width="360"
//        height="640"
//        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1`}
//        title="YouTube Shorts"
//        allow="autoplay; encrypted-media"
//        className="rounded-lg shadow-lg relative z-50"
//      />
     
//       ) : (
//         <p>Loading latest short...</p>
//       )}
//     </div>
//   );
// };

// export default LatestShorts;
"use client";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export const LatestShorts = () => {
  const videoId = "GV0FCO1MEPA";
  
  // 1080p optimized URL parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?\
autoplay=1&\
mute=1&\
controls=0&\
modestbranding=1&\
showinfo=0&\
rel=0&\
iv_load_policy=3&\
fs=0&\
disablekb=1&\
loop=1&\
playlist=${videoId}&\
vq=hd1080&\  // Force 1080p resolution
highres=1&\  // Request high resolution
hd=1`;       // HD mode

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="Curiosity - Explore Limitless Possibilities"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full scale-125 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              border: "none",
              pointerEvents: "none",
              objectFit: "cover",
              aspectRatio: "16/9" // Maintain 1080p aspect ratio
            }}
          />
          

          
        </div>
      </div>
    </div>
  );
};

export default LatestShorts;
