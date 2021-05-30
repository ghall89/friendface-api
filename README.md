# friendface-api

![](https://img.shields.io/github/license/ghall89/friendface-api?style=for-the-badge)

## Description

A social networking API built with Node, and MongoDB via Mongoose.

[Video Demo](https://drive.google.com/file/d/1hURgJ5hzxluyS3kl_vIH7u_JUCs8DMM5/view?usp=sharing)

![](./screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Requests](#api-requests)
- [License](#license)
- [Questions](#usage)

## Installation

- Install node and mongoDB if you don't already have them
- Clone this repo
- Navigate to the repo's location on your computer in your terminal
- Run the 'npm install' command and wait for the process to finish

## Usage

- From the repo directory in your terminal run `npm start`

## API Requests

Use a tool like Insomnia or Postman to create API requests.

### GET Routes

`localhost:3001/api/users` - Retrieve all users

`localhost:3001/api/thoughts` - Retrieve all thoughts and their reactions

### POST Routes

`localhost:3001/api/users` - Create a new user. Must provide `username` and `email` in the request body as JSON.

```
{
	"username": "Roy",
	"email": "roy@friendface.com"
}
```

`localhost:3001/api/users/:userId/friends/:friendId` - Add a friend to a user, the `userId` wildcard should be the ID of the user you wish to add a friend to, and the `friendId` wildcard should be the ID of the user you wish to add as a friend.

`localhost:3001/api/thoughts` - Create a new thought. Must provide a `username` and `thoughtText` in the request body as JSON.

```
{
	"username": "Roy",
	"thoughtText": "We don't need no education."
}
```

`localhost:3001/api/thoughts/:thoughtId` - Add a reaction to a thought, the `thoughtId` wildcard should be the ID of the thought being reacted to. Must provide a `username` and `reactionText` in the request body as JSON.

```
{
	"username": "Moss",
	"reactionText": "Yes you do. You just used a double-negative!"
}
```

### PUT Routes

`localhost:3001/api/users/:userId` - Update a user by ID. The `userId` wildcard should be the ID of the user you wish to update. Must provide a `username` and `email` in the request body as JSON, the same as the `localhost:3001/api/users` POST request.

`localhost:3001/api/thoughts/:thoughtId` - Update a thought by ID. The `thoughtId` wildcard should be the ID of the thought you wish to update. Must provide a `username` and `thoughtText` in the request body as JSON, the same as the `localhost:3001/api/thoughts` POST request.

### DELETE Routes

`localhost:3001/api/users/:userId` - Delete a user by ID. The `userId` wildcard should be the ID of the user you wish to delete.

`localhost:3001/api/thoughts/:userId/thoughts/:thoughtId` - Update a user by ID. The `userId` wildcard should be the ID of the user that the thought belongs to, and the `thoughtId` should be the ID of the thought you wish to delete.

`localhost:3001/api/thoughts/:thoughtId/:reactionId'` - Update a user by ID. The `thoughtId` wildcard should be the ID of the thought that the reaction belongs to, and the `reactionId` should be the ID of the reaction you wish to delete.

## License

Friendface API
Copyright (C) 2021 Graham Hall

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

## Questions

Direct any questions to [Graham Hall](http://github.com/ghall89) via email at ghall89@me.com
