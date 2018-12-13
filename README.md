# Watson Assist

> Watson Assist is a state of the art web application that uses IBM Watson's linguistics analysis to detect fear, angry, joyous, sad, analytical, confident, and tentative tones that may be found in text. This service can be useful for writing a sales pitch or emails that convey a desired tone.

![IBM's Watson](./src/assets/watson_md.png)

A working version of this application can be found **[here](https://watson-assist.herokuapp.com)**

___

## **Tools Used**

* **[Watson's Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)** - This application is built on using the Tone Analyzation capabilities of IBM's Watson.
* **[IBM Cloud Platform](https://www.ibm.com/cloud/)** - This Watson Tone Analyzer service is provided by the IBM Cloud platform.
* **[Heroku Cloud Platform](https://www.heroku.com/)** - Heroku is the cloud platform I have chosen to deploy this project on.
* **[Node Package Manager](https://www.npmjs.com/)** - For installing and importing packages I have chosen NPM instead of Yarn.
* **[Node JS](https://nodejs.org/en/)** - This project uses a Node runtime.
* **[Vue JS](https://vuejs.org/)** - Vue JS is the JavaScript framework used for the project's frontend.
* **[Docker](https://www.docker.com/)** - To serve this project locally using a Docker image you must install Docker tools.

___

### **Node Packages Used**

* **[body-parser](https://www.npmjs.com/package/body-parser)**
* **[carbon-components](https://www.npmjs.com/package/carbon-components)**
* **[cors](https://www.npmjs.com/package/cors)**
* **[cors-server](https://www.npmjs.com/package/cors-server)**
* **[dotenv](https://www.npmjs.com/package/dotenv)**
* **[express](https://www.npmjs.com/package/express)**
* **[nprogress](https://www.npmjs.com/package/nprogress)**
* **[watson-developer-cloud](https://www.npmjs.com/package/watson-developer-cloud)**

#### Installed via Vue CLI project scaffolding

* **[register-service-worker](https://www.npmjs.com/package/register-service-worker)**
* **[vue](https://www.npmjs.com/package/vue)**
* **[vue-router](https://www.npmjs.com/package/vue-router)**
* **[vue-loading-spinner](https://www.npmjs.com/package/vue-loading-spinner)**
* **[vuex](https://www.npmjs.com/package/vuex)**

___

## **Project Architecture**

> Network Model

![Framework](./src/assets/diagram.png)

> Deployment Model

![Deployment](./src/assets/deployment.png)

___

## **Project Setup**

>The following instructions are for Mac OS.
>Project setup for Windows and Linux are unavailable.

___

## **Install Dependencies**

> These are the intructions for installing any dependencies needed to test, develop, and deploy.

### Install Node and NPM

``` bash
# Install Node and NPM via Homebrew:
brew install node

# Check to see if Node installed properly:
node -v

# Check to see if NPM installed properly:
npm -v
```

### Install IBM Cloud CLI

``` bash
# Install via shell:
curl -fsSL https://clis.ng.bluemix.net/install/osx | sh

# Check to see if IBM Cloud CLI installed properly:
ibmcloud --version
```

### Install Heroku CLI

``` bash
# Install via Homebrew:
brew install heroku/brew/heroku

# Check to see if Heroku CLI installed properly:
heroku --version
```

### Install Vue JS and Vue CLI

``` bash
# Install via npm:
npm install -g vue

# Check to see if Vue installed properly:
vue --version
```

### Install Docker

``` bash
# Install using brew cask
brew cask install docker

# Check to see if Docker installed properly:
docker -v
docker-compose -v
```

(Or alternatively you can install from **[here](https://store.docker.com/editions/community/docker-ce-desktop-mac)**.)

___

## Commission a Watson Tone Analyzer Web Service from IBM Cloud

* Create your own service **[here](https://www.ibm.com/watson/services/tone-analyzer/)** (**the lite plan is all that is needed**).
* Copy your service's API Key and URL (**you will need them later**).

![Tone Analyzer Service](./src/assets/tone-analyzer.png)

___

## Clone the Watson Assist Repository

> This repository contains all the code needed to run this application. With the exception of one file which you will create below.

``` bash
# Clone the repo via git:
git clone https://github.com/kevtr0n/WatsonAssist.git
```

___

## Create a ```.env``` file in the project root

``` bash
# Change into the project directory:
cd WatsonAssist

# Create a .env file:
touch .env
```

___

## Inside the ```.env``` file, do the following

``` bash
# Create the following variables:
TONE_ANALYZER_API_KEY=YOUR_TONE_ANALYZER_API_KEY
TONE_ANALYZER_API_URL=YOUR_TONE_ANALYZER_API_URL
TONE_ANALYZER_VERSION_DATE=2017-09-21
```

___

## Serve Locally (with hot-reload/without backend connectivity)

``` bash
npm run serve
```

___

## Serve Locally (without hot-reload/with backend connectivity)

``` bash
# Comment out line 127 of WatsonAssist/src/store/store.ts
# Uncomment line 128
npm run build
node server.js
```

___

## Build Docker Image and Serve Locally

``` bash
# Builds a Docker image using the Dockerfile inside
docker build -t IMAGE_NAME .

# Serve Docker image on port 8080
docker run -it -p 8080:80 --rm --name INSTANCE_NAME IMAGE_NAME
```

___

## Deploy to Heroku

**Before your application can work on Heroku, you will need to add your environment variables to your Heroku project.**

Under the settings tab in your Heroku project you will need to click the button titled 'Reveal Config Vars'

![Reveal Config Vars](./src/assets/button.png)

Once there, you will need to add your three environment variables:

``` bash
TONE_ANALYZER_API_KEY=YOUR_TONE_ANALYZER_API_KEY
TONE_ANALYZER_API_URL=YOUR_TONE_ANALYZER_API_URL
TONE_ANALYZER_VERSION_DATE=2017-09-21
```

![Config Vars](./src/assets/vars.png)

___

### Deploy

``` bash
# Login to Heroku:
heroku login

# Initialize .git in project root:
git init
heroku git:remote -a YOUR_HEROKU_PROJECT_NAME

# Build dist/
npm run build

# Push to Heroku:
git add .
git commit -m "Heroku deploy."
git push heroku master

# Optionally use NPM Script:
npm run deploy
```

___

### Deploy (via Docker Image)

``` bash
# Login to Heroku:
heroku login

# Initialize .git in project root:
git init
heroku git:remote -a YOUR_HEROKU_PROJECT_NAME

# Set the stack of your app to container.
heroku stack:set container

# Deploy your application:
git push heroku master
```

___