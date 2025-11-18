export const sendData = async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ msg: "send successfuly", data: req.body });
  } catch (e) {
    console.log(e);
  }
};
