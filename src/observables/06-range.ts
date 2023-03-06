import { asyncScheduler, of, range } from "rxjs";

const src$ = range(1,5, asyncScheduler);
//const src$ = range(1,5); ejecutar de forma sincrona

console.log("Inicio");
src$.subscribe(console.log);
console.log("Fin");
