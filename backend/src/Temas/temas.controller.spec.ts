import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module'; // Import your AppModule

describe('TemasController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], // Import your AppModule for the tests
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/Temas (GET)', () => {
    return request(app.getHttpServer())
      .get('/Temas')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/Temas (POST)', () => {
    return request(app.getHttpServer())
      .post('/Temas')
      .send({
        nombreTema: 'Nuevo Tema',
        estado: 'Activo',
        instructor: 'Juan Perez',
      })
      .expect(201)
      .expect('Content-Type', /json/);
  });

  it('/Temas/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/Temas/65e34576bdbf79b23733fda8')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/Temas/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/Temas/65e36222dbac72afb5db84cc')
      .send({
        nombreTema: 'Tema Actualizado',
        estado: 'Inactivo',
        instructor: 'Pedro Ramirez',
      })
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/Temas/:id (DELETE)', () => {
    return request(app.getHttpServer()).delete('/Temas/1').expect(500);
  });
});
