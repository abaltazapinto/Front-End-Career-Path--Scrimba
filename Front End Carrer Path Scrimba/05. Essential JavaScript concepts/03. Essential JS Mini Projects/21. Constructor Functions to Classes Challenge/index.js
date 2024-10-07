class Character {
    constructor(name, item) {
        this.name = name
        this.item = item
        this.collectedItemsArr = [];
    }
    
    addItem() {
        this.collectedItemsArr.push(this.item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const merlin = new Character('Merlin', 'bucket')
merlin.addItem()
console.log(merlin)