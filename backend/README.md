# API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body must be a JSON object containing the following fields:

- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Validation Error
```json
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

### Server Error
```json
{
  "message": "Internal Server Error"
}
```

## /users/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## /users/profile

### Description
This endpoint is used to get the profile of the logged-in user.

### Method
`GET`

### Headers
- `Authorization` (string, required): The JWT token of the logged-in user.

### Example Request
```
GET /users/profile
Authorization: Bearer jwt_token_here
```

### Example Response
```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

## /users/logout

### Description
This endpoint is used to log out the current user.

### Method
`GET`

### Headers
- `Authorization` (string, required): The JWT token of the logged-in user.

### Example Request
```
GET /users/logout
Authorization: Bearer jwt_token_here
```

### Example Response
```json
{
  "message": "Logged Out"
}
```