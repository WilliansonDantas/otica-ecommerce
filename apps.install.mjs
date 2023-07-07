import { execSync } from "child_process";

console.log("Implementando o banco de dados");

const commandDocker = "docker-compose down && docker-compose up -d";
const commandLog = "docker-compose logs -f";
execSync(commandDocker, { encode: "utf8" });
const outPutLog = execSync(commandLog, { encode: "utf8" });
console.log(outPutLog.toString());

console.log("Instalando dependências do Back-end");

const commandBackend = "cd back-end && npm install";
const outPutBack = execSync(commandBackend, { encode: "utf8" });
console.log(outPutBack.toString());

console.log("Instalando dependências do Front-end");

const commandFrontend = "cd front-end && npm install";
const outPutFront = execSync(commandFrontend, { encode: "utf8" });
console.log(outPutFront.toString());

console.log("Dependências instaladas");
