const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/menu", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5920703&lng=77.30300489999999&restaurantId=608589&submitAction=ENTER",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

          Accept: "application/json",
          Referer: "https://www.swiggy.com/",
          Origin: "https://www.swiggy.com",
        },
      },
    );

    res.json(response.data);
  } catch (error) {
    console.log("ERROR MESSAGE:", error.message);

    if (error.response) {
      console.log("STATUS:", error.response.status);
      console.log("DATA:", error.response.data);
    }

    res.status(500).json({
      error: "Failed to fetch menu",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
