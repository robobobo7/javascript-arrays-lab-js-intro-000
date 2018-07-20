// Add your functions and code here
function destructivelyAppendKitten (name){
  kittens.push(name)
}
destructivelyAppendKitten('Petunia');

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
destructivelyPrependKitten('Petunia')

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}
