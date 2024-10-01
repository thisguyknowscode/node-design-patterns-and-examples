## The Factory Method Pattern

The factory pattern creates objects like, well, a factory. If you walked up to a Taco factory and asked for a type of taco, you should receive back that type of taco. If you tell the factory "beef", you'll get a beef taco. If you tell it "chicken" then you'll get a chicken taco. Let's look at some code below:

Let's start by helping prevent taco type mismatches by enumerating them.

```
enum TacoEnum {
	beef,
	chicken,
	soft,
}
```
We define an interface to describe our concrete products with a contract.

```
interface Taco {
	type: Tacos
	break(): void
}
```
We need some contrete products, so we can set those up now that we have our interface and enum.
```
// Just one example; the code creates a few of these
const BeefTaco: Taco = {
	type: TacoEnum.beef,
	break: () => console.log(`There's beef everywhere!`)
}
```
Finally, here's our factory. When supplying an approved taco type, you recieve your concrete product. In this case, a delicious taco that may or may not break.
```
const TacoFactory = (type: TacoEnum): Taco => {
	switch (type) {
		case TacoEnum.beef:
			return BeefTaco;
		case TacoEnum.chicken:
			return ChickenTaco;
		case TacoEnum.soft:
			return SoftTaco;
		default:
			throw new Error('Please pick an approved Taco type from the following: beef, chicken, or soft.')
	}
}
```
Finally, lets break some tacos.
```
(() => {
	const beef = TacoFactory(TacoEnum.beef);
	const chicken = TacoFactory(TacoEnum.chicken);
	const soft = TacoFactory(TacoEnum.soft);

	beef.break() // There's beef everywhere!
	chicken.break() // There's chicken everywhere!
	soft.break() // Soft tacos rarely break.
})();
```
Enjoy your taco!