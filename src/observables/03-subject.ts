import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete: "),
};

const intervalo$ = new Observable((subs) => {

  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/**
 * 1 - Casteo multiple / muchas suscripciones estan sujetas a este subject
 * 2 - tambien es un observer
 * 3 - Net, error y complete
 */
const subject$ = new Subject();
const subscriptionIntervalo = intervalo$.subscribe(subject$);

/* const subs2 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
const subs1 = intervalo$.subscribe(rnd => console.log('subs2', rnd)); */

const subs2 = subject$.subscribe(observer);
const subs1 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscriptionIntervalo.unsubscribe();
}, 3500);

// vacunacioncovid19@compensarsalud.com
// Enviar carnet de vacunación por lado, nombres, y numero de documento
