import { Colaborador } from './../colaborador/colaborador.model';

export interface Setor {
    
    id: number;
    descricao: string;
    colaboradores: Colaborador[];

}