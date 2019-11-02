export const randomNumber = (max) => Math.floor(Math.random() * (max - 1 + 1)) + 1

export const randomPicks = (array, qty = 1) => {
    let picks = []
    let hashTable = []
    for (let i = 0; i < qty; i++) {
        const pick = array[randomNumber(array.length - 1)]
        if (!hashTable[pick.id]) {
            picks.push(pick)
            hashTable[pick.id] = true;
        }
    }
    return picks
}
