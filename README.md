# volunteer-management-app

## API Server ##
Run the command `npm start` to start the API Server

## API End Points ##
Base URL `http://localhost:3000`

### Users ###
#### `GET /api/users` ####
* Description - Retrieve all users as a JSON array.
* HTTP Method - `GET`
* URL Path - `/api/users`

#### `POST /api/users` ####
* Description - Adds a user and returns the added user with a _id key.
* HTTP Method - `POST`
* URL Path - `/api/users`

#### `GET /api/users/:_id` ####
* Description - Retrieves the event with the matching `_id` as a JSON object or an empty object if no matching event is found.
* HTTP Method - `GET`
* URL Path - `/api/users/:_id`

### Events ###
#### `GET /api/events` ####

* Description - Retrieve all events as a JSON array.
* Method - `GET`
* URL Path - `/api/events`

#### `POST /api/events` ####
* Description - Adds an event and returns the added event with a _id key.
* HTTP Method - `POST`
* URL Path - `/api/events`

#### `GET /api/events/:_id` ####

* Description - Retrieves the event with the matching `_id` as a JSON object or an empty object if no matching event is found.
* Method - `GET`
* URL Path - `/api/events/:_id`
