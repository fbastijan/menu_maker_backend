const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../middlewares/userMiddlewares");
const { storage } = require("../../firebase");
const { ref, uploadString, getDownloadURL } = require("firebase/storage");

router.post("/image/upload", verifyToken, async (req, res) => {
  try {
    const storageRef = ref(storage, "images/" + req.body.menuId);

    const message4 = req.body.image;
    try {
      let result = await uploadString(storageRef, message4, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a data_url string!");
        }
      );
      return res.status(200).json({ result: result });
    } catch {
      return res.status(500).json({ error: e });
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});
router.get("/image/download", async (req, res) => {
  try {
    const storageRef = ref(storage, "images/" + req.query.menuId);
    let result = await getDownloadURL(storageRef);
    res.status(200).json({ result });
  } catch (e) {
    res.status(500).json({ e });
  }
});

module.exports = router;
