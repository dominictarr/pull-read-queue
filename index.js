var Pause = require('pull-pause')
var Drain = require('pull-stream/sinks/drain')
var pull = require('pull-stream/pull')

module.exports = function (min, max, onData) {
  min = min || 5
  max = max || 25
  var pausable = Pause(), queue = []
  pausable.resume()

  var stream = pull(
    pausable,
    Drain(function (data) {
      queue.push(data)
      if(queue.length > max)
        pausable.pause()
      else
        onData(data)
    })
  )

  stream.shift = function () {
    var data = queue.shift()
    if(queue.length <= min) pausable.resume()
    return data
  }

  stream.getLength = function () {
    return queue.length
  }

  return stream

}








