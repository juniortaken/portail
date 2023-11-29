import Book from "../model/bookModel.js";
import Request from "../model/requestModel.js";
import User from "../model/userModel.js";
import Rented from "../model/rentedModel.js";

export const booksRoute = async (req, res, next) => {
  try {
    const allBooks = await Book.findAll();
    res.status(200).json(allBooks);
  } catch (err) {
    next(err);
  }
};

