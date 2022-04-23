import express from 'express'
import router from './routes/main.js'

const app = new express() // eslint-disable-line
app.use('/', router)

export default app
