// criar Promises
const myPromise = new Promise((resolve, reject) => {
const nome = "João";

if (nome === "João"){
  resolve('Usuario encontrado.');
}else{
    reject('Usuario não encontrado.');
}
})

myPromise.then((data) => {
    console.log(data)

}).catch(() => {
console.log (`ERRO:: ${error}`)
})

//Encademaneto de .then's

myPromise.then((data) => {
    return data.toLowerCase()
}).then((stringModified) => {
    console.log(stringModified)
})

// Resolvendo várias promises em 'race' - a partir da que for resolvida

const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
     console.log('P1 ok! Timeout');   
    }, 2000)
})
    const p2 = new Promise((resolve, reject)=>{
        console.log('P2 ok!')
    })
    const p3 = new Promise((resolve, reject)=>{
        console.log('P3 ok!')
    })
    // const resolveRace = Promise.race([p1,p2,p3]).then(() => {
    //     console.log()
    // })

    const resolveRace = Promise.all([p1,p2,p3]).then((data) => {
        console.log(data)
    })

   //fetch API - API do GitHub
   const userName = 'BrunoCampxs';
   
   fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept:'application/vnd.github.v3+json'
    },
    // body: {
    //     name:"name",
    //     last:"last"
    // }
   }).then((response) =>{
    return response.json();
   }).then((data) => {
   console.log(data)
   }).catch((error)=>{
   console.log(error)
   })

   https://api-dattebayo.vercel.app/docs#clans
