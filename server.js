const express = require("express");
const mongoose = require("mongoose");
const Members = require("./models/memberModel");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default route
app.get("/", (req, res) => {
  res.send("API WORKING SUCCESS");
});
/* 
//get user
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// fetch all schedules
app.get("/schedules", async (req, res) => {
  try {
    const schedules = await Schedules.find({});
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// fetch all schedules
app.get("/rfids", async (req, res) => {
  try {
    const rfids = await Rfids.find({});
    res.status(200).json(rfids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add schedules
app.post("/insertschedule", async (req, res) => {
  try {
    const schedule = await Schedules.create(req.body);
    res.status(200).json(schedule);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/schedule/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedules.findByIdAndDelete(id);
    if (!schedule) {
      return res
        .status(404)
        .json({ message: `cannot find any schedule with ID ${id}` });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// fetch all checkups
app.get("/checkups", async (req, res) => {
  try {
    const checkups = await Checkup.find({});
    res.status(200).json(checkups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// fetch all checkup history
app.get("/checkups-history", async (req, res) => {
  try {
    const checkupshistory = await CheckupsHistory.find({});
    res.status(200).json(checkupshistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/schedule/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedules.findByIdAndUpdate(id, req.body);

    if (!schedule) {
      return res
        .status(404)
        .json({ message: `cannot find any schedule with ID ${id}` });
    }
    const updatedSchedule = await Schedules.findById(id);
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/announcements/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const announcements = await Announcements.find({ rfid: id });

    if (announcements.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 */

//login

app.post("/login", async (req, res) => {
  const { Username, Password } = req.body;

  try {
    // Find the user by email
    const user = await Members.findOne({ Username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found." });
    }

    // Compare the provided password with the stored password
    if (user.Password !== Password) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Incorrect password." });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    // Set the token as a cookie (optional)
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    // Respond with the token as a Bearer token
    res.status(200).json({
      message: "Authentication successful",
      token: `${token}`,
      userId: user._id,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://virusdetected848:helloworld123@cluster0.mootble.mongodb.net/LMS"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
