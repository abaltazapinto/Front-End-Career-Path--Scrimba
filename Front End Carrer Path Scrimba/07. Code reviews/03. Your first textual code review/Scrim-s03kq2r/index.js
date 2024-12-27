/* Challenge: Give a textual code review.
Provide feedback using code comments. */


/* I beklieve that you should pay closer attention to code indentationand semiclon consistency ;

function getdiscount(code) {
  
  /* Declare the promo with const to prevent reassignement */
  
  let promo = promos.find(promo => promo.code === code)
  console.log(promo)
  
  if (promo !== undefined && promo.isActive) {
    console.log(`You get a ${promo.amount}% discount!`)
    return promo.amount / 100;
}
return 0;
}

function calculatefinalprice(basePrice, userCode) {
  /* you can try to chande this if statement to a ternary operator maybe */
  if (userCode) {
    const discount = getdiscount(userCode)
    const finalPrice = basePrice - basePrice * discount
    return finalPrice;
  } else {
    return basePrice;
  }
}

const promos = [
  { code: 'TOTALLY10', amount: 10, isActive: true },
  { code: 'PLENTY20', amount: 20, isActive: false },
  { code: 'NIFTY50', amount: 50, isActive: true },
  { code: 'WHOPPING75', amount: 75, isActive: true },
  { code: 'YOLOFREE', amount: 100, isActive: false },
]