import { CursosService } from './cursos.service';
import { Curso } from './curso.model';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
    createCurso(cursoData: Curso): Promise<Curso>;
    getCursos(): Promise<Curso[]>;
    getCurso(id: string): Promise<Curso>;
    updateCurso(id: string, cursoData: Curso): Promise<Curso>;
    deleteCurso(id: string): Promise<Curso>;
    addTemaToCurso(cursoId: string, temaId: string): Promise<import("./curso.model").CursoDocument>;
    findTemasByCurso(id: string): Promise<any[]>;
}
