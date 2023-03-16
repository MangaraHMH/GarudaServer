const { News } = require("../models");
class Controller {
  static async news(req, res, next) {
    try {
      const news = await News.findAll({
        order: [["id", "ASC"]]
      });
      res.status(200).json(news);
    } catch (error) {
      next(err);
    }
  }

  static async newsById(req, res, next) {
    try {
      const { id } = req.params;
      const news = await News.findByPk(id);
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }

  static async editNews(req, res, next) {
    try {
      const { id } = req.params;
      const { title, image, desc, synopsis } = req.body;

      const foundNews = await News.findByPk(id);

      if (!foundNews) {
        throw { name: "Not Found" };
      }

      await News.update(
        {
          title,
          image,
          desc,
          synopsis,
        },
        { where: { id } }
      );
      res.status(200).json({ message: "Success Updated" });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Controller;
