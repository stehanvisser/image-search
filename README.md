# Steps to run project:

STEP 1:

This project needs a Google Custom API KEY.

If you already have a GOOGLE API KEY:

1. Create .env.local file in your main directory.
2. Add in .env.local REACT_APP_GOOGLE_API_KEY='{YOUR API KEY}'.

If you do not have a GOOGLE API KEY you can create:

1. Navigate to https://console.cloud.google.com/ and either log in or create a google account.
2. On the side navigation go to Credentials. To navigate to the Credentials page. https://console.cloud.google.com/apis/credentials
3. On the Credentials page, click Create credentials > API key. The API key created dialog displays your newly created API key.
4. Click Close. The new API key is listed on the Credentials page under API keys. (Remember to restrict the API key before using it in production.)

Notes:
Ensure your Custom API services are active and are using the correct key.
You will have to create Create credentials for your application before the key will be active.

API introduction can be found at https://developers.google.com/custom-search/v1/introduction.

STEP 2:

Install dependencies: (ensure yarn is installed on your computer)

### `yarn install`

STEP 3:

Runs the app in the development mode.

In the project directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

# Test

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Build

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
