const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());


app.get('/health', (req, res) => {
	res.send({"message": "health ok!"});
});

app.listen(port, () => {
	console.log(`server is running on port:${port}`)
});