count = (alfabet) => {
    const vokal = ['a', 'i', 'u', 'e', 'o']
    let many = alfabet.length
    let searching = ''
    let result = 0

    for(let i = 0; i < many; i++){
        searching = alfabet.search(vokal[i])

        if(searching > 0){
            result++
        }

    }

    return result
}

console.log(count('programmer'))