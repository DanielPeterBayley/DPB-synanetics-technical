# Url Word Count
A simple API for retrieving a word count from a given URL.

## Setup

### Install Prerequisites
#### Docker
Install docker following the instructions found here: https://docs.docker.com/engine/install/

Check your installation by running the command:
```shell
docker --version
```
If this command does not return a version number, try restarting the Terminal/Command Prompt, if that does not work try restarting your computer.
If this still doesn't solve your issue, carefully reinstall following the steps found on the website.

#### Docker Compose
Some distributions of docker do not install Docker Compose.

Check your installation by running the command:
```shell
docker compose version
```
If this command does not return a version number, follow the instructions found here to install Docker Compose: https://docs.docker.com/compose/install/

### Install URL Word Count
- If you have Git installed, clone the repository into your desired install location.
- If you do not have Git installed, you can download the repository as a zip file, place it in your desired install location, and unzip it.

## Usage

### Start the API
Open the Terminal/Command prompt, and navigate to the install directory.
```shell
cd /install/location/DPB-synanetics-technical
```
Run the following command:
```shell
docker compose up -d --build
```
This will build the Docker image, and start two Docker containers in the background.
The API will now be listening on port 3000 of the install machine. 

Alternatively you can start the API in dev mode by running the following command:
```shell
docker compose --file docker-compose-dev.yml up -d --build
```
This will start an additional Docker container with a simple node.js app exposed on port 3001.
This app has a few pages with known word counts, a path that returns a JSON instead of HTML, and a path that does not return anything.
This app can be used to test the word count calculation of the API, as well as the error handling.

### Stop the API
Open the Terminal/Command prompt, and navigate to the install directory.
```shell
cd install/location/DPB-synanetics-technical
```
Run the following command:
```shell
docker compose down
```
This will remove the running Docker containers, and their shared network.

Alternatively if you started the app in dev mode run the following command:
```shell
docker compose --file docker-compose-dev.yml down
```

### Calling the API
The API can be called with either a HTTP GET or HTTP POST request.

On a successful request, the response will be a json object, formatted as below:
```json
{
    "url1": {
        "bodyWcNoScripts": 10,
        "fullHtmlDocWc": 50
    },
    "url2": {
        "bodyWcNoScripts": 100,
        "fullHtmlDocWc": 300
    }
}
```
- bodyWcNoScripts: Is the word count of the text content in the body of a webpage, not including script generated content.
- fullHtmlDocWc: Is the word cound of the raw HTML file.


#### GET
You can make a GET request to the API passing a single URL as a parameter to the API
Request:
```
http://localhost:3000/api/urlwc?url=http://testappcontainer:3001/five
```
Response:
```json
{
    "http://testappcontainer:3001/five": {
        "bodyWcNoScripts": 5,
        "fullHtmlDocWc": 25
    }
}
```
Or you can make a GET request to the API passing in multiple URLs as parameters.
Request:
```
http://localhost:3000/api/urlwc?url=http://testappcontainer:3001/five&url=testappcontainer:3001/ten
```
Response:
```json
{
    "http://testappcontainer:3001/five": {
        "bodyWcNoScripts": 5,
        "fullHtmlDocWc": 25
    },
    "testappcontainer:3001/ten": {
        "bodyWcNoScripts": 10,
        "fullHtmlDocWc": 30
    }
}
```

#### Post
You can make a POST request to the API passing a single URL as a string in the request body.
Request URL:
```
http://localhost:3000/api/urlwc
```
Request Body json:
```json
{
    "url": "http://testappcontainer:3001/five"
}
```
Response:
```json
{
    "http://testappcontainer:3001/five": {
        "bodyWcNoScripts": 5,
        "fullHtmlDocWc": 25
    }
}
```
Or you can make a POST request to the API passing in multiple URLs as an array in the request body.
Request URL:
```
http://localhost:3000/api/urlwc
```
Request Body json:
```json
{
    "url": ["http://testappcontainer:3001/five","testappcontainer:3001/six"]
}
```
Response:
```json
{
    "http://testappcontainer:3001/five": {
        "bodyWcNoScripts": 5,
        "fullHtmlDocWc": 25
    },
    "testappcontainer:3001/six": {
        "bodyWcNoScripts": 6,
        "fullHtmlDocWc": 28
    }
}
```