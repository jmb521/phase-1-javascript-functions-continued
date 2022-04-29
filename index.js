function wrapAdjective(flair = "*") {

    return function(special = "special") {
        return `You are ${flair}${special}${flair}!` 
    }
}


