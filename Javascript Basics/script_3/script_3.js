var floors = prompt("How many floors do you want ?", "<enter number>")

function createPyramid(floors){
    for (let i = 1; i < floors; i++){
        let str = ' '.repeat(floors-i);
        let str2 = '*'.repeat(i*2-1)

        console.log(str + str2 + str);
    }
}

createPyramid(floors);

