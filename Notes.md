## Project Structure

- by type
  - components
  - actions
  - reducers
  - routers
  - tests
  - models
- by feature
  - accounts
  - products
  - clients
- hybrid
  - type > feature
  - feature > type

## Express Routing

An express router is a way to break down a large application into smaller components.

- break an application into smaller routers
- break up the application by resources
  - each resource has it's own router
  - ex. race router, user router and each router has their own get, put, post and delete methods
- routing cares about 2 things
  - HTTP method
  - URL
- group similar endpoints into one particular router

## REST Application structure

- all things are resources
  |Action |Non REST |REST|
  |:--|:--|:--|
  |list clients|/clientList|GET /clients|
  |add a client|/addClient| POST/clients|
  |update a client|/modifyClient| PUT/clients/:id|
  |remove a client|/deleteClient|DELETE /clients/:id|

## Query params

- localhost:4000/api/hubs?page=2&limit=3
- localhost:4000/api/hubs
  ? ---------> beginning of "query string"
  page = 2 --------> key/value pair
  & -------> separates key/value pairs
  limit = 3 -------> another key/value pair

## Sub Route

- github.com/microsoft/azuredatastudio/
  - azuredatastudio belongs to microsoft who is a user on github
- shows hierarchy of data
