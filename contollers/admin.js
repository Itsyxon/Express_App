const getAdmin = (req, res) => {
  console.log('123')
  res.send('Get admin route')
}
const getAdminHandler = (req, res) => {
  console.log(req.params)
  res.send(`Get admin ID route. ID: ${req.params.adminsId}`)
}
const postAdmin = (req, res) => {
  res.send('Admin post route')
}
const deleteAdmin = (req, res) => {
  res.send(`Delete admin route. AdminID ${req.params.adminsId}`)
}

export { getAdmin, getAdminHandler, postAdmin, deleteAdmin }
