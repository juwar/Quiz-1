pyramid = (many) => {
    let result = ''
    for(let i = 0 ; i < 5; i++){
        for (let l = many; l > i; l--){
            result += '* ' 
        }
        result += '\n'
    }

    return result
}

console.log(pyramid(5))