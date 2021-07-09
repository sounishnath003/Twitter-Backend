import { EntityRepository, Repository } from 'typeorm';
import { PasswordEntity } from './entity/password.entity';

// creating a password repository for auth module
@EntityRepository(PasswordEntity)
export class PasswordRepository extends Repository<PasswordEntity> {}
