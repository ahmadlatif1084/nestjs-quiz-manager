import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'quiz-nest',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};
console.log('__dirname', __dirname);
