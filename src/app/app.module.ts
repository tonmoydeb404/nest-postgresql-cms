import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from 'src/auth/auth.module';
import { AccessTypeGuard } from 'src/auth/guards/access-type.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { PermissionGuard } from 'src/auth/guards/permission.guard';
import { BlogModule } from 'src/blog/blog.module';
import { CustomersModule } from 'src/customers/customers.module';
import { EmployeesModule } from 'src/employees/employees.module';
import { ProjectsModule } from 'src/projects/projects.module';
import { ServicesModule } from 'src/services/services.module';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './controllers/app.controller';
import { GlobalModule } from './global.module';
import { AppService } from './services/app.service';

@Module({
  imports: [
    GlobalModule,
    AuthModule,
    UsersModule,
    EmployeesModule,
    CustomersModule,
    ProjectsModule,
    ServicesModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: AccessTypeGuard },
    { provide: APP_GUARD, useClass: PermissionGuard },
  ],
  exports: [],
})
export class AppModule {}
