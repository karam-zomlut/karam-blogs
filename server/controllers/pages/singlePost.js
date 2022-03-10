const { join } = require("path");

const singlePostHandle = (req, res) => {
    res.sendFile(join(__dirname, "..", "..", "..", "public", "post.html"));
}

module.exports = singlePostHandle;