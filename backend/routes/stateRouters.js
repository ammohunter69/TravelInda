import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import State from "../models/statesModel.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const states = await State.find(
        {},
        { places: 0, __v: 0, shortform: 0, createdAt: 0, updatedAt: 0 }
      );
      res.status(200).json(states);
    } catch (e) {
      res.status(500).json({ message: "Data fetch has failed", error: e });
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      console.log(req.params);
      const state = await State.findById(req.params.id, {
        description: 0,
        image: 0,
        shortform: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      });

      if (state) {
        res.status(200).json(state);
      } else {
        res.status(404).json({ message: "state not found" });
      }
    } catch (e) {
      res.status(500).json({ message: "Data fetch has failed", error: e });
    }
  })
);

export default router;
