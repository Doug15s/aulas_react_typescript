import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar a API.');
    }    
};

const getById = () => { };

const create = () => { };

const updateById = () => { };

const deleteById = () => { };

export const TarefasService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById    
};