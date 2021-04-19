"use strict"

const lib = new Tiles({
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


const lib2 = new Tiles({
    container: 'demo2',
    width: 200,
    nodrag: true
})

lib2.addTile({
    title: 'API / Documentation',
    img_src: 'static/documentation.PNG',
    clickLink: './api-v1.html'
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