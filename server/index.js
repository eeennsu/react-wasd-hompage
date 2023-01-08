const express = require('express');
const app = express();
const PORT = 5000;


// 서버 오픈
app.listen(PORT, () => {
    console.log(`Server is connected at ${PORT} port!!`);
});