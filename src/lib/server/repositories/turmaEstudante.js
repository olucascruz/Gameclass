import { DB_INFO } from "../../constants";
import { getPool } from "$config/database.js"


export async function adicionarEstudanteATurma(idEstudante, idTurma){
    const db = getPool()

    const query = {
        text: `INSERT INTO ${DB_INFO.tables.estudante_turma} (pontos, id_estudante, id_turma) VALUES ($1, $2, $3)`,
        values:[0, idEstudante, idTurma]
    }

    try{
        const res = await db.query(query)
        return res
    }catch(e){
        console.log(`Não foi possivel criar relação entre aluno e turma. Id aluno: ${idEstudante} id turma: ${idTurma}`)
        throw e;
    }
}