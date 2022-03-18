const basePath = './data'
const path = require('path')
const fs = require('fs')
const imgsPath = path.resolve(basePath, 'imgs')
const nameMappings = ['daryl', 'rick', 'negan']

const imgFiles = fs.readdirSync(imgsPath)

const images = imgFiles
  // get absolute file path
  .map((file) => path.resolve(imgsPath, file))
  // read image
  .map((filePath) => cv.imread(filePath))
  // face recognizer works with gray scale images
  .map((img) => img.bgrToGray())
  // detect and extract face
  .map(getFaceImage)
  // face images must be equally sized
  .map((faceImg) => faceImg.resize(80, 80))

const isImageFour = (_, i) => imgFiles[i].includes('4')
const isNotImageFour = (_, i) => !isImageFour(_, i)
// use images 1 - 3 for training
const trainImages = images.filter(isNotImageFour)
// use images 4 for testing
const testImages = images.filter(isImageFour)
// make labels
const labels = imgFiles
  .filter(isNotImageFour)
  .map((file) => nameMappings.findIndex((name) => file.includes(name)))
