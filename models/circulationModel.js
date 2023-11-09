const mongoose = require("mongoose");

const circulationSchema = mongoose.Schema(
  {
    Accession: {
      type: String,
    },
    CallNumber: {
      type: String,
    },
    Title: {
      type: String,
    },
    BorrowerName: {
      type: String,
    },
    BorrowerType: {
      type: String,
    },
    BorrowerMemberID: {
      type: String,
    },

    BorrowerMemberRFID: {
      type: String,
    },
    BorrowerID: {
      type: String,
    },
    IssueDate: {
      type: String,
    },
    DueDate: {
      type: String,
    },
    ReturnDate: {
      type: String,
    },
    PenaltyAmount: {
      type: String,
    },
    PenaltyStatus: {
      type: String,
    },
    CirculationStatus: {
      type: String,
    },
    IssueBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Circulations = mongoose.model("Circulations", circulationSchema);

module.exports = Circulations;
