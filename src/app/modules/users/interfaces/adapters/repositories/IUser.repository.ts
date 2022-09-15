import UserDomain from '../../../domain/User.domain';
import { UpdateUserDTO, UserDTO } from '../../../dtos/User.dto';

export default interface IUserRepository {
  save(user: UserDTO): Promise<UserDomain>;
  findAll(): Promise<UserDomain[]>;
  find(id: string): Promise<UserDomain>;
  update(id: string, user: UpdateUserDTO): Promise<UserDomain>;
  remove(id: string): Promise<boolean>;
}
