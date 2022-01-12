# PE Assignment React JS Project
Original repository can be found here - https://github.com/aditya-sridhar/simple-reactjs-app
## What is the use of this Repo
This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

## Tesing the React app locally
1. Clone the repository
2. Install the dependencies
3. Start the application

```
git clone https://github.com/aditya-sridhar/simple-reactjs-app.git
npm install
npm start
```

## Dockerizing the appliaction and testing with Docker locally
Clone the repository and build the Docker image:

```
git clone https://github.com/davidpinhas/simple-reactjs-app.git
cd simple-reactjs-app/
docker build . -t <ARTIFACTORY_SERVER_NAME>.jfrog.io/docker/pe-node-web-app
docker run -p 8080:3000 -d <ARTIFACTORY_SERVER_NAME>.jfrog.io/docker/pe-node-web-app
```

The application should be accessible through localhost with the assigned port http://localhost:8080/

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /customerlist which ties to *Customers* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
