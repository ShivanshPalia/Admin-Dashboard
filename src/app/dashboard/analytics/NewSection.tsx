
// "use client";
// import React, { useEffect, useState } from "react";
// import { fetchNews } from "@/lib/fetchnews";

// // Import Swiper styles
// import 'swiper/css';

// interface NewsArticle {
//   title: string;
//   description: string;
//   url: string;
//   source: {
//     name: string;
//   };
// }

// const NewsSection: React.FC = () => {
//   const [articles, setArticles] = useState<NewsArticle[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const getNews = async () => {
//       try {
//         const news = await fetchNews("stocks");
//         setArticles(news);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getNews();
//   }, []);

//   return (
//     <div className="w-full bg-gradient-to-br from-[#1f1f1f] to-[#3b3b3b] rounded-lg p-6 shadow-lg animate-fadeIn transition-opacity duration-700 ease-in-out">
//       <h2 className="text-2xl font-bold text-white mb-6 text-center">Latest Analytics News</h2>
//       {loading ? (
//         <div className="flex justify-center items-center h-48">
//           <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
//         </div>
//       ) : articles.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {articles.map((article, index) => (
            
             
//             <div
//               key={index}
//               className="bg-[#2d2d2d] hover:bg-[#393939] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out group"
//             >
//               <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-500 transition-colors">
//                 {article.title}
//               </h3>
//               <p className="text-gray-300 mb-4">{article.description}</p>
//               <a
//                 href={article.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 underline hover:text-blue-300 transition-colors"
//               >
//                 Read more
//               </a>
//             </div>
           
//           ))}
//         </div>
//       ) : (
//         <p className="text-white">No news articles available.</p>
//       )}
//     </div>
//   );
// };

// export default NewsSection;


"use client";
import React, { useEffect, useState } from "react";
import { fetchNews } from "@/lib/fetchnews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper/modules";
import {Navigation} from "swiper/modules"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: {
    name: string;
  };
}

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const news = await fetchNews("stocks");
        setArticles(news);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-[#1f1f1f] to-[#3b3b3b] rounded-lg p-8 shadow-lg transition-opacity duration-700 ease-in-out">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Latest Analytics News
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : articles.length > 0 ? (
        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            navigation={true} // Enable navigation
            pagination={{ clickable: true }} // Enable pagination
            modules={[Pagination, Navigation]} // Use the modules as functions
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="w-full h-auto"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#2d2d2d] hover:bg-[#393939] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out group">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-300 transition-colors"
                  >
                    Read more
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-white text-center">No news articles available.</p>
      )}
    </div>
  );
};

export default NewsSection;


