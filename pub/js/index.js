"use strict"

// const lib = new TileConstructor('demo1', 300, 150, true, true)
const lib = new TileConstructor({
    container: 'demo1',
    width: 300,
    height: 150,
    color_cycle: true
})

lib.addTile({
    img_src: 'static/welcome_word.PNG'
})
lib.addTile({
    img_src: 'static/to_word.PNG'
})
lib.addTile({
    img_src: 'static/tiles_word.PNG'
})


// const lib2 = new TileConstructor('demo2', 200, 100, true, false)
const lib2 = new TileConstructor({
    container: 'demo2',
    width: 200,
    height: 100
})

lib2.addTile({ title: 'API' })
lib2.addTile({
    title: 'Usage examples',
    clickLink: './examples.html'
})