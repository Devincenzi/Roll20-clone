import { executeQuery } from "../../lib/db";

export default async function handler(req, res){
    const query = req.body.query;
    const singleRegister = req.body.singleRegister;

    try{
        let data = '';
        if(singleRegister)
            [data] = await executeQuery(query);
        else
            data = await executeQuery(query);

        res.status(200).json({results: data});
    }catch(e){
        res.status(500).json({error: e.message})
    }
}