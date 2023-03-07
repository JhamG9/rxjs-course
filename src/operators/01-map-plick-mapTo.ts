import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/* range(1, 5)
  .pipe(map<number, string>((val) => (val * 10).toString()))
  .subscribe(console.log); */

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpCode$ = keyUp$.pipe(map((event) => event.code));
const keyupPluck$ = keyUp$.pipe(pluck("target", "baseURI"));


const keyUpMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
)

keyUp$.subscribe(console.log);
keyUpCode$.pipe().subscribe((code) => console.log("map", code));
keyupPluck$.pipe().subscribe((code) => console.log("pluck", code));
keyUpMapTo$.pipe().subscribe((code) => console.log("mapTo", code));
