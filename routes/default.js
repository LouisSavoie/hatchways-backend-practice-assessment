function index (req, res) {
  res.send('Hello world!')
}

function hello (req, res) {
  const name = req.params.name ?? 'world'
  res.send(`Hello ${name}`)
}

export { index, hello }
