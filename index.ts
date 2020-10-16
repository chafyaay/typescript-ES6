// Import stylesheets
import './style.css';

const gen=generator();
gen.next();
gen.next();
let  h=hello()


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter 
${h}



</h1>`;

//generator

function *generator(){
  yield 1;
  hello("1")
   yield 2;
  hello("2")
   yield 3;
  hello("3")
}

function hello(id?){
  return "hello"+id;
}