import { Request, Response } from 'express';

import { connect } from '../database';

export async function getPosts(req: Request, res: Response): Promise<Response> {
   const conn = await connect();
   const result = await conn.execute(
    `SELECT AUTODOC, AUTOLIN, AUTOFUE, AUTOHIS ,AUTONUM,AUTONOM|| ' ' ||AUTOAP1|| ' ' ||AUTOAP2 AS NOMPRE_PACIENTE,AUTOFUE|| '-'||AUTODOC|| '-' ||AUTOLIN AS N_ORDEN,AUTOCER,AUTORES,PACMRECER,PACMRERES,AUTOTIP,TIPNOM,AUTOCAC,AUTODES,AUTOEST,ESTNOM,AUTOAUT,CTEDETDES
    FROM basdat.TAB_AUTO,basdat.INPACMRE,basdat.ORTIP, basdat.OREST, basdat.SICTEDET
    WHERE AUTOHIS=PACMREHIS
    AND AUTONUM=PACMRENUM
    AND PACMREIND='P'
    AND AUTOTIP=TIPCOD
    AND AUTOEST=ESTCOD
    AND CTEDETCOD='ESTAUT'
    AND AUTOAUT=CTEDETPAR`
    )
    
    
  return res.json(result.rows);

}