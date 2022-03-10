const { join } = require("path");

const aboutPageHandle = (req, res) => {
    res.sendFile(join(__dirname, "..", "..", "..", "public", "about.html"));
}

module.exports = aboutPageHandle;