const axios = require("axios");

exports.handler = async (event) => {
  const { query, per_page } = event.queryStringParameters;

  const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`;

  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.PEXELS_API_KEY}`,
    },
  });

  return {
    statusCode: response.status,
    body: JSON.stringify(response.data),
  };
};
