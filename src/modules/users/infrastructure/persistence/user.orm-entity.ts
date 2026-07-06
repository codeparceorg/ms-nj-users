import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length : "100" })
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

  @Column({ length: "50" , nullable: true })
  client_number?: string;

  @Column({ type: "char", length: "1", default: "A" })
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}