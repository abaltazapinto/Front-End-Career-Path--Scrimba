we have the handleItemClick(event) 
    is given immediately the clicked item , in the line 60 of our js.


    {
        "console.log('clicked item'. itemName)"
    }

the ocmplete function :
```
function handleItemClick(event) {
    const button = event.target;
    const itemName = button.textContent.split(':')[0].trim();
    const items = workItems.find(item => item.name === item.name);
    const item = items.length > 0 ? items[0] : null;
    itemCounts[itemName]++
    console.log('Clicked item', itemName);
    console.log('Selected items:', itemCounts);
}

``` 

in this funtion we can see that we implemmented the new function split and with that we can sperate the string until the ( : ) then star at the first item [0] if we start at the [1] we would have the price of the item because it is the seconde part of the string 

in the case of this example 
```
    { 
        wash Car: $10
    }
```
we would get the second part $10;

Now i want to create beneath the Task , the name os the tas + th count + the remove button. Then in the total i would do the count * the price of the task .
