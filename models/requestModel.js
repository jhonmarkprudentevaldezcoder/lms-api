const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    MemberId: {
      type: String,
    },
    Accession: {
      type: String,
    },
    Fullname: {
      type: String,
    },
    IDNumber: {
      type: String,
    },
    Title: {
      type: String,
    },
    EditionNumber: {
      type: String,
    },

    CallNumber: {
      type: String,
    },
    DateAssest: {
      type: String,
    },
    PickupDate: {
      type: String,
    },
    PickupDue: {
      type: String,
    },
    RequestStatus: {
      type: String,
    },
    DateRequested: {
      type: String,
    },
    AssestBy: {
      type: String,
    },
    __v: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Requests = mongoose.model("Requests", requestSchema);

module.exports = Requests;
