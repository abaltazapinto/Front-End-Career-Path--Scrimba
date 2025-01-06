![alt text](<Pasted image.png>)

this is how we query strings

another challenge my answer 

At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
   /bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
   
   /bikeracks?type=available

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
   
   /bikeracks?brand=Thule?


answer form srimba

At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
/bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
/bikeracks?available=true  ==> {available: "true"} (Will be parsed as a string)

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
/bikeracks?brand=thule&numBikes=4