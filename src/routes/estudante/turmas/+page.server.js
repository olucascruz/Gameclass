import { error, fail, redirect } from "@sveltejs/kit"

import TurmaEstudanteController from "$lib/server/controllers/turmaEstudante"
import UsuarioController from "$lib/server/controllers/usuario"

const turmaEstudanteController = new TurmaEstudanteController()
const usuarioController = new UsuarioController()

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const codigo = data.get("codigo");
    // valida e salva no banco
    const perfil_raw = cookies.get("perfil");
	const dataUser = JSON.parse(session_raw);
	const usuario = await usuarioController.buscaPorLogin(dataUser.login)

    console.log("usuario id:", usuario.id)
    console.log("codigo turma:",codigo)

    // turmaEstudanteController.registrarEstudanteEmTurma(usuario.codigo, codigo)
    return { success: true };
  }
};