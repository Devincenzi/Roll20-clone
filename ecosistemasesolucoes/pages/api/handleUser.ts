import type { NextApiRequest, NextApiResponse } from 'next';
import { executeQuery } from "../../lib/db";
import crypto from 'crypto';

const secret = process.env.SECRET;

const md5hash = crypto.createHmac('sha256', secret);

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const action    = req.body.action;
    const idusuario = req.body.idusuario;
    const nome      = req.body.nome;
    const usuario   = req.body.usuario;
    const password  = req.body.password;

    const hashed = md5hash.update(password).digest('hex');
    // console.log(hashed);
    let query = ``

    switch(action){
        case 'insert':
            query = `INSERT INTO usuarios SET nome='${nome}', login='${usuario}', senha='${hashed}'`;
        break;

        case 'update':
            query = `UPDATE usuarios SET nome='${nome}', login='${usuario}' WHERE idusuario='${idusuario}'`;
        break;

        case 'updatePassword':
            query = `UPDATE usuarios SET senha='${hashed}' WHERE idusuario='${idusuario}'`;
        break;
        
        default:
            console.log('erro');
        break;
    }

    try{
        res.status(200).json({results: await executeQuery(query)});
    }catch(e: any){
        res.status(500).json({error: e.message})
    }
}