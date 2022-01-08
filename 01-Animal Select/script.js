const animal = {
    species:"dog",
    name:"kont",
    legs:4,
    color:"brown",
    age:4,
    bark:function() {
        return "woof woof"
    },
    calcAge:function() {
        this.age>=2 ? this.humanAge=(2*10.5)+(this.age-2)*4
        :this.humanAge =10.5
        
        return this.humanAge;
    },
    getAnimalInfo :function(){
        return `my name is ${this.name} , i am a ${this.breed}.i am ${this.age} years old in human years which is ${this.calcAge()}`
    },
   
  
    
}
console.log(animal)
animal.breed="kangal"
console.log(animal.getAnimalInfo())
console.log(animal.calcAge())
