// Vercel serverless entry point.
// Vercel's Node runtime treats any exported (req, res) handler as a
// function, and an Express app is exactly that — so we just re-export it.
// All the actual routes/middleware live in ../app.js.
module.exports = require('../app');
