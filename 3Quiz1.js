pyramid = (many) => {
    let result = ''
    for(let i = 0 ; i <= many; i++){
        for (let l = many; l > i; l--){
            result += '  ' 
        }
        for (let l = 0; l < i; l++){
            result += '* ' 
        }
        result += '\n'
    }

    return result
}

console.log(pyramid(5))