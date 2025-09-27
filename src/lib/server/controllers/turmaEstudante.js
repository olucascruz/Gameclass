import {listaTurmaPorCodigoBD} from "../repositories/turma.js";
import {adicionarEstudanteATurma} from "../repositories/turmaEstudante.js";


export default class TurmaEstudanteController{

    async registrarEstudanteEmTurma(idEstudante, codigoTurma){
        let turma = null;
        try{    
            turma = await listaTurmaPorCodigoBD(codigoTurma)
        }catch{
            throw "Turma não existe"
        }
        try{
        await adicionarEstudanteATurma(idEstudante, turma.id)
        console.log("Aluno adicionado a turma")
        }catch(err){
            console.log("Erro ao adicionar aluno a turma")
            console.log(err)
        }
    }

}