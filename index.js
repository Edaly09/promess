// const myCondition = () =>{

//     return new Promise ((resolve, rejet) =>{
//         const holySpritGhost = 10

//         setTimeout(()=>{
//             if (holySpritGhost >= 100){
//                 resolve("Hello")
//             }
//             else{
//                 rejet("je ne salut personne ")
//             }

//         }, 2000)
       
//     })
// }

// const myConditionGeneral = async ()=>{

//     try {
//         console.log(" j'execute mon code")
//         console.log("j'attends 2 secondes")
//         const answer = await myCondition()
//         console.log(answer)
//     } catch (error) {
//         console.log("failed")
//         console.log(error)
//     }
// }
//  myConditionGeneral();

// ***************TEMPERATURE *******************************

 const temeratureOfday = () =>{

    return new Promise ((resolve, rejet) =>{
        const temperature = 11

        setTimeout(()=>{
            if (temperature <= 10){
                resolve("Il fait froid")
            }
            else{
                rejet("il fait chaud ")
            }

        }, 4000)
       
    })
}

const temps = async ()=>{

    try {
        console.log(" j'execute mon code")
        console.log("j'attends 4 secondes")
        const resultat = await temeratureOfday()
        console.log(resultat)
    } catch (error) {
        console.log("blabla")
        console.log(error)
    }
}
temps();
