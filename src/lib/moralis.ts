
export async function getTokens() {
  const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
  const tokenAddresses = [
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    '0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  ];

  console.log('Environment Variables:', process.env);
  console.log('MORALIS_API_KEY:', process.env.MORALIS_API_KEY);

  const formattedAddresses = tokenAddresses
    .map((address) => `addresses=${address}`)
    .join('&');

  const url = `https://deep-index.moralis.io/api/v2/erc20/metadata?chain=eth&${formattedAddresses}`;

  try {
    if (!apiKey) {
      throw new Error('MORALIS_API_KEY is missing in environment variables.');
    }
    const response = await fetch(url, {
      headers: {
        'X-API-Key': apiKey,
      },
    });

    if (!response.ok) {
      console.error('Error response from API:', response.status, response.statusText);
      throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching token data:', error.message);
    throw error;
  }
}
