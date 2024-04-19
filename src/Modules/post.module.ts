import { Module } from '@nestjs/common';
import {PostController} from "../Controllers/posts.controller";
import {PostService} from "../Services/post.service";

@Module({
    imports:[],
    controllers:[PostController],
    providers:[PostService]
})
export class PostModule{}