const mongoose = require("mongoose");

let Chat;

try {
  Chat = mongoose.model("chat");
} catch (error) {
  const chatSchema = new mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the sender
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the receiver
      required: true,
    },
    messages: [
      {
        senderName: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
  });

  Chat = mongoose.model("chat", chatSchema);
}

module.exports = Chat;
