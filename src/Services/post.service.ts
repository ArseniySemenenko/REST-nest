import {Injectable} from "@nestjs/common";

const db = require("../db");

@Injectable()
export class PostService {
    async getPosts(){
        const posts = await db.query("SELECT * FROM posts");
        return posts.rows;
    }

    async getPost(id: number) {
        const post = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
        return post.rows[0];
    }

    async getPostOwner(id: number) {
        const post = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
        const user_id = post.rows[0].user_id;
        const user = await db.query("SELECT * FROM users WHERE id = $1", [user_id]);
        return user.rows[0];
    }

    async createPost(title: string, content: string, user_id: number) {
        const newPost = await db.query("INSERT INTO posts (title , content , user_id) VALUES ($1 , $2 , $3) RETURNING *",
            [title, content, user_id]);
        return newPost.rows[0];
    }

    async updatePost(id: number, title: string, content: string) {
        const post = await db.query("UPDATE posts set title = $2, content = $3 WHERE id = $1 RETURNING *",
            [id, title, content]);
        return post.rows[0];
    }

    async deletePost(id: number) {
        const deletedPost = await db.query("DELETE FROM posts WHERE id = $1 RETURNING *",
        [id]);
        return deletedPost.rows[0];
    }
}