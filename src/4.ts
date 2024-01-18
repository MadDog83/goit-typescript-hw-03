class Key {
    private signature: string;
  
    constructor() {
      this.signature = Math.random().toString();
    }
  
    public getSignature(): string {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    public getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];
  
    constructor(key: Key) {
      this.door = false; // The door starts closed by default
      this.key = key;
      this.tenants = [];
    }
  
    public abstract openDoor(key: Key): void;
  
    public comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
      } else {
        console.log("The door is closed");
      }
    }
  }
  
  class MyHouse extends House {
    public openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Door opened successfully");
      } else {
        console.log("The key doesn't match");
      }
    }
  }
  
  // Usage example:
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  // Log the tenants array to see if the person is inside the house
  console.log(house['tenants']);

  export {};