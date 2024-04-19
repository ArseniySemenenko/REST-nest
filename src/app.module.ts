import { Module } from '@nestjs/common';
import {UserModule} from "./Modules/user.module";
import {PostModule} from "./Modules/post.module";

@Module({
    imports:[UserModule , PostModule],
})
export class AppModule {}