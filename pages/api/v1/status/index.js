function status(request, response) {
  response.status(200).json({ message: "The status test was successful." });
}

export default status;
