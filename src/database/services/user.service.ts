import { Repository } from "typeorm";
import { DatabaseModule } from "../index";
import { IUserService } from "../interfaces/IUserService.interface";
import { User } from "../entities/user.entity";
import { UserDto } from "../dto/user.dto";

class UserService implements IUserService {
  static get userRepository(): Repository<User> {
    return DatabaseModule.getRepository(User);
  }
  
  async findUserById(id: number): Promise<UserDto | null> {
    const user = await UserService.userRepository.findOne({ where: { id } });
    if(!user) return null;

    return { id: user.id, name: user.name, email: user.email };
  }
}

export const userService = new UserService();