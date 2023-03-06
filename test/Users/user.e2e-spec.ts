import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../../src/modules/users/users.module';
import { UsersService } from '../../src/modules/users/users.service';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let usersService = {
    findAll: () => 'This action returns all users',
    findOne: () => 'This action returns a #1 user',
    update: () => 'This action updates a #2 user',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect('This action returns all users');
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/id')
      .expect('This action returns a #1 user');
  });

  it('/users (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/users/id')
      .expect('This action updates a #2 user');
  });
});
