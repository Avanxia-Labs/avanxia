import 'dotenv/config'    // carga server/.env
import express from 'express'
import cors    from 'cors'
import {
  sendContactForm,
  sendJoinUsForm
} from './sendMail.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  try {
    await sendContactForm(req.body)
    return res.json({ ok: true })
  } catch (err) {
    console.error('ERROR enviando contacto:', err.stack || err)
    return res.status(500).json({ error: err.message || 'Error interno del servidor' })
  }
})

app.post('/api/join-us', async (req, res) => {
  try {
    await sendJoinUsForm(req.body)
    return res.json({ ok: true })
  } catch (err) {
    console.error('ERROR enviando join-us:', err.stack || err)
    return res.status(500).json({ error: err.message || 'Error interno del servidor' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`API escuchando en puerto ${PORT}`))
