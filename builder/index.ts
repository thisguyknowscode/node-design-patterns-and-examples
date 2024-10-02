interface BuiltTaco {
	name: string;
	price: number;
	description: string;
}

interface TacoBuilder {
	setName(name: string): TacoBuilder
	setPrice(price: number): TacoBuilder;
	setDescription(description: string): TacoBuilder;
	build(): BuiltTaco;
};

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

(() => {
	const tacoBuilder = createTacoBuilder();
	const newTaco = tacoBuilder
		.setName('Crazy Taco')
		.setPrice(12.99)
		.setDescription('Taco with lettuce, tomato, and sawdust.')
		.build();

	console.log(newTaco);
})()
