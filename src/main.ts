import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from './model/User';
import { StringUtils } from './model/utils/StringUtils';
import * as cron from 'node-cron';
import { AppDataSource } from './data-source';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Ducky API')
  .setDescription('The Ducky API description')
  .setVersion('1.0')
  .addTag('Ducky')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  const userTest = new User();
  userTest.birthDate = new Date();
  userTest.firstname = 'Marc';
  userTest.lastname = 'Petitdemange';
  console.log(StringUtils.wishABirthday(userTest));
});

AppDataSource.initialize()
  .then()
  .catch((error) => console.log(error));
