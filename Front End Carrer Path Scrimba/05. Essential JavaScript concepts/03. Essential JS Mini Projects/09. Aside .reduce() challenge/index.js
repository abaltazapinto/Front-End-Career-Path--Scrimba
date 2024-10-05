// reduce function learning


const grades = [ 75,83,66,43,55,99,87,16,89,64,70,80,94,77,66,73]

const average = grades.reduce((a,c) => (a+c)/2, 0)

console.log(average)