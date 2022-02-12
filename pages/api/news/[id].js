import news from "../../../src/news.json";

function getProjectById(id) {
  const news_s = news.find((news) => news.id === id);
  return news_s;
}

export default function handler(req, res) {
  getProjectById(req.query.id)
    ? res.status(200).json(getProjectById(req.query.id))
    : res.status(400).send("No news was found.");
}
