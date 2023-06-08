# Url Word Count
A simple API for retrieving a word count from a given URL.

## Setup

### Install Prerequisites
#### Docker
Install docker following the instructions found here: https://docs.docker.com/engine/install/

Check your installation by running the command in the Terminal/Command Prompt:
```
docker --version
```
If this command does not return a version number, try restarting the Terminal/Command Prompt, if that does not work try restarting your computer.
If this still doesn't solve your issue, carefully reinstall following the steps found on the website.

#### Docker Compose
Some distributions of docker do not install Docker Compose.

Check your installation by running the command in the Terminal/Command Prompt:
```
docker compose version
```
If this command does not return a version number, follow the instructions found here to install Docker Compose: https://docs.docker.com/compose/install/

### Install URL Word Count
- If you have Git installed, clone the repository into your desired install location.
- If you do not have Git installed, you can download the repository as a zip file, place it in your desired install location, and unzip it.

## Usage

### Start the API
Open the Terminal/Command prompt, and navigate to the install directory.
```
cd install/location/DPB-synanetics-technical
```
Run the following command:
```
docker compose up -d --build
```
This will build the Docker image, and start two Docker containers in the background.
The API will now be listening on port 3000 of the install machine. 

Alternatively you can start the API in dev mode by running the following command:
```
docker compose --file docker-compose-dev.yml up -d --build
```
This will start an additional Docker container with a simple node.js app exposed on port 3001.
This app has a few pages with known word counts, a path that returns a JSON instead of HTML, and a path that does not return anything.
This app can be used to test the word count calculation of the API, as well as the error handling.

### Stop the API
Open the Terminal/Command prompt, and navigate to the install directory.
```
cd install/location/DPB-synanetics-technical
```
Run the following command:
```
docker compose down
```
This will remove the running Docker containers, and their shared network.

Alternatively if you started the app in dev mode run the following command:
```
docker compose --file docker-compose-dev.yml down
```
