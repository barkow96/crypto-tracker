const signUp = async (req, res) => {
  const submittedFormData = req.body;
  console.log("Express.js - submitted form data: ", submittedFormData);

  res
    .status(200)
    .json({ message: "Passing the data back", data: submittedFormData });
};

module.exports = { signUp };
