import { Injectable } from "@nestjs/common";

const db = require("../db");

@Injectable()
export class UserService {
  async getUsers(): Promise<[]> {
    const users = await db.query("SELECT * FROM users");
    return users.rows;
  }

  async getUser(id: number): Promise<object> {
    const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    if (user) {
      return user.rows[0];
    } else {
      return null;
    }
  }

  async createUser(name: string, email: string): Promise<object> {
    const newUser = await db.query("INSERT INTO users (name , email) VALUES ($1 , $2) RETURNING *",
      [name, email]);
    return newUser.rows[0];
  }

  async deleteUser(id: number): Promise<string> {
      const deletedUser = await db.query("DELETE FROM users * WHERE id = $1 RETURNING *", [id]);
      return deletedUser;
  }

  async updateUser(id: number, name: string, email: string): Promise<object> {
    const updatedPost = await db.query("UPDATE users set name = $1 , email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]);
    return updatedPost.rows[0];
  }
}