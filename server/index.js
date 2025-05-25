const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('השרת פועל בהצלחה 🎉');
});

// לדוגמה: API לקבלת הודעת צור קשר
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('התקבלה הודעה:', { name, email, message });
  res.json({ success: true, message: 'ההודעה התקבלה!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`השרת רץ על פורט ${PORT}`);
});
