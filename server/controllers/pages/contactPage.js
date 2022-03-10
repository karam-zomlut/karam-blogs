const { join } = require("path");

const contactPageHandle = (req, res) => {
    res.sendFile(join(__dirname, "..", "..", "..", "public", "contact.html"))
}

module.exports = contactPageHandle;