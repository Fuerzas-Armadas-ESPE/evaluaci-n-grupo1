import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Curso, CursoDocument } from './curso.model';
import { Tema, TemaDocument } from 'src/Temas/temas.model';

@Injectable()
export class CursosService {
    constructor(
        @InjectModel(Curso.name) private cursoModel: Model<CursoDocument>,
        @InjectModel(Tema.name) private temaModel: Model<TemaDocument>
    ) { }

    async createCurso(cursoData: Curso): Promise<Curso> {
        const nuevoCurso = new this.cursoModel(cursoData);
        return nuevoCurso.save();
    }

    async getCursos(): Promise<Curso[]> {
        return this.cursoModel.find().exec();
    }

    async getCurso(id: string): Promise<Curso> {
        return this.cursoModel.findById(id).exec();
    }

    async updateCurso(id: string, cursoData: Curso): Promise<Curso> {
        return this.cursoModel.findByIdAndUpdate(id, cursoData, { new: true }).exec();
    }

    async deleteCurso(id: string): Promise<Curso> {
        return this.cursoModel.findByIdAndDelete(id).exec();
    }

    //añadimos un tema a un curso
    async addTemaToCurso(cursoId: string, temaId: string): Promise<CursoDocument> {
        const tema = await this.temaModel.findById(temaId);
        const curso = await this.cursoModel.findById(cursoId) as CursoDocument;

        if (!curso.temas) {
            curso.temas = [];
        }
        curso.temas.push(tema._id);
        await curso.save();
        return curso;
    }

    // obtienes datos de los temas dentro del curso seleccionado
    async findTemasByCurso(cursoId: string): Promise<any[]> {
        const curso = await this.cursoModel.findById(cursoId);
        const temasIds = curso.temas as Types.ObjectId[];

        // Buscar la información completa de los temas activos
        const temasPromises = temasIds.map(temaId =>
            this.temaModel.findOne({ _id: temaId, estado: 'activo' }).lean().exec()
        );

        const temas = await Promise.all(temasPromises);

        // Filtrar temas para quitar temas null (no activos)
        const temasActivos = temas.filter(tema => tema !== null);

        return temasActivos;
    }






}
