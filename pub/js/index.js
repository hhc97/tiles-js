"use strict"

const lib = new TileConstructor({
    container: 'demo1',
    width: 300,
    height: 150,
    color_cycle: true,
    tile_gap: 80,
    animate_factor: 1.08
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


const lib2 = new TileConstructor({
    container: 'demo2',
    width: 200,
    nodrag: true
})

lib2.addTile({
    title: 'API',
    img_src: 'static/api.PNG'
})
lib2.addTile({
    title: 'Usage examples',
    clickLink: './examples.html',
    img_src: 'static/examples.PNG'
})
lib2.addTile({
    title: 'Download source',
    clickLink: './js/tiles.js',
    img_src: 'static/download.PNG'
})