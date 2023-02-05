const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    nonce: {
      type: Number,
      allowNull: false,
      default: () => Math.floor(Math.random() * 1000000),
    },
    wallet_address: {
      type: String,
      //allowNull: false,
      //unique: true,
      lowercase: true,
      //immutable: true,
    },
    // email: {
      //   type: String,
      //   lowercase: true,
      //   unique: true,
      // },
    emailVerification: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
    },
    description: {
      type: String,
    },
  }, //opts
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
