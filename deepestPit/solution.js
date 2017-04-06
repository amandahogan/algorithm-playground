function getDeepestPit(heights) {
  var starts = getStartOfPits(heights)
  var depths = starts.map(start => getPitDepth(heights, start))
  return Math.max.apply(null, depths)
}

function getPitDepth(heights, start) {
  var min = getMinIndex(heights, start)
  var end = getEndIndex(heights, min)
  return Math.min(heights[start] - heights[min], heights[end] - heights[min])
}

function getEndIndex(heights, min) {
  var i
  for (i = min + 1; i < heights.length; i++) {
    if (heights[i] > heights[i + 1]) {
      return i
    }
  }
  return i - 1
}

function getMinIndex(heights, start) {
  var i
  for (i = start + 1; i < heights.length - 1; i++) {
    if (heights[i] < heights[i + 1]) {
      return i
    }
  }
  return i - 1
}

function getStartOfPits(heights) {
  var starts = []
  for (var i = 0; i < heights.length - 2; i++) {
    if (heights[i] > heights[i + 1]) {
      starts.push(i)
    }
  }
  return starts
}
