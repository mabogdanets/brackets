module.exports = function check(str, bracketsConfig) {
    let stek = [];
    let bracketsArr = [];
    for (let j of bracketsConfig){
       
        bracketsArr=bracketsArr.concat(j);
    }
    let index;
    for(let i=0; i < str.length; i++){
      
       index = bracketsArr.indexOf(str[i]);
       if (index === -1){
           return false;
       } else if ( index % 2 === 0 ){
           if (bracketsArr[index] === bracketsArr[index+1]
                     && stek.includes(bracketsArr[index])) {
                if ( stek[stek.length-1] === bracketsArr[index] ){
                    stek.pop(); 
                } else {
                    return false;
                }
                        
           } else {
                stek.push(bracketsArr[index+1]);
           }
        } else if(stek[stek.length-1]===str[i]){
            stek.pop();
        } else{
            return false;
        }
              
    }
    if (stek.length===0){
        return true;
    } else{
        return false;
    }
}

//const config2 = [['(', ')'], ['[', ']']];
//check('[(])', config2) // false