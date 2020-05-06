//let e const 
{
    var a = 2
    let b = 3
}

console.log(a) //funciona
console.log(b) //nãoa aparece por conta do escopo

//template string - string com crases
const templateString = `essa é uma template string ${a}`

//Destructuring 
const [l, e, ...tras] = Coder // l = 'c' e = 'o' e assim sucessivamente

