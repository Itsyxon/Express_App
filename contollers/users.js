const getUsers = (req, res) => {
  res.send('Get users route')
}
const postUsers = (req, res) => {
  res.send('Post users route')
}
const getSingleUser = (req, res) => {
  res.send(`Get user route. UserId ${req.params.userId}`)
}

export { getUsers, postUsers, getSingleUser }
