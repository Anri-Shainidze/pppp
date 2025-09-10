import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterService } from './register/register.service';
import { RegisterController } from './register/register.controller';
import { ValidateService } from './validate/validate.service';
import { ValidateController } from './validate/validate.controller';
import { PagesService } from './pages/pages.service';
import { PagesController } from './pages/pages.controller';

@Module({
  imports: [],
  controllers: [AppController, RegisterController, ValidateController, PagesController],
  providers: [AppService, RegisterService, ValidateService, PagesService],
})
export class AppModule {}
