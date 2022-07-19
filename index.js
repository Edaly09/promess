const myCondition = () =>{

    return new Promise ((resolve, rejet) =>{
        const holySpritGhost = 100

        setTimeout(()=>{
            if (holySpritGhost >= 100){
                resolve("Hello")
            }
            else{
                rejet("je salut personne ")
            }

        })
       
    })
}

const myConditionGeneral = async ()=>{

    try {
        console.log(" j'execute mon code")
        console.log("j'attends 2 secondes")
        const answer = await myCondition()
        console.log(answer)
    } catch (error) {
        console.log("failed")
        console.log(error)
    }
}
 myConditionGeneral();
