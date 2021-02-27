import mongoose from "mongoose";

// const categorySchema = mongoose.Schema({
//   category: { type: String, required: true },
// });

const placeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    entryfee: { type: String },
    timing: { type: String },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const stateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
    shortform: {
      type: String,
      required: true,
    },
    places: [placeSchema],
  },
  {
    timestamps: true,
  }
);

const State = mongoose.model("State", stateSchema);

export default State;
