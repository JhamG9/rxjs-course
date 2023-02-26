import { count, Observable, Observer, subscribeOn } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete: "),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // Crear un contador, 1,2,3,4,5,6...
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
    console.log("interalo destruido");
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// Unir observables para terminarlos en cadena
subs1.add(subs2)
subs1.add(subs3)

setTimeout(() => {
    // Este unsubscribe termina a todos
    subs1.unsubscribe();
  /* subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe(); */

  console.log("Completado timeout");
}, 3000);
