# Usage examples

## Quick Navigation
- [Home](https://tiles-js.herokuapp.com/)
- [Basic demo](#basic-functionality)
- [Online shop](#e-commerce)
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
    num_horizontal: 6  // caps the max number of horizontal tiles
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
Rendered output:  

### E-commerce
Perhaps you are selling items in an online store and would like a quick way to display the items you have for sale, you can quickly display your items with tiles and even customize their hover color:
```javascript
// instantiate a new Tiles instance
const lib2 = new Tiles({
    container: 'demo',
    width: 150,
    height: 150
})
lib2.addTile({
    title: 'Orange',
    img_src: 'https://www.mz-store.com/blog/wp-content/uploads_en/2020/11/shutterstock_342874121.jpg',
    hover_color: 'orange',
    clickLink: ''  // remember to add links to each product page
})
lib2.addTile({
    title: 'Apple',
    img_src: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?w=641&ssl=1',
    hover_color: 'red'
})
lib2.addTile({
    title: 'Lychee',
    img_src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/lychees-1296x728-feature.jpg',
    hover_color: 'pink'
})
lib2.addTile({
    title: 'Avocado',
    img_src: 'https://www.tasteofhome.com/wp-content/uploads/2018/02/shutterstock_263066297.jpg',
    hover_color: 'limegreen'
})
lib2.addTile({
    title: 'Grapes!',
    img_src: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/07/marselan-wiki-min.jpg',
    hover_color: 'purple'
})
```
Rendered output:  
