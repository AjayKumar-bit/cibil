# CIBIL Report API

This is a simple Node.js Express API that provides CIBIL report data.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

## API Endpoints

### Get CIBIL Report

**POST** `/getCibilReport`

**Request Body:**

```json
{
  "pan": "ABCDE1234F",
  "fullName": "John Doe",
  "dob": "1990-01-01",
  "mobile": "9876543210",
  "email": "john@example.com"
}
```

**Response:**

```json
{
  "status": "success",
  "cibilScore": 780,
  "report": {
    "pan": "ABCDE1234F",
    "name": "John Doe",
    "dob": "1990-01-01",
    "reportGeneratedOn": "2025-04-07",
    "accounts": [...],
    "inquiries": [...]
  }
}
```
