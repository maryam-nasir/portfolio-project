import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = models.Message || model("Message", messageSchema);

export default Message;
