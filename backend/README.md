# Backend part of Final Project

This is the backend for our Wedding site.
We are using Express.js and Mongoose with a MongoDB.
Bcrypt is used for auth and dotenv for acessing the env file.

## Getting Started

1.  Install the required dependencies using `npm install`.
2.  Start the development server using `npm run dev`.

## Endpoints and routes

### /

Se all REST API endpoints

### /login

Login to app by using email and password.
The password from the req is compared to the pre set invitation code set in the env.

### /auth

Runs authentication (middleware) by access token in DB and returns message if OK.

### /guests

Requires Authorization by accesstoken to run (middleware)

- .get: get all guests
- .post: post new guest

#### Example of guest

```
  {
    "firstname": "Judy",
    "lastname": "Dench",
    "email": "judy@worddomination.io",
    "password": "",
    "plusOne": {
      "isAllowed": true,
      "name": "Emma Thompson",
      "foodChoice": "Fish"
    },
    "speech": {
      "isAllowed": true,
      "willMakeSpeech": true
    },
    "foodChoice": "Vegetarian",
    "relation": "Sister of the bride",
    "willAttend": true
  }
```

### /guests/:guestId

Requires Authorization by accesstoken to run (middleware)

- .get: get guest by id
- .patch: update guest, primarily for RSVP
