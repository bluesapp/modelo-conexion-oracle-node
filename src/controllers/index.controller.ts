import {Request, Response} from 'express';


export function indexConnection(req: Request, res: Response){
    return res.json('Ruta index esta funcionando desde controllers ')
}