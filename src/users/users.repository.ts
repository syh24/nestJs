import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from './entities/user.entity'

@EntityRepository()
export class UsersRepository extends Repository<UserEntity> {}