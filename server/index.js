const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//test route
app.get('/', (req, res) => {
  res.send('השרת פועל בהצלחה 🎉');
});

//get all users
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('שגיאה בשרת');
  }
});

//insert contact message
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await pool.query(
      'INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    res.json({ success: true, message: 'ההודעה התקבלה!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('שגיאה בשליחת ההודעה');
  }
});

//server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`השרת רץ על פורט ${PORT}`);
});
