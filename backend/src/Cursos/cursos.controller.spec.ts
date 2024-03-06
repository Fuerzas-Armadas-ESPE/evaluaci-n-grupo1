import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module'; // Import your AppModule

describe('CursosController (e2e)', () => {
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

  it('/cursos (GET)', () => {
    return request(app.getHttpServer())
      .get('/cursos')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/cursos (POST)', () => {
    return request(app.getHttpServer())
      .post('/cursos')
      .send({
        nombreCurso: 'Nuevo Curso',
        descripcion: 'Descripción del nuevo curso',
        temas: [],
      })
      .expect(201)
      .expect('Content-Type', /json/);
  });

  it('/cursos/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/cursos/65e34649bdbf79b23733fdb0')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/cursos/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/cursos/65e34649bdbf79b23733fdb0')
      .send({
        nombreCurso: 'Curso Actualizado',
        descripcion: 'Descripción actualizada del curso',
        temas: [],
      })
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/cursos/:id (DELETE)', () => {
    return request(app.getHttpServer()).delete('/cursos/1').expect(500);
  });

  it('/cursos/:cursoId/temas/:temaId (POST)', () => {
    return request(app.getHttpServer())
      .post('/cursos/65e34649bdbf79b23733fdb0/temas/65e345c1bdbf79b23733fdac')
      .expect(201);
  });

  it('/cursos/:id/temas (GET)', () => {
    return request(app.getHttpServer())
      .get('/cursos/1/temas')
      .expect(500)
      .expect('Content-Type', /json/);
  });
});
