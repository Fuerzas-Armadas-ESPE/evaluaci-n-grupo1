import { TemasService } from './temas.service';
import { Tema } from './temas.model';
export declare class TemasController {
    private readonly TemasService;
    constructor(TemasService: TemasService);
    createTema(TemaData: Tema): Promise<Tema>;
    getTemas(): Promise<Tema[]>;
    getTema(id: string): Promise<Tema>;
    updateTema(id: string, TemaData: Tema): Promise<Tema>;
    deleteTema(id: string): Promise<Tema>;
}
