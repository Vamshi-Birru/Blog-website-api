# Blog Website Backend

## Overview

This project is the backend part of a blog application built using the MERN stack (MongoDB, Express, React, Node.js). This backend provides RESTful API endpoints for user authentication, blog post management, and other backend functionalities.

### Features:
- User authentication (signup and login)
- CRUD operations for blog posts
- Secure handling of user data and blog content

## Setup and Run Locally

To set up and run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (for the database)

### Cloning the Repository

1. Clone the repository:

    ```bash
    git clone https://github.com/Vamshi-Birru/Blog-website-api
    cd Blog-website-api
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables. Example:

    ```env
    URL=mongodb://localhost:27017/blogapp
    PORT=5000
    MONGO_USERNAME=RDJ
    MONGO_PASSWORD=Ironman
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

   The server should now be running on `http://localhost:5000`.

## Approach and Challenges

### Approach

- **Backend:** Developed with Node.js and Express to handle API requests and server-side logic. MongoDB is used for data storage and management.
- **Authentication:** Generates and manages `user_id` upon user login, which is sent to the frontend for state management.

### Challenges Faced

- **Authentication:** Ensuring secure and reliable management of user sessions without using JWT tokens.
- **API Design:** Designing RESTful endpoints for efficient data handling and interaction with the frontend.
- **Integration:** Synchronizing backend development with the frontend, and ensuring smooth communication between them.

## Live API

The live version of the backend API can be accessed at: [Live API](https://blog-website-api-fce1.onrender.com)

---

Feel free to open issues or submit pull requests if you have suggestions or improvements.
