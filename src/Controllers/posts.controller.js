import { postsServices } from "../Services/posts.services";

class PostsController {
  async getAll(req, res) {
    try {
      const posts = await postsServices.getall();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar posts" });
    }
  }

  async getById(req, res) {
    try {
      const postId = req.params.id;
      const post = await postsServices.getById(postId);
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar post" });
    }
  }

  async create(req, res) {
    try {
      const post = await postsServices.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar post" });
    }
  }

  async delete(req, res) {
    try {
      const postId = req.params.id;
      const post = await postsServices.delete(postId);
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao deletar post" });
    }
  }

  async update(req, res) {
    try {
      const postId = req.params.id;
      const post = await postsServices.put(postId, req.body);
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao atualizar post" });
    }
  }
}

export const postsController = new PostsController();