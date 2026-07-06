import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { UserOrmEntity } from './infrastructure/persistence/user.orm-entity';
import { UserRepositoryImpl } from './infrastructure/persistence/user.repository.impl';
import { UserController } from './infrastructure/controllers/user.controller';
import { CreateUserService } from './application/use-cases/create-user.service';
import { GetUsersService } from './application/use-cases/get-users.service';
import { GetUserService } from './application/use-cases/get-user.service';
import { UpdateUserService } from './application/use-cases/update-user.service';
import { DeleteUserService } from './application/use-cases/delete-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity]), TerminusModule],
  controllers: [UserController],
  providers: [
    { provide: 'UserRepository', useClass: UserRepositoryImpl },
    CreateUserService,
    GetUsersService,
    GetUserService,
    UpdateUserService,
    DeleteUserService,
  ],
})
export class UsersModule {}