"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const result = yield conn.execute(`SELECT AUTODOC, AUTOLIN, AUTOFUE, AUTOHIS ,AUTONUM,AUTONOM|| ' ' ||AUTOAP1|| ' ' ||AUTOAP2 AS NOMPRE_PACIENTE,AUTOFUE|| '-'||AUTODOC|| '-' ||AUTOLIN AS N_ORDEN,AUTOCER,AUTORES,PACMRECER,PACMRERES,AUTOTIP,TIPNOM,AUTOCAC,AUTODES,AUTOEST,ESTNOM,AUTOAUT,CTEDETDES
    FROM basdat.TAB_AUTO,basdat.INPACMRE,basdat.ORTIP, basdat.OREST, basdat.SICTEDET
    WHERE AUTOHIS=PACMREHIS
    AND AUTONUM=PACMRENUM
    AND PACMREIND='P'
    AND AUTOTIP=TIPCOD
    AND AUTOEST=ESTCOD
    AND CTEDETCOD='ESTAUT'
    AND AUTOAUT=CTEDETPAR`);
        return res.json(result.rows);
    });
}
exports.getPosts = getPosts;
