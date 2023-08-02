const express = require("express")
const { Protect } = require("../middleware/authMiddleware")
const { getDocuments, getDocument, createDocument, updateDocument, deleteDocument } = require("../controller/documentController")
// const multer = require("multer")

const router = express.Router()



router.get("/" , Protect, getDocuments)

router.get("/:id" , Protect , getDocument)


// const storage = multer.diskStorage({
//     destination : (req , file , cb) => {
//         return cb(null , './uploads')
//     },
//     filename : (req , file , cb) =>{
//         return cb(null , `${Date.now()}-${file.originalname}`)
//     }
//  })

//  const upload  = multer({storage})

router.post("/" ,Protect,  createDocument)
             

router.put("/:id" , Protect, updateDocument)

router.delete("/:id" , Protect , deleteDocument)


module.exports = router