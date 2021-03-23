"use strict"

// the class that contains the library and all its functions
class TileConstructor {
    constructor() {
        this.curr_tile = 0
        this.tiles = []
        this.container = ''
    }

    // stores the added tile into the tiles array and returns the tile ID
    _getTileID() {
        this.tiles.push({
            id: this.curr_tile,
            innerText: '',
            backgroundColor: 'white',
            boxShadow: '0 0 3pt 2pt black'
        })
        this.curr_tile += 1
        return this.curr_tile - 1
    }

    // a helper to shuffle arrays in place
    _shuffleArrayInPlace(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a
    }

    // sorts the tiles in the container by their ID
    sort(container) {
        let toSort = document.getElementById(container).children
        toSort = Array.prototype.slice.call(toSort, 0)

        toSort.sort(function (a, b) {
            let aord = parseInt(a.id)
            let bord = parseInt(b.id)
            return (aord > bord) ? 1 : -1
        })

        let parent = document.getElementById(container);
        parent.innerHTML = ""

        for (let i = 0, l = toSort.length; i < l; i++) {
            parent.appendChild(toSort[i])
        }
    }

    // shuffles the tiles in the container by their ID
    shuffle(container) {
        let toSort = document.getElementById(container).children
        toSort = Array.prototype.slice.call(toSort, 0)

        this._shuffleArrayInPlace(toSort)

        let parent = document.getElementById(container)
        parent.innerHTML = ""

        for (let i = 0, l = toSort.length; i < l; i++) {
            parent.appendChild(toSort[i])
        }
    }

    // initializes the canvas div
    initCanvas(container) {
        const canvas = $('#' + container)
        this.container = container

        canvas.css('display', 'grid')
        canvas.css('grid-gap', '30px')
        canvas.css('padding', '10px')
        canvas.css('grid-template-columns', '100px '.repeat(8))
        canvas.css('grid-auto-rows', '100px')
    }

    // adds a tile to the canvas
    addTile(container, title = 'Title', img_src = '') {
        const canvas = $('#' + container)

        const tile = document.createElement('div')
        tile.id = this._getTileID()
        tile.innerText = title
        tile.style.backgroundColor = 'white'
        tile.style.borderRadius = '5px'
        tile.style.boxShadow = '0 0 3pt 2pt black'
        tile.style.textAlign = 'center'
        tile.onmouseenter = function (event) {
            const target = event.target;
            target.style.boxShadow = '0 0 3pt 2pt cyan'
        }
        tile.onmouseleave = function (event) {
            const target = event.target;
            target.style.boxShadow = '0 0 3pt 2pt black'
        }
        tile.onclick = function (event) {
            alert('tile clicked (functionality not added yet)')
        }

        if (img_src !== '') {
            const img = document.createElement('img')
            img.src = img_src
            img.style.height = '80%'
            img.style.width = '100%'
            tile.append(img)
        }

        canvas.append(tile)
    }
}