const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/pexels", async (req, res) => {
  const { query, per_page } = req.query;

  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`,
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001bc5440db709f491fb84aa5d279e748d5",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
