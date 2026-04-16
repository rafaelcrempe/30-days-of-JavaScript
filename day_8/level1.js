// 1. Create an empty object called dog

    const dog = {}

// 2. Print the the dog object on the console

    console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof

    dog.name = "Bruce Wayne";
    dog.legs = 4;
    dog.color = "Gold";
    dog.age = 8;
    dog.bark = function(){
        return `woof woof`
};

// 4. Get name, legs, color, age and bark value from the dog object

    console.log(dog.name);
    console.log(dog.legs);
    console.log(dog.color);
    console.log(dog.age);
    console.log(dog.bark());

// 5. Set new properties the dog object: breed, getDogInfo

    dog.breed = "Golden Retriever"
    dog.getDogInfo = function() {
    return `${this.name} is a ${this.age}-year-old ${this.breed}. It has ${this.legs} legs and is ${this.color} in color.`};

    console.log(dog.getDogInfo())