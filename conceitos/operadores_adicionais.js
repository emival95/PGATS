/**

 

  -- decremento

  ++ incremento

 

  ?  ternário

  

 */

 

// incremento

let pesoDoDog = 10

console.log(pesoDoDog)

 

pesoDoDog++

console.log(pesoDoDog)

 

// decremento

let pesoDoTutor = 100

console.log(pesoDoTutor)

 

pesoDoTutor--

console.log(pesoDoTutor)

 

// ternário

// const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio' 

 

const pesoDoDogOperadorTernario = 21

const porte = pesoDoDogOperadorTernario <= 10 // se if

              ? 'pequeno'

              : pesoDoDogOperadorTernario <= 20 // senao se / else if

              ? 'médio'

              : 'grande' // senao

 

              // pesoDoDogOperadorTernario <= 10 ? 'pequeno' : pesoDoDogOperadorTernario <= 20 ? 'médio' : 'grande'

 

              // console.log(porte)

 

{/* <condicao> ? <acao se verdadeiro> : <acao se falso> */}