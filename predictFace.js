const runPrediction = (recognizer) => {
  testImages.forEach((img) => {
    const result = recognizer.predict(img)
    console.log(
      'predicted: %s, confidence: %s',
      nameMappings[result.label],
      result.confidence,
    )
    cv.imshowWait('face', img)
    cv.destroyAllWindows()
  })
}

console.log('eigen:')
runPrediction(eigen)

console.log('fisher:')
runPrediction(fisher)

console.log('lbph:')
runPrediction(lbph)
