const dreamHoliday = {
    destination: 'Indonesia',
    activity: 'Kayaking',
    accommodation: 'Hotel near the sea',
    companion: 'MySelf'
}

/* 
Challenge
1. Complete the object dreamHoliday with whatever
   information is true for you. Feel free to add 
   extra properties or change the existing ones. 
2. Destructure the object and use the individual 
   variables to log out one or more sentences about 
   your dream holiday. 
   
E.g. "I would love to go to Austin, Texas to visit the Tesla HQ. 
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/

const { destination, activity, accommodation, companion } = dreamHoliday

document.write(`I would love to go back to <b>${destination}</b>, and do it a lot of <b>${activity}</b> and stay again in the hotel that i've stayed <b>${accommodation}</b>!!!! And with the best company <b>${companion}</b>`)