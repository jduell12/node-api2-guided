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

## Rest Application

- all things are resources
  |Action |Non REST |REST|
  |:--|:--|:--|
  |list clients|/clientList|/clients|
  |update a client|/modifyClient|/clients/:id|
  |remove a client|/deleteClient|/clients/:id|
