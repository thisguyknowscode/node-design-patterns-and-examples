## The Command Pattern

The Command Pattern encapsulates a request as an object, letting you parameterize clients with different requests. In this case, we're commanding our taco cook to add a few toppings.

The command interfact defines a common contract to run all taco commands.

```
interface TacoCommand {
	execute(): void;
}
```
Here is our example command object.
```
const cheeseCommand: TacoCommand = {
	execute() {
		console.log("Cheese added");
	}
};
```
The taco controller will execute the requested taco command,
```
const TacoController = {
	commands: { cheeseCommand, sourCreamCommand },

	executeCommand: (concreteCommand: TacoCommand) => {
		concreteCommand.execute();
	}
};
```
Finally, we can add our toppings. 
```
// IIFE for sccope control and cleanliness
(() => {
	TacoController.executeCommand(TacoController.commands.cheeseCommand); // Output: Cheese added
	TacoController.executeCommand(TacoController.commands.sourCreamCommand); // Output: Sour cream added
})()
```
Enjoy your taco!