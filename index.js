function buildHistogram(mag) {
  let hashy = {}
  mag.forEach(z => {
	   hashy[z] ? hashy[z] +=1 : hashy[z] = 1
})
return hashy
}


function canBuildNote(mag, note) {
  let hashy = buildHistogram(mag.sort())
  let y = note.split("").sort()
  let result

  for(let i = 0; i < note.length; i++) {
    if (hashy[note[i]] && result !== false) {
      hashy[note[i]] -= 1
      result = true
    } else {
      result = false
    }
  }
  return result
}
