// lib/fetchNews.ts

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    source: {
      name: string;
    };
  }
  export async function fetchNews(category: string): Promise<NewsArticle[]> {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API;
    const url = `https://newsapi.org/v2/everything?q=${category}&pageSize=5&apiKey=${apiKey}`;
    console.log(url);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      return data.articles as NewsArticle[];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  