
# YC Prep - Interview simulation app
**Open-sourcing Anima's prep-questions app**

TL;DR: Back in 2018, when our YC interview was scheduled, we built an app to help us prepare for it. Having many companies asking us for a simulated interview, we've decided to rebuild the app using Anima and open-source it ❤️
[Here's a live link](https://yc-prep.netlify.app).

More tips on how to get into YCombinator are [available here](https://medium.com/@avishic/how-to-nail-your-yc-interview-e3a4d12871f3).

[![](https://animaapp.s3.amazonaws.com/sample-files/yc-prep/yc-prep-cover.png)](https://yc-prep.netlify.app)

## So what is this code?
**Most of the code was written automatically with [Anima](https://www.animaapp.com), given a Figma design.**
[Anima](https://animaapp.com/?utm_source=anima-github&utm_campaign=yc-prep&utm_medium=anima-github) converts design into code. In this case, Figma to React.

Starting from a boilerplate code with all the design means you fast forward to implementing the logic.
We are doing a lot to produce developer-friendly code. The result is not yet perfect, but it requires minor tweaks in most cases.

Behind the scenes, we do A LOT of heavy lifting to give you super clean code. To name a few of the algorithms:
* Automatically name elements (i.e 'vector567' -> 'Share icon')
* Automatically tagging elements (i.e detecting h1 / h2 / p, etc.)
* Restructure the DOM as close as possible to what a human engineer would with multiple heuristics
* Unwrapping divs and creating flex-based divs for a tidy layout
* Merging elements
* Removing redundant elements
* Extract CSS variables & classes for repeating colors, fonts, and more
* Find repeating DOM patterns and refactor to components
And much more.

In addition, we run **visual tests** with headless browsers on multiple resolutions, to make sure you're getting pixel-perfect code.

Again, **our code is not perfect** yet, as you will see in this repo.<br>
However, the fact that it is **10x faster to build products is mind-blowing** for everyone building an MVP, POC or even a demo.

## How to run this code
In Terminal, go into the project's folder, then -
```
npm install
npm start
```
Open [http://localhost:1234](http://localhost:1234).

## How to deploy to netlify
If you don't have netlify:
```
npm install netlify-cli -g 
```
Once you do have netlify:
```
npm run build
netlify deploy
```
Choose `dist` folder when asked, and you'll get a link on netlify to your React app.
Use `netlify deploy --prod` when you have the final result, and get a sharable link.

Any feedback is welcome 🙏
