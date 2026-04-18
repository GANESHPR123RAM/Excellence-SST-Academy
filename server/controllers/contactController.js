const Contact = require("../model/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};

const getContact = async (req, res) => {
  try {
    const Allcontacts = await Contact.find();
    res.status(200).json(Allcontacts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { contactForm, getContact };