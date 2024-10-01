// Contract for the commands
interface TacoCommand {
	execute(): void;
}

// Command adheres to TacoCommand interface
const cheeseCommand: TacoCommand = {
	execute() {
		console.log("Cheese added");
	}
};

// Command adheres to TacoCommand interface
const sourCreamCommand: TacoCommand = {
	execute() {
		console.log("Sour cream added");
	}
};

// Main controller for the taco commander
const TacoCookControl = {
	commands: { cheeseCommand, sourCreamCommand },

	executeCommand: (concreteCommand: TacoCommand) => {
		concreteCommand.execute();
	}
};

// IIFE for sccope control and cleanliness
(() => {
	TacoCookControl.executeCommand(TacoCookControl.commands.cheeseCommand); // Output: Cheese added
	TacoCookControl.executeCommand(TacoCookControl.commands.sourCreamCommand); // Output: Sour cream added
})()
