// the class that contains the library and all its functions
class TileConstructor {
    constructor() {
        this.tiles = []
    }

    initCanvas(container) {
        const canvas = $('#' + container)

        // canvas.css('background-color', 'cyan')
        canvas.css('display', 'grid')
        canvas.css('grid-gap', '30px')
        canvas.css('padding', '10px')
        canvas.css('grid-template-columns', '100px '.repeat(8))
        canvas.css('grid-template-rows', '100px')
    }

    addTile(container, title = 'Title') {
        const canvas = $('#' + container)

        const tile = document.createElement('div')
        tile.innerText = title
        tile.style.backgroundColor = 'white'
        tile.style.borderRadius = '5px'
        tile.style.boxShadow = '0 0 3pt 2pt black'
        tile.style.textAlign = 'center'
        canvas.append(tile)
    }
}