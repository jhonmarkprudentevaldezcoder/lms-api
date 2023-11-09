const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    Fullname: {
      type: String,
    },
    Address: {
      type: String,
    },
    Age: {
      type: String,
    },
    Birthday: {
      type: String,
    },
    Email: {
      type: String,
    },
    ContactNumber: {
      type: String,
    },

    IDNumber: {
      type: String,
    },
    Username: {
      type: String,
    },
    Rfid: {
      type: String,
    },
    Password: {
      type: String,
    },
    AccountType: {
      type: String,
    },
    DateRegistered: {
      type: String,
    },
    Status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Members = mongoose.model("Members", memberSchema);

module.exports = Members;
