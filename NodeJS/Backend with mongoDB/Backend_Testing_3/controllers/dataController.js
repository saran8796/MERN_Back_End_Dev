import dataModel from "../models/dataModel.js";

export const getData = async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ msg: "data received", datas: req.body });
  } catch (e) {
    console.log(e);
  }
};

export const setData = async (req, res) => {
  try {
    console.log(req.body);
    const { name, age } = req.body;

    const datastore = await dataModel.create({ name, age });

    res.status(201).json({ msg: "data received", datas: datastore });
  } catch (e) {
    console.log(e);
  }
};
