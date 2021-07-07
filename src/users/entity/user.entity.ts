import { Column, Entity } from 'typeorm';
import { TwBaseEntity } from '../../commons/base.entity';

@Entity('users')
export class UserEntity extends TwBaseEntity {
  @Column('varchar', { length: 30, nullable: false, unique: true })
  username: string;
  @Column('varchar', { length: 50 })
  name: string;
  avatar: string;
  @Column('varchar', { length: 240 })
  bio: string;
  @Column('varchar', { name: 'follower_count', default: 0 })
  followerCount: string;
  @Column('varchar', { name: 'followee_count', default: 0 })
  followeeCount: string;
  @Column('bool', { default: false })
  verified: boolean;
}
