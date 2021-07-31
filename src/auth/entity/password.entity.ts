import { TwBaseEntity } from 'src/commons/base.entity';
import { UserEntity } from 'src/users/entity/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('passwords')
export class PasswordEntity extends TwBaseEntity {
  @Column()
  userId: string;

  @JoinColumn()
  @OneToOne(() => UserEntity)
  user: UserEntity;

  @Column('varchar', { nullable: false })
  password: string;
}
