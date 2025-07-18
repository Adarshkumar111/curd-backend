import mongoose from "mongoose";
const databaseConnection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/booksLibrary")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("database connection failed", err);
    });
};

export default databaseConnection