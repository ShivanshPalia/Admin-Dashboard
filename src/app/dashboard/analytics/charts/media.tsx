// "use client"
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faFacebook,
//   faYoutube,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// type SocialMedia = {
//   icon: any;
//   color: string;
//   name: string;
//   percentage: number;
// };

// const SocialMediaContainer: React.FC = () => {
//   const [socialMediaData, setSocialMediaData] = useState<SocialMedia[]>([]);

//   useEffect(() => {
//     const socialMedia = [
//       { icon: faInstagram, color: "#E1306C", name: "Instagram" },
//       { icon: faFacebook, color: "#1877F2", name: "Facebook" },
//       { icon: faYoutube, color: "#FF0000", name: "YouTube" },
//       { icon: faTwitter, color: "#1DA1F2", name: "Twitter" },
//     ];

//     // Generate random data only on the client
//     const dataWithRandom = socialMedia.map((media) => ({
//       ...media,
//       percentage: Math.floor(Math.random() * 100), // Generate random percentage
//     }));

//     setSocialMediaData(dataWithRandom);
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div className="bg-[#3b3b3b] p-4 rounded-lg w-full max-w-md mx-auto">
//       {socialMediaData.map((media, index) => {
//         const lineWidth = `${media.percentage}%`;

//         return (
//           <div key={index} className="flex items-center mb-4">
//             {/* Icon */}
//             <FontAwesomeIcon
//               icon={media.icon}
//               size="2x"
//               style={{ color: media.color }}
//               className="mr-4"
//             />
//             {/* Line */}
//             <div
//               className="flex-grow h-1 bg-gray-500 mr-4"
//               style={{ width: lineWidth }}
//             ></div>
//             {/* Percentage */}
//             <span className="text-white">{media.percentage}%</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SocialMediaContainer;


"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type SocialMedia = {
  icon: any;
  color: string;
  name: string;
  percentage: number;
};

const SocialMediaContainer: React.FC = () => {
  const [socialMediaData, setSocialMediaData] = useState<SocialMedia[]>([]);

  useEffect(() => {
    const socialMedia = [
      { icon: faInstagram, color: "#E1306C", name: "Instagram" },
      { icon: faFacebook, color: "#1877F2", name: "Facebook" },
      { icon: faYoutube, color: "#FF0000", name: "YouTube" },
      { icon: faTwitter, color: "#1DA1F2", name: "Twitter" },
    ];

    // Generate random data
    const dataWithRandom = socialMedia.map((media) => ({
      ...media,
      percentage: Math.floor(Math.random() * 100),
    }));

    setSocialMediaData(dataWithRandom);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1f1f1f] to-[#3b3b3b] p-6 rounded-lg w-full max-w-lg mx-auto shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Social Media Engagement</h2>
      {socialMediaData.map((media, index) => {
        const lineWidth = `${media.percentage}%`;

        return (
          <div
            key={index}
            className="flex items-center mb-5 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {/* Icon */}
            <div
              className="bg-white p-2 rounded-full"
              style={{ backgroundColor: media.color }}
            >
              <FontAwesomeIcon
                icon={media.icon}
                size="2x"
                className="text-white"
              />
            </div>
            {/* Line */}
            <div className="flex-grow mx-4">
              <div
                className="relative w-full h-2 rounded-full bg-gray-600"
                style={{
                  background: `linear-gradient(90deg, ${media.color}, transparent)`,
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: lineWidth,
                    backgroundColor: media.color,
                  }}
                ></div>
              </div>
            </div>
            {/* Percentage */}
            <span className="text-white font-bold text-lg">{media.percentage}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaContainer;
