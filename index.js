const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send({"message": "Hii from lakshya"});
});

app.get('/health', (req, res) => {
	res.send({"message": "health ok!"});
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`server is running on port 3000`)
});