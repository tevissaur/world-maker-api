import { Article } from "../models";

class UtilsService {
  async createDefaultArticle(document) {
    await Article.create({
      subject: document._id,
      subjectModel: "World",
      title: document.name || document.title,
      body: document.description,
    });
  }
}

export default new UtilsService();
