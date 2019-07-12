//Importamos la propiedad app desde la clase App

require('dotenv').config();

console.log(process.env.USER)

import { App } from './app';

async function main() {
    const app = new App();
    await app.listen();

}
main();