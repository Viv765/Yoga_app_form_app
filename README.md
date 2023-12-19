# Vivek's Yoga Class Enrollment

## Overview

This project implements an admission form for Yoga Classes, allowing users to enroll in monthly classes. It includes a simple React frontend to capture user details and a Node.js backend to handle form submissions and store data in a MongoDB database.

## Features

- Only individuals aged 18-65 are allowed to enroll.
- Participants pay a monthly fee of 500/- Rs INR.
- Users can choose from four batches: 6-7AM, 7-8AM, 8-9AM, and 5-6PM.
- Participants can shift to a different batch in the following month.

## Implementation Details

- **Frontend:** React (EnrollmentForm component).
- **Backend:** Node.js with Express and MongoDB for data storage.
- **Form Submission:** Basic validation is performed on the frontend. Additional validation, payment simulation, and database storage are handled on the backend.
- **Payment Simulation:** A mock function (`CompletePayment`) simulates the payment process.

## Folder Structure

- **frontend:** Contains the React frontend code.
- **backend:** Contains the Node.js backend code.


## How to Run Locally

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the frontend and backend directories and install dependencies: `npm install`
3. Start the frontend and backend servers separately: `npm start` (for React) and `npm run start-dev` (for Node.js)
4. Access the application at http://localhost:3000

## Deployment

The application is deployed on Netlify, and the GitHub repository is publicly accessible.


## Contributors

Vivek
Gawai

