# TypeScript intro

- Repository: `intro-typescript`
- Mode: `solo`
- Type of Challenge: `learning`
- Duration: `1-2 days`
- Team challenge : `solo`

## Your mission

In recent PHP versions, it's possible to use the `strict types` option.
This allows us to define what type a certain variable is expected to be.
Without strict typing, PHP will auto-convert a variable when needed.
While helpful in some situations, it can also cause some unexpected results.
With `strict typing`, the wrong type will produce an error, notifying the developer and telling what the problem is.

In some cases, we might want similar behaviour in JavaScript.
If that's the case, you can use TypeScript.
Think of TypeScript not as a framework (in fact, it can work together with frameworks like React) but as an extra layer: it allows us to use some extra's on top of JavaScript.
Tools like `webpack` will compile this down to regular JavaScript, so every browser can read it.

> Webpack? Hmm, that rings a bell... 
> We have used other tools that relied on Webpack (Laravel Mix) and have compiled code for React, using their default Webpack config.

The goal of this exercise is not to know everything there is in TypeScript, but to give you an idea of what it can do.

## The mission

In the [starter pack](./Starter-pack), you'll find the provided setup.
Our goal is to convert it to TypeScript.

The src (source) folder contains your source file, that's the one where you will develop.
The public folder will contain the resulting one (after compilation), which will be used by the index file.

> Quick recap: 🌱 represent must-have features, while 🪴 will indicate a doable extra and 🌳 a harder one.

🌱 [Install TypeScript globally on your system](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#installing-typescript)

🌱 Use a [config file](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#writing-a-configuration-file), and adapt it so it will compile from your src folder to the public folder.
Run `tsc` to compile the src JS file. Load the result from the public folder in the index.html.

🌱 Time to look around in the TypeScript possibilities. Some recommendations to read:
- [Basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
- Find some interesting docs? Share it with your peers and coach!

> It's okay if not everything in the docs makes sense at this point. Remember: we're trying to get an idea of what TypeScript can do, not doing a deep dive.

🌱 Switch your source file to a TypeScript file. Since TypeScript behaves more strict than regular JavaScript, we'll need to adapt the code for it to work again.
Check for any errors coming up and fix them.

🌱 We've fixed the errors, is there more we can do?
Let's make the best out of the typing system and add a type to all our variables.
Lastly, what about the functions - anything we should adapt there?
Tip: switch to strict compiling now. This will force you to make as much use of TypeScript as possible.

🪴 Usually, you will use Webpack to compile a bunch of things (the styling, for example) instead of just TypeScript.
Move your application over to compile via webpack.

🪴 Eager to explore more? Build some extra features into the game and try to use some TypeScript features for them.
Need inspiration? Check out [the extra's](../../2.The-Hill/2.Casino-royale/1.Guessing-game.md) at our Casino exercises from the hill.

🌳 Build [one of the other games](../../2.The-Hill/2.Casino-royale) from scratch, using TypeScript.