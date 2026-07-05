import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('MS_DB_HOST'),
        port: config.get<number>('MS_DB_PORT'),
        username: config.get('MS_DB_USER'),
        password: config.get('MS_DB_PASSWORD'),
        database: config.get('MS_DB_NAME'),
        ssl: false,
        autoLoadEntities: true,
        synchronize: true, 
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}