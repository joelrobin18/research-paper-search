# Research Paper Search Application

## Overview

This project is a research paper search application that allows users to search for and save research papers. It consists of a frontend built with React and a backend with Node.js.

## Project Structure

research-paper/ 
      ├── backend/ 
             └── service.js
      └── frontend/
             ├── components
                   ├── SearchPage
                   └── SavedPapersPage
             └── data
                   └── dummyPapers

## Getting Started

Follow these instructions to run the application locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (for both frontend and backend)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for package management)

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/joelrobin18/research-paper-search.git
cd research-paper-search
```

#### 2. Backend Setup

##### 1. Navigate to the `backend` directory:

```bash
cd backend
```

##### 2. Install the backend dependencies:

```bash
npm install
```

Or, if you're using yarn:

```bash
yarn install
```

##### 3. Start the backend server:

```bash
npm start
```

Or, if you're using yarn:

```bash
yarn start
```

The backend server should now be running at `http://localhost:5000`.

If any other service is running in port 5000, terminate them and restart this service or change the port number value in `service.js` file to any other port.

#### 3. Frontend Setup

##### 1. Open a new terminal window/tab and navigate to the frontend directory:

```bash
cd frontend
```

##### 2. Install the frontend dependencies:

```bash
npm install
```

Or, if you're using yarn:

```bash
yarn install
```

##### 3. Start the frontend development server:

```bash
npm start
```

Or, if you're using yarn:

```bash
yarn start
```

The frontend application should now be running at `http://localhost:3000`.

If the port is already occupied by some other apps, then the app would be running in `http://localhost:3001` or anyother similiar port

#### Usage

1. Open your web browser and navigate to `http://localhost:3000` to access the application.

2. Use the search input to search for research papers.

3. Save papers to your personal collection and view them on the "Saved Papers" page.

4. Manage your saved papers by removing them as needed.

#### Notes

1. Ensure the backend server is running before starting the frontend application.

2. The backend server provides API endpoints for saving and removing papers.

3. Modify the API URLs in the frontend if your backend server is running on a different port or address.
