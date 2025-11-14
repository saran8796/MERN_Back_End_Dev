export const getData = async (req, res) => {
  try {
    console.log(req.body);

    res.status(201).json({msg:"hello", data: req.body})
  } catch (e) {
    console.log("Something error : ", e.message());
  }
};
