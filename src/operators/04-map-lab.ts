import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam nec risus accumsan, maximus maximus diam porta. Sed nec nulla ut ante lacinia scelerisque mollis nec risus. Cras eu fermentum ligula. Nullam dictum, mi nec blandit faucibus, sem elit malesuada magna, at pulvinar dolor felis in ex. Etiam semper augue a vulputate dictum. Morbi pretium ante vel velit finibus, sit amet luctus ligula aliquet. In hac habitasse platea dictumst. Donec consectetur elementum metus, in ullamcorper est feugiat et. Fusce vestibulum tellus neque, vitae pulvinar odio varius eu. Maecenas auctor ante leo. Pellentesque ut dictum ligula. Nunc bibendum consequat dolor.
<br /><br />
Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum tortor tellus, gravida consectetur orci pellentesque in. Nulla facilisi. Pellentesque felis nibh, condimentum eget suscipit eu, sollicitudin nec quam. Quisque odio arcu, accumsan a semper quis, commodo a sem. Maecenas et porttitor ligula. Fusce molestie sapien felis, ac dictum lorem pharetra quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br /><br />
Phasellus quis tortor maximus, dignissim ex nec, imperdiet mi. Nullam vel mauris ultrices, placerat quam quis, dapibus enim. Donec accumsan eu purus a malesuada. Ut porttitor magna eu velit sagittis, sit amet maximus urna euismod. Proin eget est suscipit, imperdiet arcu sed, fermentum quam. Proin aliquet varius dui, sit amet cursus ligula sodales ac. Vestibulum eu malesuada dolor. Vivamus et magna posuere, rutrum ligula eget, ullamcorper tortor. Aenean posuere efficitur lorem ac molestie.
<br /><br />
Quisque placerat ipsum ut mauris mattis luctus. Pellentesque accumsan dui et vehicula fringilla. Maecenas pretium nec quam ac semper. Donec est orci, pharetra non porta at, consequat vitae nibh. Nam id vehicula massa, nec gravida enim. Mauris volutpat maximus urna vel cursus. Nulla convallis eu orci non tempor. Morbi lobortis orci enim, et ornare ligula fringilla sed. Maecenas erat elit, feugiat eu venenatis sed, tristique et urna. Pellentesque cursus justo vitae volutpat gravida.
<br /><br />
Duis at mauris pretium, imperdiet ex id, consequat justo. Ut fringilla elit in odio porta eleifend. Aenean diam leo, convallis vitae nulla quis, congue ultrices tortor. Vestibulum mauris dui, porttitor eget dignissim a, rutrum dignissim magna. Donec pellentesque, magna nec vestibulum vulputate, orci eros tempus risus, sit amet scelerisque nisl neque nec eros. Proin nulla velit, aliquet sit amet nibh id, sollicitudin feugiat mauris. Curabitur eget aliquet est, sit amet accumsan lacus. Nunc vulputate, tortor sed fringilla dapibus, ante urna pellentesque neque, et ullamcorper tortor massa in ligula. Donec pulvinar nisi eget bibendum tempor. Quisque eget felis aliquam, dapibus eros ac, laoreet erat. Ut nec odio eu sem semper eleifend et a odio.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) =>{
    const { scrollTop, scrollHeight, clientHeight  } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


// Streams
const scroll$ = fromEvent(document, "scroll");
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    //map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
