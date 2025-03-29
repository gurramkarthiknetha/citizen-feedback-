const exp = require('express');
const app = exp();
require('dotenv').config(); 
const mongoose = require('mongoose');
// const cors = require('cors')
// app.use(cors())

// Import routes instead of models
const adminRoutes = require('./routes/admin');
const officerRoutes = require('./routes/officer');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DBURL)
.then(() => {
    console.log("DB connected Successfully");
    app.listen(port, () => console.log(`Server running on port ${port}`));
})
.catch((e) => console.log("Error in connecting to DB: ", e));

// body parser
app.use(exp.json())

// Use route middlewares
app.use('/admin', adminRoutes);
app.use('/officer', officerRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// error handler
app.use((err, req, res, next) => {
    console.error("Error occurred:", err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
});