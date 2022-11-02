// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { executeQuery } from "../../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const singleRegister = req.body.query;
  let query = req.body.query;
  
  // console.log(query);
  
  try{
    // let data = '';
    // if(singleRegister)
    //     [data] = await executeQuery(query);
    // else
    //     data = await executeQuery(query);

    // // console.log(await executeQuery(query));

    res.status(200).json({results: await executeQuery(query)});
  }catch(e: any){
      res.status(500).json({error: e.message})
  }
}
