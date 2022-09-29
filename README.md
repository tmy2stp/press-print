
READ ME: 

Welcome to phase 1 of my project. Please excuse rough code, I sacrificed a lot of tidiness and decorum to get a working project! It was a much larger undertaking than I anticipated, if anything, this project in its current phase exists as a proof of concept for what I believe is an interesting idea within a fertine niche that has struggled to adapt to the market. I am happy with where I am in two weeks, however I am excited to build on this idea.

Phase 1: Proof Of Concept - hosts pin their location on the map, map populates and basic functionality is demonstrated for a user

Phase 2: Create a host portal, establish MySQL / more robust backend. Figure out how to link the auth process with an actual network, that would be able to manage an encrypted upload. I would also like to transition to Google Maps API, which I believe is a more secure and intuitive system.

Phase 3: Bring exclusively mobile. Establish secure network connecting the host portal, the upload from the user, to the actual printer. Establish how document transfer would actually happen. Map out a series of possible customer interactions. Regroup re: the market - who is using this? Possibly narrow in on one sector to launch the product.

September 28th, 11AM:
The auth process is for some reason, after two coordinate inputs, causing the map to crash. I am not sure why. I hope to get this figured out on Sep 28 ahead of our demo day. 

To Install API localhost 8000:
Npm i install
Node index.js

To Install press_print:
Npm i axios, mailbox, install, firebase
Npm start 

Mapbox API key is in the axios request and doesn't require reloading. Thanks!






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
