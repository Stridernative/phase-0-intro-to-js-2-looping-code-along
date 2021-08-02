// Code your solutions in this file
    function writeCards(name){
        let array=[]
        for(let i=0;i<name.length;i++){
            let sentence=`Thank you, ${name[i]}, for the wonderful surprise gift!`
            array.push(sentence)
        }
        return array
    }

    function countDown(number){
        let i = number
        while (i >= 0){
            console.log(i--)
        }
    }