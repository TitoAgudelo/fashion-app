# React Fashion App

## requiremnts

+ docker installed

The backend can be started as a docker container. Therefore:
    + Install [docker](https://store.docker.com/search?type=edition&offering=community) on your machine.
    + Run the backend with the following command: `docker run -p8080:8080 jans510/homeassignment`
    + If the provided port is already used on your local machine change the port mapping in the command above to a free port.
    + access the backend via http://localhost:{port}

To start the application in development mode locally:

+ run `yarn` to install the dependencies.
+ run `yarn start` to start the application just react app.
+ run `yarn start:docker` to start the application & docker instance.

The boilerplate of this app was created with [create-react-app](https://github.com/facebook/create-react-app).