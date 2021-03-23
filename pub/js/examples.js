"use strict"

const lib = new TileConstructor()


const d1 = 'demo1'
lib.initCanvas(d1)
lib.addTile(d1, 'Here')
lib.addTile(d1, 'are')
lib.addTile(d1, 'some')
lib.addTile(d1, 'tiles.')

const d2 = 'demo2'
lib.initCanvas(d2)
lib.addTile(d2, 'Orange', 'https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg')
lib.addTile(d2, 'Apple', 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?w=641&ssl=1')
lib.addTile(d2, 'Lychee', 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/lychees-1296x728-feature.jpg')

const d3 = 'demo3'
lib.initCanvas(d3)
for (let i = 0; i < 5; i++) {
    lib.addTile(d3, i)
}

// adding listeners to demo buttons
const button = $('#add_demo1')
button[0].addEventListener("click", function () {
    lib.addTile(d1, 'new tile')
})
const shuffle = $('#shuffle')
shuffle[0].addEventListener("click", function () {
    lib.shuffle(d3)
})
const sort = $('#sort')
sort[0].addEventListener("click", function () {
    lib.sort(d3)
})