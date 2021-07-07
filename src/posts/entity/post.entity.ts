import { TwBaseEntity } from 'src/hastags/commons/base.entity';
import { UserEntity } from 'src/users/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends TwBaseEntity {
  @Column()
  text: string;

  @Column('json')
  images: string[];

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  @Column('uuid', { name: 'author_id', nullable: false })
  authorId: string;

  @Column({ name: 'like_count', default: 0 })
  likeCount: 0;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: 0;

  @Column('json')
  hashtags: string[];

  @Column('json')
  mentions: Mention[];

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'original_post_id', referencedColumnName: 'id' })
  originalPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'reply_to_post_id', referencedColumnName: 'id' })
  replyTo: PostEntity;
}

class Mention {
  name: string;
  id: string;
}
