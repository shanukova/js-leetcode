const findWords = function(words) {
    // first row:
    const row1 = row('qwertyuiop', words)
    const row2 = row('asdfghjkl', words)
    const row3 = row('zxcvbnm', words)
    
    return [row1, row2, row3].filter(row => row.length > 0).flat()
};


const row = (row, words) => {
    const wordsCounts = []
    const resultCounts = []
    const finalResult = []

    for (let i = 0; i < words.length; i++) {
        resultCounts[i] = 0
        words[i].toLowerCase().split('').forEach(letter => {
            if (row.includes(letter)) {
                resultCounts[i]++
            }
        })
        wordsCounts.push(words[i].length)
    }

    // console.log(wordsCounts, resultCounts)

    for (let i = 0; i < words.length; i++) {
        if (wordsCounts[i] === resultCounts[i]) {
            finalResult.push(words[i])
        }
    }
    return finalResult
}


console.log(findWords(["Hello","Alaska","Dad","Peace"]))

console.log(findWords(['omk']))