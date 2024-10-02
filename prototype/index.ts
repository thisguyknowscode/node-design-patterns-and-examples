interface TacoPrototype {
	clone(): TacoPrototype;
	assemble(): void;
}

type BeefTaco = TacoPrototype & { cows: number };
type ChickenTaco = TacoPrototype & { chickens: number };

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

// Usage:
const beeefTacoPrototype = createBeefTaco(5);
const beefTaco1 = beeefTacoPrototype.clone();
const beefTaco2 = beeefTacoPrototype.clone();

const chickenTacoPrototype = createChickenTaco(10);
const chickenTaco1 = chickenTacoPrototype.clone();
const chickenTaco2 = chickenTacoPrototype.clone();

(() => {
	beefTaco1.assemble();
	beefTaco2.assemble();
	chickenTaco1.assemble();
	chickenTaco2.assemble();
})()
