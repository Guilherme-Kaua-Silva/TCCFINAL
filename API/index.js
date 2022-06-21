import 'dotenv/config'
import usuarioController from '../API/src/controller/UsuarioController.js'
import NutriController from '../API/src/controller/NutriController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

//configuração dos endpoints
server.use(usuarioController);
server.use(NutriController);

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))