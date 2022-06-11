import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false, // _v:0,1,2,3
  }
);
// const taskSchema = new Schema(
//   {
//     title: String,
//     description: String,
//     done: Boolean,
//   },
//   {
//     timestamps: true,
//   }
// );

export default model("Task", taskSchema);
