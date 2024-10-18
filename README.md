# Healthcare Services API

A simple Node.js and Express API to manage a list of healthcare services, using MongoDB as the database.


## Features

- Add a new healthcare service (name, description, price).
- Retrieve all available services.
- Update an existing service.
- Delete a service.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **Postman** (for API testing)

## Requirements

- Node.js (>= v12)
- MongoDB (local or Atlas)
- npm (Node package manager)

## Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/ShadowAdi/Services_Api.git
cd in the folder
```

### Install dependencies:

```bash
npm install
```

###  Set up environment variables:
Create a  .env file to store credentails
MONGODB_URI=mongodb://localhost:27017/healthcareDB
PORT=3000

### Start the server
```bash
npm start
```

### API Endpoints
1). Create the Service
    `POST /api/v1/addService`
    ```
    {
    "serviceName": "Flu Vaccination",
    "description": "A seasonal flu vaccine to protect against influenza.",
    "price": 30,
    "category": "Preventive Care",
    "availability": true
    }
    ```
2). Update Service
    `PUT /api/v1/updateService/:id`
    ```
    {
    "price": 100,
    "availability": false
    }
    ```
3). Get Services
    `GET /api/v1/getAllServices/`
    
4). Get Service
    `GET /api/v1/getService/:id`

5). Delete Service
    `DELETE /api/v1/deleteService/:id `

### Url Of postman Collection
This is the [URL](https://www.postman.com/flight-geoscientist-23558502/servicescollection/collection/0apldj8/servicecollection?action=share&creator=29633687) here you can find my 
collection of postman

