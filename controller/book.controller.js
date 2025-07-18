import Book from "../model/book.model.js";
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice
    ) {
      return res.status(400).json({
        Message: "All field required",
        success: false,
      });
    }
    const bookAdd = await Book.insertOne(body);
    if (bookAdd) {
      return res.status(201).json({
        Message: "data created successful",
        success: true,
        Id: bookAdd?._id,
      });
    }
  } catch (error) {
    return res.status(500).json({
      Message: error.Message,
      success: false,
    });
  }
};

const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find({});
    return res.status(200).json({
      Message: "All books fetcched successfully",
      success: true,
      TotalCount: bookList.length,
      BookList: bookList,
    });
  } catch (error) {
    return res.status(400).json({
      Message: "All field's are require",
      success: false,
    });
  }
};

const handleBookDeleteController = async (req, res) => {
  const body = req.body;
  try {
    const deleted = await Book.deleteOne({ _id: body.Id });

    if (deleted.acknowledged) {
      return res.json({
        Message: "Book deleted successfully! ",
        success: true,
      });
    }
  } catch (error) {
    return res.status(400).json({
      Message: "All field's are require",
      success: false,
    });
  }
};

const handleBookUpdateController = async (req, res) => {
  try {
    const body = req.body;
    const updating = await Book.updateOne({ _id:body?.Id }, {$set:body});
    console.log("updating", updating)

    if(updating?.acknowledged){
        return res.json({
            Message: "Book updated successfully",
            success:true
        })
    }
  } catch (error) {
    return res.status(500).json({
      Message: error.Message,
      success: false,
    });
  }
};

export {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController
};
