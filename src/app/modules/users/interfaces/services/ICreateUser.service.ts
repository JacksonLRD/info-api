import { UserDTO } from '../../dtos/User.dto';

export default interface ICreateUserService {
  execute(user: UserDTO): Promise<UserDTO>;
}
