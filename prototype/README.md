## The Prototype Pattern

Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

Contract for the prototypes. These are the common methods we'll be using.
```typescript
interface TacoPrototype {
	clone(): TacoPrototype;
	assemble(): void;
}
```
Types for the different tacos. We're adding a property to each 
```typescript
type BeefTaco = TacoPrototype & { cows: number };
type ChickenTaco = TacoPrototype & { chickens: number };
```
These are our prototype creaters that adhere to the types we just made.
```typescript
const createBeefTaco = (cows: number): BeefTaco => ({
	cows,
	clone: () => createBeefTaco(cows),
	assemble: () => console.log(`Creating a giant taco with the meat from ${cows} cows.`),
});

const createChickenTaco = (chickens: number): ChickenTaco => ({
	chickens,
	clone: () => createChickenTaco(chickens),
	assemble: () => console.log(`Creating a giant taco with the meat from ${chickens} chickens.`),
});
```
Finally, we can create our prototypes and assemble our tacos. We must be pretty hungry!
```typescript
(() => {
	const beefTacoPrototype = createBeefTaco(5);
	const beefTaco1 = beefTacoPrototype.clone();
	const beefTaco2 = beefTacoPrototype.clone();

	const chickenTacoPrototype = createChickenTaco(10);
	const chickenTaco1 = chickenTacoPrototype.clone();
	const chickenTaco2 = chickenTacoPrototype.clone();

	beefTaco1.assemble();
	beefTaco2.assemble();
	chickenTaco1.assemble();
	chickenTaco2.assemble();
})()
```