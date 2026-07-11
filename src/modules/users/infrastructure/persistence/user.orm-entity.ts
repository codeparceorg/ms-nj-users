import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: "100" })
  full_name!: string;

  @Column({ unique: true, length: "100" })
  email!: string;

  @Column({ length: "20" })
  phone?: string;

  @Column({ length: "200" })
  address?: string;

  @Column({ length: "100" })
  city!: string;

  @Column({ length: "200", default: "https://avatars.githubusercontent.com/u/91216501" })
  avatar_url!: string;

  @Column({
    length: 20,
    unique: true,
    default: () =>
      "'CT-' || LPAD(nextval('client_number_seq')::TEXT, 9, '0')",
  })
  client_number!: string;

  @Column({ type: "char", length: "1", default: "A" })
  status!: string;

  @CreateDateColumn( )
  createdAS2t!: Date;

  @UpdateDateColumn( {name:"updated_at"})
  updatedAt!: Date;

  @Column({ name: 'auth_token_id', type: 'uuid' })
  auth_token_id!: string;
}