import { Controller, Get, Param, Post, Body ,Delete , Patch} from "@nestjs/common";
import {UserService} from "../Services/user.service";
import { IUser } from "../Interfaces/IUser";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService) {
    }

    @Get("/users")
    async getUsers() : Promise<[]>{
        return await this.userService.getUsers();
    }

    @Get("/user/:id")
    async getUser(@Param() params): Promise<object>{
        return await this.userService.getUser(params.id);
    }

    @Post("/user")
    async createUser(@Body() body: IUser): Promise<object>{
        return await this.userService.createUser(body.name , body.email);
    }

    @Delete("/user/:id")
    async deleteUser(@Param() params): Promise<string>{
        return await this.userService.deleteUser(params.id);
    }

    @Patch("/user/:id")
    async updateUser(@Param() params , @Body() body: IUser):Promise<object>{
        const updatedUser =  await this.userService.updateUser(params.id , body.name , body.email);
        return updatedUser;
    }
}