const { join } = require("path");

const notFoundHandle = (req, res) => {
    res.status(404).sendFile(join(__dirname, "..", "..", "..", "public", "404.html"));
}

module.exports = notFoundHandle