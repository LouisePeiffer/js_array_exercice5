// Exo 1
let variable1 = 'salut'
let tabExo = ['string1', 2, 5, variable1, Boolean([4])]
console.log(tabExo);

// Exo 2
console.log(tabExo.length);

//Exo 3
tabExo.pop()
console.log(tabExo);

//Exo 4
tabExo.shift()
console.log(tabExo);

//Exo 5
tabExo.push('Joyeux', 'Lundi')
console.log(tabExo);

//Exo 6
tabExo.unshift('Bon', 'Weekend', 'les amis')
console.log(tabExo);

//Exo 7
tabExo.reverse()
console.log(tabExo);

//Exo 8
let boiteA = ['objet1', 'objet2']
alert(boiteA)
boiteA.unshift('objet3')
alert(boiteA)
boiteA.push('objet4', 'objet5', 'objet6')
alert(boiteA)
alert(boiteA.length)
boiteA.splice(0,3)
alert(boiteA)
boiteA.push('objet7')
alert(boiteA)
alert(boiteA.length)
alert(boiteA.splice(2, 2))