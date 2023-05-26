

console.log("main.js loded")

const canvas = document.getElementById("canvas") 
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;


function update (){

    ctx.fillRect(50,50,100,100)
    requestAnimationFrame(update)
}
update()

const hit = document.getElementById("hit")

console.log(hit)


addEventListener(hit,function(e){

console.log(e.code);


} 





)





