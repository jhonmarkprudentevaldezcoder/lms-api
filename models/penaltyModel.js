const mongoose = require("mongoose");

const penaltySchema = mongoose.Schema(
  {
    MemberID: {
      type: String,
    },
    Accession: {
      type: String,
    },
    Fullname: {
      type: String,
    },
    IDnumber: {
      type: String,
    },
    Callnumber: {
      type: String,
    },
    EditionNumber: {
      type: String,
    },

    PaymentAmount: {
      type: String,
    },
    PenaltyAmount: {
      type: String,
    },
    PenaltyDesc: {
      type: String,
    },
    PenaltyIssued: {
      type: String,
    },
    PenaltyStatus: {
      type: String,
    },
    Title: {
      type: String,
    },
    PenaltyResolved: {
      type: String,
    },
    PenaltyIssuedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Penalties = mongoose.model("Penalties", penaltySchema);

module.exports = Penalties;
