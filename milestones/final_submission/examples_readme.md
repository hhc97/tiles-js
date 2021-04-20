# Usage examples

## Quick Navigation
- [Home](https://tiles-js.herokuapp.com/)
- [Examples](https://tiles-js.herokuapp.com/examples.html)


### Basic functionality
The simplest thing you can do with this library is just to create a bunch of tiles.  

Note that before you get started, you should have an emtpy `<div>` set up in your html file with a unique `id` that you can pass to the library. It can be as simple as this:
```html
<div id='demo'></div>
```
Once you have a div ready, you can write a few simple lines of code to make some tiles:
```javascript
// instantiate a new Tiles instance
const lib = new Tiles({
    container: 'demo',
    animate_factor: 1.1,
    num_horizontal: 8  // caps the max number of horizontal tiles
})
lib.addTile({ title: 'Here' })
lib.addTile({ title: 'are' })
lib.addTile({ title: 'some' })
lib.addTile({ title: 'tiles.' })

// adds a listener to a button that allows more tiles to be added
const button = $('#add_demo1')
button[0].addEventListener("click", function () {
    lib.addTile({ title: 'new tile' })
})
```
Result:  
