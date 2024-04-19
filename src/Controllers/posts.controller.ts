import { Controller , Get , Param , Body , Post , Patch , Delete} from "@nestjs/common";
import { PostService } from "../Services/post.service";
import { IPost, IUpdateblePost } from "../Interfaces/IPost";

@Controller()
export class PostController{
    constructor(private readonly postService: PostService) {
    }

    @Get("/posts")
    async getPosts(){
        const posts = await this.postService.getPosts();
        return posts;
    }

    @Get("/post/:id")
    async getPost(@Param() params){
        const post = await this.postService.getPost(params.id);
        return post;
    }

    @Get("/owner/:id")
    async getPostOwner(@Param() params){
        const owner = await this.postService.getPostOwner(params.id);
        return owner;
    }

    @Post("/post")
    async createPost(@Body() body: IPost){
        const newPost = await this.postService.createPost(body.title , body.content , body.user_id);
        return newPost;
    }

    @Patch("/post/:id")
    async updatePost(@Param() params , @Body() body: IUpdateblePost){
        const post = await this.postService.updatePost(params.id , body.title , body.content);
        return post;
    }

    @Delete("/post/:id")
    async deletePost(@Param() params){
        const deletedPost = this.postService.deletePost(params.id);
        return deletedPost;
    }
}