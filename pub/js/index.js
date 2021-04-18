"use strict"

const lib = new TileConstructor('demo1', 200, 100, true, true)

lib.addTile({
    img_src: 'static/welcome_word.PNG'
})
lib.addTile({
    img_src: 'static/to_word.PNG'
})
lib.addTile({
    img_src: 'static/tiles_word.PNG'
})


const lib2 = new TileConstructor('demo2', 200, 100, true, false)

lib2.addTile({ title: 'API' })
lib2.addTile({
    title: 'Usage examples',
    clickLink: './examples.html'
})