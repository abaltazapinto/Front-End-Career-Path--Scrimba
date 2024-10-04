
const speedWarning = (speedLimit, speed) => (speedLimit > speed) ? `You are going above the speed Limit ${speedLimit}` : `You are going at ${speed} mph!`

console.log(speedWarning(65, 55))