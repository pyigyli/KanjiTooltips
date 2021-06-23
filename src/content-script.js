import kanji from 'kanji.js'

const kanjiContainer = document.createElement('div')
kanjiContainer.hidden = true
kanjiContainer.style = `
  position: fixed;
  top: 2px;
  left: 2px;
  font: Sans-serif;
  font-size: 16px;
  color: #ffffff;
  background-color: #292928;
  border: 3px solid #888844;
  border-radius: 10px;
  padding: 8px;
  z-index: 2147483647;
`
document.body.append(kanjiContainer)

document.onmouseup = () => {
  const selection = document.getSelection().toString()
  let kanjiDetails
  if (selection.length === 1) {
    kanjiDetails = kanji.getDetails(selection)
    if (kanjiDetails) {
      kanjiContainer.innerHTML = `
        <span style="font-size: 20px;">${kanjiDetails.literal}</span>
        <br/>
        <span>Meanings: ${kanjiDetails.meanings.join(', ')}</span>
        <br/>
        <span>Readings: ${[...kanjiDetails.kunyomi, ...kanjiDetails.onyomi ].join(', ')}</span>
      `
      kanjiContainer.hidden = false
    }
  }
  if (selection.length !== 1 || !kanjiDetails) {
    kanjiContainer.hidden = true
  }
}
