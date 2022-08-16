import axios from 'axios';
import executeQuery from '../../../lib/db';

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
        const result = await executeQuery(req.body.query);
        console.log( "ttt",result );
    } catch ( error ) {
        console.log( error );
    }
  
};