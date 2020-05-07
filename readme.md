## API: Very Useful Tools To Remember
Personal Porfolio project API, fully functioning, built with Node, Express, MongoDB, Chai & Mocha for testing.

## Motivation
This was part of a project I've worked, where there was an application pulling these date to be displayed. The app was a list of tools to be remembered, based on REST architecture, where the user could GET a list of all the tools, search and sort the tools, POST new tools to it.

I am using it as a portfolio project, to display how I think of testing, how to structure the application in folders, which tools to use.

## General Understanding
This API is organized around REST. It has has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Authentication
For now this API doesn't require Authentication

## List Tools

### Endpoint: GET 'api/tools'

Lists all tools that are stored in DB, following the Schema:

  id: {type: Number},
  title: {type: String, required:true},
  link: {type: String, required:true},
  description: {type: String, required:true},
  tags: {type: Array, required:false}

## List Tools Filter/Search

### Endpoint: GET 'api/tools/q={name="github"}'

q= can be changed to query any of the following fields => id, title, link, description, tags  

## Post new Tool

### Endpoint: POST 'api/tools/'

In order to POST a new Tool the Header must have Content Type 'application/json' and body must be JSON.
It also needs to follow the Schema:

  title: {type: String, required:true},
  link: {type: String, required:true},
  description: {type: String, required:true},
  tags: {type: Array, required:false}

## Delete Tool

### Endpoint: DELETE 'api/tools/:id'

Once a tool is created the API will return it with the ID defined, so the user will have access to it. The ID information is also required when the user GETs the full list or queries the list of tools.

Once it needs to delete it it only needs to provide the ID as params.

## Errors

This API uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with our servers.

## Installation

In the project directory, you can run:

### `npm install`

This project requires MongoDB to be installed and running:
https://docs.mongodb.com/manual/installation/

If it is installed you can start it with:
### `mongod` or `sudo mongod`

Once installed all the dependencies:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Improvements on queue

  - Authentication
  - Expanded Testing

## Credits

Project done by me Laura J Barros for a Challenge that required an API built
