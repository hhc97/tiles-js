/* tiles.js */
"use strict";

// library code
(function (global, document, $) {

    // this function is currently only in the scope of the anonymous function at the moment.
    function TileConstructor(container) {
        this.tiles = []
        this.container = container

        const canvas = $('#' + container)
        canvas.css('display', 'grid')
        canvas.css('grid-gap', '30px')
        canvas.css('padding', '10px')
        canvas.css('grid-template-columns', '100px '.repeat(8))
        canvas.css('grid-auto-rows', '100px')
    }

    /* Start of private properties/functions */
    let _curr_tile = 0

    function _getTileID() {
        _curr_tile++
        return _curr_tile - 1
    }

    // a helper to shuffle arrays in place
    function _shuffleArrayInPlace(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]]
        }
        return a
    }
    /* End of private properties/functions */

    TileConstructor.prototype = {
        // sorts the tiles in the container by their ID
        sort: function () {
            const container = this.container
            let toSort = document.getElementById(container).children
            toSort = Array.prototype.slice.call(toSort, 0)

            toSort.sort(function (a, b) {
                let aord = parseInt(a.id)
                let bord = parseInt(b.id)
                return (aord > bord) ? 1 : -1
            })

            let parent = document.getElementById(container)
            parent.innerHTML = ""

            for (let i = 0, l = toSort.length; i < l; i++) {
                parent.appendChild(toSort[i])
            }
        },

        // shuffles the tiles in the container by their ID
        shuffle: function () {
            const container = this.container
            let toSort = document.getElementById(container).children
            toSort = Array.prototype.slice.call(toSort, 0)

            _shuffleArrayInPlace(toSort)

            let parent = document.getElementById(container)
            parent.innerHTML = ""

            for (let i = 0, l = toSort.length; i < l; i++) {
                parent.appendChild(toSort[i])
            }
        },

        // adds a tile to the canvas
        addTile: function (title = 'Title', img_src = '', hover_color = 'cyan') {
            const canvas = $('#' + this.container)

            const tile = document.createElement('div')
            tile.id = _getTileID()
            tile.innerText = title
            tile.style.backgroundColor = 'white'
            tile.style.borderRadius = '5px'
            tile.style.boxShadow = '0 0 3pt 2pt black'
            tile.style.textAlign = 'center'
            tile.onmouseenter = function (event) {
                const target = event.target
                target.style.boxShadow = `0 0 3pt 2pt ${hover_color}`
            }
            tile.onmouseleave = function (event) {
                const target = event.target
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
    global.TileConstructor = global.TileConstructor || TileConstructor

})(window, window.document, $);