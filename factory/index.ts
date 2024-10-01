// Enumerating posssible taco values for safety
enum TacoEnum {
	beef,
	chicken,
	soft,
}

// interface for our factory products
interface Taco {
	type: TacoEnum
	break(): void
}

// Concrete products adhering to the interface above
const BeefTaco: Taco = {
	type: TacoEnum.beef,
	break: () => console.log(`There's beef everywhere!`)
}

const ChickenTaco: Taco = {
	type: TacoEnum.chicken,
	break: () => console.log(`There's chicken everywhere!`)
}

const SoftTaco: Taco = {
	type: TacoEnum.soft,
	break: () => console.log(`Soft tacos rarely break.`)
}

// Our factory method
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

// Implementation, just using an IIFE to keep scope nice and clean
(() => {
	const beef = TacoFactory(TacoEnum.beef);
	const chicken = TacoFactory(TacoEnum.chicken);
	const soft = TacoFactory(TacoEnum.soft);

	beef.break()
	chicken.break()
	soft.break()
})();
