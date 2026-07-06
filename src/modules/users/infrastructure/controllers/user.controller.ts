import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { CreateUserService } from '../../application/use-cases/create-user.service';
import { GetUsersService } from '../../application/use-cases/get-users.service';
import { GetUserService } from '../../application/use-cases/get-user.service';
import { UpdateUserService } from '../../application/use-cases/update-user.service';
import { DeleteUserService } from '../../application/use-cases/delete-user.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';


@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUserService,
    private readonly getUsers: GetUsersService,
    private readonly getUser: GetUserService,
    private readonly updateUser: UpdateUserService,
    private readonly deleteUser: DeleteUserService,
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get('health')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
    ]);
  }

  @Post('save')
  create(@Body() dto: CreateUserDto) {
    return this.createUser.execute(dto);
  }

  @Get()
  findAll() {
    return this.getUsers.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getUser.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.updateUser.execute(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUser.execute(id);
  }
}