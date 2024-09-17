'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { getTokens } from '@/lib/moralis'; // Assuming this fetches token name, symbol, and logo from Moralis
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'; // Import Framer Motion
import { link } from 'fs';

interface TokenData {
  symbol: string;
  name: string;
  logo?: string; // From Moralis
  usdPrice?: number; // From CoinGecko
  marketCap?: number; // From CoinGecko
  percentChange24h?: number; // From CoinGecko
  links :{
    website : string;
  }
}
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}
export default function CryptocurrencyPage() {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // News State
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch token data from Moralis
        const moralisTokens = await getTokens();

        // Fetch the full list of coins from CoinGecko to get their IDs and symbols
        const coingeckoCoinsListResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/list'
        );

        const coingeckoCoinsList = coingeckoCoinsListResponse.data;

        // Create a map to match symbols with CoinGecko IDs
        const symbolToIdMap = new Map<string, string>();
        coingeckoCoinsList.forEach((coin: any) => {
          symbolToIdMap.set(coin.symbol.toLowerCase(), coin.id);
        });

        // Filter out tokens that have matching CoinGecko IDs
        const matchingTokens = moralisTokens.filter((moralisToken: TokenData) =>
          symbolToIdMap.has(moralisToken.symbol.toLowerCase())
        );

        // Create a list of CoinGecko IDs to fetch market data
        const coingeckoIds = matchingTokens.map(
          (token: TokenData) => symbolToIdMap.get(token.symbol.toLowerCase())
        );

        // Fetch prices and market cap using CoinGecko IDs
        const coingeckoResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: coingeckoIds.join(','), // Join IDs to query CoinGecko by IDs
              order: 'market_cap_desc',
              per_page: coingeckoIds.length, // Fetch as many coins as we have IDs
              page: 1,
              sparkline: false,
            },
          }
        );

        const coingeckoData = coingeckoResponse.data;

        // Combine Moralis and CoinGecko data
        const combinedTokens = matchingTokens.map((moralisToken: TokenData) => {
          const matchingCoin = coingeckoData.find(
            (coin: any) => coin.id === symbolToIdMap.get(moralisToken.symbol.toLowerCase())
          );

          return {
            ...moralisToken,
            usdPrice: matchingCoin?.current_price || 0,
            marketCap: matchingCoin?.market_cap || 0,
            percentChange24h: matchingCoin?.price_change_percentage_24h || 0,
          };
        });

        setTokens(combinedTokens);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching token prices:', error);
        setError('Failed to fetch token data');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Fetch Crypto News
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
        );

        if (response.data && response.data.articles) {
          setNews(response.data.articles.slice(0, 6)); // Get top 6 articles
        } else {
          setNewsError('No news articles found');
        }
        setNewsLoading(false);
      } catch (error: any) {
        console.error('Error fetching crypto news:', error.message);
        setNewsError('Failed to fetch crypto news');
        setNewsLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) return <div className="text-center text-gray-700">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const placeholderGraphData = [
    { time: '00:00', price: 1 },
    { time: '01:00', price: 1.5 },
    { time: '02:00', price: 1.2 },
    { time: '03:00', price: 1.7 },
    { time: '04:00', price: 1.3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Cryptocurrency Dashboard</h1>
      
      {/* Token Cards */}
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {tokens.slice(0, 6).map((token) => (
          
          <motion.a
            key={token.symbol}
            className="bg-gray-900 rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            href={token.links.website}
          >
            <div className="flex items-center space-x-4">
              {/* Token Icon */}
              <img 
                src={token.logo || '/placeholder-icon.png'} // Moralis token logo
                alt={token.name} 
                className="w-12 h-12" 
              />
              {/* Token Name and Symbol */}
              <div>
                <h2 className="text-2xl font-semibold">{token.name}</h2>
                <p className="text-sm text-gray-400">{token.symbol}</p>
              </div>
            </div>
            {/* Price and Percentage Change */}
            <div className="mt-4">
              <p className="text-xl font-bold">${(token.usdPrice ? token.usdPrice.toFixed(2) : '0.00')}</p>
              <p className={`text-sm ${token.percentChange24h && token.percentChange24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {token.percentChange24h}% (24h)
              </p>
            </div>
          </motion.a>
          
        ))}
      </div>
      
      {/* Detailed Token Info with Graphs */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-xl mb-10">
        <h2 className="text-3xl font-semibold mb-6">Detailed Token Information</h2>
        <div className="space-y-6">
          {tokens.map((token) => (
            <div
              key={token.symbol}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700"
            >
              {/* Token Details */}
              <div className="flex items-center space-x-4">
                <img 
                  src={token.logo || '/placeholder-icon.png'} 
                  alt={token.name} 
                  className="w-10 h-10" 
                />
                <div>
                  <h3 className="text-xl font-semibold">{token.name}</h3>
                  <p className="text-sm text-gray-400">{token.symbol}</p>
                </div>
              </div>
              {/* Price */}
              <p className="text-xl font-bold mt-2 md:mt-0">${(token.usdPrice ? token.usdPrice.toFixed(2) : '0.00')}</p>
              {/* Market Cap */}
              <p className="text-sm text-gray-400 mt-2 md:mt-0">Market Cap: ${token.marketCap ? token.marketCap.toLocaleString() : 'N/A'}</p>
              {/* Placeholder Graph */}
              <div className="w-full md:w-40 h-24 mt-4 md:mt-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={placeholderGraphData}>
                    {/* No Grid */}
                    <CartesianGrid stroke="none" />
                    {/* Hide Axes */}
                    <XAxis hide />
                    <YAxis hide />
                    {/* Stock-style Line */}
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#00b894" // Stock-style green color
                      strokeWidth={2}
                      dot={false} // Remove dots
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crypto News Section */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-xl">
        <h2 className="text-3xl font-semibold mb-6">Latest Crypto News</h2>
        {newsLoading ? (
          <div className="text-center text-gray-700">Loading news...</div>
        ) : newsError ? (
          <div className="text-center text-red-500">{newsError}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <motion.a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{article.description ? article.description.slice(0, 100) + '...' : 'No description available.'}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</span>
                    <span className="text-xs text-gray-500">{article.source.name}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}




