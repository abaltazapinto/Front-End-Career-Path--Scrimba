const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adult = ages.filter(age => age > 18)

console.log("adult", (adult))

const children = ages.filter(age => age <= 18 )
console.log("children", children)