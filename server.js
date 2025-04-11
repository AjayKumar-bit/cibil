import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     console.log('Request body:', req.body);
//     next();
//   });

// Helper function to generate random CIBIL score
const generateRandomScore = () => {
  return Math.floor(Math.random() * (900 - 300 + 1)) + 300;
};

// CIBIL Report endpoint
app.post("/cibilReport", (req, res) => {
  const { pan, fullName, dob, mobile, email } = req.body;
  console.log(pan, fullName, dob, mobile, email,"data");

  // Validate required fields
  if (!pan || !fullName || !dob || !mobile || !email) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields",
    });
  }

  const currentDate = new Date().toISOString().split("T")[0];

  const response = {
    status: "success",
    cibilScore: generateRandomScore(),
    report: {
      pan: pan,
      name: fullName,
      dob: dob,
      reportGeneratedOn: currentDate,
      accounts: [
        {
          type: "Credit Card",
          bank: "HDFC Bank",
          accountNumber: "XXXX1234",
          currentBalance: 5000,
          creditLimit: 100000,
          status: "Active",
          paymentHistory: ["2025-01", "2025-02", "2025-03"],
        },
        {
          type: "Personal Loan",
          bank: "ICICI Bank",
          accountNumber: "XXXX5678",
          originalLoanAmount: 500000,
          outstandingBalance: 150000,
          emi: 10250,
          status: "Active",
        },
      ],
      inquiries: [
        {
          date: "2025-03-20",
          institution: "Axis Bank",
          purpose: "Credit Card",
        },
        {
          date: "2025-02-10",
          institution: "Bajaj Finserv",
          purpose: "Personal Loan",
        },
      ],
    },
  };

  res.json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
