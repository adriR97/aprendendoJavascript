//preenchendo o array com o var
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log("Utilizando o var")
funcs[2]()
funcs[8]()

//preenchendo o array com o let
const funcs2 = []

for(let i = 0; i < 10; i++){
    funcs2.push(function(){
        console.log(i)
    })
}

console.log("\nUtilizando o let")
funcs2[2]()
funcs2[8]()