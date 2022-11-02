import { executeQuery } from "../../../lib/db";
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import crypto from 'crypto';

const secret = process.env.SECRET;


export default async function (req, res){
    const { usuario, password} = req.body;

    const md5hash = crypto.createHmac('sha256', secret);
    const hashed = md5hash.update(password).digest('hex');
    // md5hash.update(password);

    console.log(hashed);

    const query = `SELECT * FROM usuarios WHERE login='${usuario}' AND senha='${hashed}'`;
    const [data] = await executeQuery(query);

    console.log(data);
    if(data){
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12,
            username: 'andre',
        }, secret);

        const serialized = serialize("loginJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
            path: "/"
        });

        res.setHeader("Set-Cookie", serialized);
        res.status(200).json({results: data});
    }else{
        res.status(400).json({message: "we've got an error bro..."});
    }
}