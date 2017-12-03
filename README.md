# pull-read-queue

treat a pull-stream as a queue.

## example

``` js
//min: start reading again if we have less than `min` items in the queue.
//max: stop reading when have `max` or more items in the queue.
var queue = ReadQueue(min=5, max = 10, onData)

pull(
  source,
  queue
)

function onData(data) {
  if(output.length < 20)
    output.push(queue.shift()) //etc!
}

```



## License

MIT


