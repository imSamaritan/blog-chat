# front-end-env
- A webpack project setup environment.
- A project setup that is packed with webpack loaders and plugins that are required for it to run.
- This environment uses @babel and @babel preset as well with babel loader to compile down the next generation JS eg ES6|ES2015. 
- Css is kept on JavaScript module on development mode but it is spilt out on the Production mode and automatically linked on the views.

# Developer focus
- ./src dir is any developers focus room when you create and expose your own assets, JavaScript modules, sass modules inside sass dir, views inside views dir.

# Download
- You can donwload the setup repo, then that will require to run few terminal command to get it prepared for you. 

# Terminal usage command lines after downloading it
- To prepare the environment (mac - linux or windows)

> sudo npm install | npm install

- To run development mode, to compile down the ./dist (only)

> sudo npm run dev | npm run dev

- To serve dist or project to a default web browser 

> sudo npm run serve | npm run serve

= (Serve command works on Production build and Development build) 
PORT=8080 (127.0.0.1:8080)

= For production that will be for ensuring the test of a final build.
= Both environment modes, spilt out source maps for debugging purpose.

# Important note
- Note that a development mode is using the --watch mode from webpack to watch all ./src files on the save of a developer.
- So Developing mode using this env, requires commands ran at same time in different terminal windows.

= One for dev & One for Serve - unless it build command

....More will be configured and released
..Imsamaritam
