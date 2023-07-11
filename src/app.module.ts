import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import configuration from './shared/config/configuration';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { UserAuthGuard } from './user/guards';

@Module({
  imports: [
    SharedModule,
    UserModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    {
      provide: APP_GUARD,     
      useClass: UserAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
