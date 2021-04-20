# Usage examples

## Quick Navigation
- [Home](https://tiles-js.herokuapp.com/)
- [Basic demo](#basic-functionality)
- [Online shop](#e-commerce)
- [Shuffle and sort tiles](#shuffle-and-sort)
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

### Shuffle and sort
This library also comes with built-in shuffle and sorting functions. You can dynamically rearrange each tile easily with this function. Users can also drag and drop tiles to rearrange them as well. Here is a quick demo of this functionality with some playing cards:
```javascript
// some demo playing card pictures
const demoPics = ['https://upload.wikimedia.org/wikipedia/commons/2/25/Playing_card_spade_A.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Playing_card_heart_2.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Playing_card_club_3.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Playing_card_diamond_4.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_spade_5.svg',
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/Playing_card_heart_6.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/Playing_card_club_7.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_8.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/Playing_card_spade_9.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/98/Playing_card_heart_10.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/Playing_card_club_J.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Playing_card_diamond_Q.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Playing_card_spade_K.svg']

// instantiate a new Tiles instance
const lib3 = new Tiles({
    container: 'demo3',
    width: 90,
    height: 140,
    num_horizontal: 7
})
// add each card in a for loop
for (let i = 1; i < 14; i++) {
    lib3.addTile({
        title: i,
        img_src: demoPics[i - 1]
    })
}
// add listeners to buttons for shuffling and sorting
const shuffle = $('#shuffle')
shuffle[0].addEventListener("click", function () {
    lib3.shuffle()
})
const sort = $('#sort')
sort[0].addEventListener("click", function () {
    lib3.sort()
})
```
Rendered output:  
