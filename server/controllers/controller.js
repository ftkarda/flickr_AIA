const axios = require("axios");

class Controller {
  static async getFeeds(req, res, next) {
    try {
      const { tags } = req.query;
      const response = await axios.get(
        `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
