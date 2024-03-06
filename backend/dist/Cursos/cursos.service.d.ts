/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Curso, CursoDocument } from './curso.model';
import { TemaDocument } from '../Temas/temas.model';
export declare class CursosService {
    private cursoModel;
    private temaModel;
    constructor(cursoModel: Model<CursoDocument>, temaModel: Model<TemaDocument>);
    createCurso(cursoData: Curso): Promise<Curso>;
    getCursos(): Promise<Curso[]>;
    getCurso(id: string): Promise<Curso>;
    updateCurso(id: string, cursoData: Curso): Promise<Curso>;
    deleteCurso(id: string): Promise<Curso>;
    addTemaToCurso(cursoId: string, temaId: string): Promise<CursoDocument>;
    findTemasByCurso(cursoId: string): Promise<any[]>;
}
