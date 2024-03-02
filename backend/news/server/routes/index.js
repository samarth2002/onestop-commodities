const { Router } = require("express");
const chemAnalystNews = require("./chemAnalyst-news/api");
const chemAnalystTrends = require("./chemAnalyst-trends/api");

const ApiRouter = Router();
ApiRouter.use("/chemAnalyst-news",  chemAnalystNews);
ApiRouter.use("/chemAnalyst-trends", chemAnalystTrends);


module.exports = ApiRouter;
