## The Builder Pattern

The builder pattern is a way to create complex objects step-by-step. Instead of creating the entire object at once, you start with a basic version and add parts to it one by one. This makes it easier to control the final result and avoid mistakes.

Interface for the taco we're building:
```typescript
interface BuiltTaco {
	name: string;
	price: number;
	description: string;
}
```
Interface for the builder itself
```typescript
interface TacoBuilder {
	setName(name: string): TacoBuilder
	setPrice(price: number): TacoBuilder;
	setDescription(description: string): TacoBuilder;
	build(): BuiltTaco;
};
```
This is the main builder function. Returning the builder itself is the key since now you can call these functions in sequence instead of all at once.
```typescript
function createTacoBuilder(): TacoBuilder {
	let taco: BuiltTaco = {
		name: '',
		price: 0,
		description: '',
	};

	return {
		setName(name: string): TacoBuilder {
			taco.name = name;
			return this;
		},
		setPrice(price: number): TacoBuilder {
			taco.price = price;
			return this;
		},
		setDescription(description: string): TacoBuilder {
			taco.description = description;
			return this;
		},
		build(): BuiltTaco {
			return taco;
		},
	};
}
```
Finally, we use the taco builder to create our taco.
```typescript
(() => {
	const tacoBuilder = createTacoBuilder();
	const newTaco = tacoBuilder
		.setName('Crazy Taco')
		.setPrice(12.99)
		.setDescription('Taco with lettuce, tomato, and salsa.')
		.build();

	console.log(newTaco);
})()
```
