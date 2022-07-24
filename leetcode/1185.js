const distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) {
    const temp = start
    start = destination
    destination = temp
  }
  let sum1 = 0; let sum2 = 0
  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      sum1 += distance[i]
    } else {
      sum2 += distance[i]
    }
  }
  return Math.min(sum1, sum2)
}
