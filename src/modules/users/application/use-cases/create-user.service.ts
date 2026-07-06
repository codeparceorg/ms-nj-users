import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/entities/user.entity';
import type { UserRepository } from '../../domain/repositories/user.repository';



@Injectable()
export class CreateUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) { }

  async execute(dto: CreateUserDto): Promise<User> {
    const user = User.create(dto.full_name, dto.email, dto.phone || '', dto.address || '', dto.city , dto.avatar_url );
    return this.userRepo.save(user);
  }
}