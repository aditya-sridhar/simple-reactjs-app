# PE Assignment Express Project
## What is the use of this Repo
This Project is a Simple Express Project
The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

## Tesing the Express app locally
1. Clone the repository
2. Install the dependencies
3. Start the application

```
git clone https://github.com/aditya-sridhar/simple-reactjs-app.git
npm install
node server.js
```

## Dockerizing the appliaction and testing with Docker locally
Clone the repository and build the Docker image:

```
git clone https://github.com/davidpinhas/simple-reactjs-app.git
cd simple-reactjs-app/
docker build . -t <ARTIFACTORY_SERVER_NAME>.jfrog.io/docker/pe-node-web-app
docker run -p 8080:8080 -d <ARTIFACTORY_SERVER_NAME>.jfrog.io/docker/pe-node-web-app
```

The application should be accessible through localhost with the assigned port http://localhost:8080/
