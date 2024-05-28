# Backend part of Final Project

This project includes the packages and babel setup for an express server, and is just meant to make things a little simpler to get up and running with.

## Getting Started

1.  Install the required dependencies using `npm install`.
2.  Start the development server using `npm run dev`.

## Endpoints and routes

### /

### /login

Login to app by using email and password.
Test user: test@example.com | testPassword

### /guests

- .get: get all guests
- .post: post new guest

#### Example of guest

```
  {
    "firstname": "Judy",
    "lastname": "Dench",
    "email": "judy@worddomination.io",
    "password": "test",
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

- .get: get guest by id
