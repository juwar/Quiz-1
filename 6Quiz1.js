count = (price, diskon, distance, tax) => {
    let format = 'Rp. '
    let total = 0
    if (diskon != 'False') {
        switch (diskon) {
            case 'ARKAFOOD5':price
                if (price >= 50000) {
                    total = price * (50 / 100)
                    if (total > 50000) {
                        total = price - 50000
                    } else {
                        total = price - total
                    }
                }
                break
            case 'DITRAKTIRDEMY':
                if (price >= 25000) {
                    total = price * (60 / 100)
                    if (total > 30000) {
                        total = price - 30000
                    } else {
                        total = price - total
                    }
                }
                break
            default:
                break
        }
    } else {
        total += price
    }

    if (distance > 1.5) {
        total += 5000
        distance = distance - 1.5
        if (distance % 1 == 0 ){
            distance = distance
        } else {
            distance = distance.toFixed(0)
            distance = distance / 1
        }
        total += distance * 3000
    } else {
        total += 5000
    }

    if (tax == 'True') {
        total += price * (5 / 100)
    }

    return format.concat(total)
}

console.log(count(75000, 'ARKAFOOD5', 5, 'False'))
console.log(count(25000, 'DITRAKTIRDEMY', 7, 'True'))