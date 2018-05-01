# React Fashion App

Create an application that renders a table(list) of brands received via an external api call. Additionally there should be a detailed info component that gets rendered on double-clicking on one table entry. The detail component should fetch the detail data for the selected brand.

1. Create a wrapper component called Brands. Integrate it in the App.js file with the following functionality:
    + fetch the brands data from the corresponding endpoint.
    + display a `loading...` div before data is received.
    + show a meaningful error message on failed requests.
    + Render a BrandList or a BrandDetail component depending on what should be shown.
2. Create a BrandList component. The compnent should:
    + have a separate CSS file with basic styling.
    + show a list or table of brand data received from the API in the Brands component.
3. Create a BrandDetail component. It should be rendered on double-clicking one brand from the BrandList component. The component should:
    + fetch the brands detail data from the corresponding endpoint
    + display a `loading...` div before data is received
    + show a meaningful error message on failed requests.
    + have a separate CSS file with basic styling suiting to the component.
    + show the brand detail data received from the corresponding api request (see API definition).
    + there has to be a user friendly way to get back to the BrandList component.
4. The API of the backend is defined in the provided api.yaml file in the root directory.
5. The backend can be started as a docker container. Therefore:
    + Install [docker](https://store.docker.com/search?type=edition&offering=community) on your machine.
    + Run the backend with the following command: `docker run -p8080:8080 jans510/homeassignment`
    + If the provided port is already used on your local machine change the port mapping in the command above to a free port.
    + access the backend via http://localhost:{port}
6. Create meaningful git commits of your components. After this, create a zip file of the whole project and sent it back to us.

To start the application in development mode locally:

+ run `yarn` to install the dependencies.
+ run `yarn start` to start the application.

The boilerplate of this app was created with [create-react-app](https://github.com/facebook/create-react-app).