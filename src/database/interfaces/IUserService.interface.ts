import { UserDto } from "../dto/user.dto";

export interface IUserService {
  findUserById(id: number): Promise<UserDto>;
}
