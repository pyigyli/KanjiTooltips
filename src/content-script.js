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

const getHighlightedKanji = () => {
  const selection = document.getSelection()
  if (selection.toString().length === 1) {
    const kanjiDetails = kanji.getDetails(selection.toString())
    if (kanjiDetails) {
      kanjiContainer.innerHTML = `
        <span style="font-size: 20px;">${kanjiDetails.literal}</span>
        <br/>
        <span>Meanings: ${kanjiDetails.meanings.join(', ')}</span>
        <br/>
        <span>Readings ${[...kanjiDetails.kunyomi, ...kanjiDetails.onyomi ].join(', ')}</span>
      `
      kanjiContainer.hidden = false
    } else {
      kanjiContainer.hidden = true
    }
  } else {
    kanjiContainer.hidden = true
  }
}

document.onmouseup = getHighlightedKanji
