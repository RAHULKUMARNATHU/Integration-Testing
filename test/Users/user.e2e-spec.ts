import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../../src/modules/users/users.module';
import { UsersService } from '../../src/modules/users/users.service';
import { UserEntity } from '../../src/modules/users/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm/dist/common';
import { response } from 'express';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let mockUser = [
    {
      id: '2',
      name: 'nathu',
      email: 'nathu@gmail.com',
      mobile: '9874561239',
      address: 'jharkhand ,Hazaribagh',
    },
  ];

  const mockProductRepository = {
    find: jest.fn().mockResolvedValue({}),
    createUser: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: Date.now(), ...user }),
      ),
    findOne: jest.fn().mockResolvedValue(mockUser),
    // update: jest.fn().mockImplementation(),
    // update: jest
    //   .fn()
    //   .mockImplementation((dto)=>{dto}),
    // assign: jest.fn().mockImplementation(),
    // Object: jest.fn().mockImplementation(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })

      .overrideProvider(getRepositoryToken(UserEntity))
      .useValue(mockProductRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET-ALL)', () => {
    return request(app.getHttpServer()).get('/users').expect(200).expect({});
  });

  it('/users/create-user (CREATE USER)', () => {
    return request(app.getHttpServer())
      .post('/users/create-user')
      .send({
        name: 'nathu',
        email: 'nathu@gmail.com',
        mobile: '9874561239',
        address: 'jharkhand ,Hazaribagh',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.any(Number),
          name: 'nathu',
          email: 'nathu@gmail.com',
          mobile: '9874561239',
          address: 'jharkhand ,Hazaribagh',
        });
      });
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users/1').expect(mockUser);
  });

  // it('/users/id (UPDATE USER)', () => {
  //   return request(app.getHttpServer())
  //     .patch('/users/1')
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).toEqual({
  //         id: '2',
  //         name: 'nathu',
  //         email: 'nathu@gmail.com',
  //         mobile: '9874561239',
  //         address: 'jharkhand ,Hazaribagh',
  //       });
  //     });
  //   // .send({
  //   //   name: 'nathu',
  //   //   email: 'nathu@gmail.com',
  //   //   mobile: '9874561239',
  //   //   address: 'jharkhand ,Hazaribagh',
  //   // })
  //   // .then((response) => {
  //   //   expect(response.body).toEqual({
  //   //     id: expect.any(Number),
  //   //     name: 'nathu',
  //   //     email: 'nathu@gmail.com',
  //   //     mobile: '9874561239',
  //   //     address: 'jharkhand ,Hazaribagh',
  //   //   });
  //   // });
  //   // .expect('hello')
  //   // .expect(202)
  // });
});
