import { postsRepository } from "../Repositories/post.repository.js";

class PostsServices{

    async getAll(id) {
    try {
        const posts = await postsServices.getall();
        res.json(posts);
    }catch (error) {

        console.error (error);
    }
};

    async getById(id, dados) {
    try {

        const postsId = req.params.id
        const posts = await postsServices.getById(postsId);
        res.json(posts);
    }catch (error) {

        console.error (error);
    }
};

    async post (id, ) {
    try {
        const posts = await postsServices.create(req.body);
         res.status(201).json(posts);
    }catch (error) {
        console.error (error);
    }
};

    postsRouter.delete("/:id", async (req, res) => {
        const postsId = req.params.id
    try {
        const posts = await postsServices.delete(postsId);
         res.status(201).json(posts);
    }catch (error) {
        console.error ("erro ao deletar posts");
    }
};

    async put(id,dados){
        const posts = await postsRepository.putposts(id, dados)
        return posts;
};

}

export const postsServices = new PostsServices();