import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]", value),
  error: (error) => console.warn("Error [obs] ", error),
  complete: () => console.info("Completado [obs]")
};

// const obs$ = Observable.create();
const obs$ = new Observable((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error

  const a = undefined;
  a.nombre = "Jham";

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});


obs$.subscribe(observer);

/* obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error', error),
    () => console.info('Completado')
); */
