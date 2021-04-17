/* tiles.js */
"use strict";

// library code
(function (global, document, $) {

    // this function is currently only in the scope of the anonymous function at the moment.
    function TileConstructor(container, width = 100, height = 100) {
        this.tiles = []
        this.container = container
        this.width = width
        this.height = height
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const maxTile = Math.floor(vw / (width + 35))

        const canvas = $('#' + container)
        canvas.css('display', 'grid')
        canvas.css('grid-gap', '30px')
        canvas.css('padding', '10px')
        canvas.css('grid-template-columns', `${width}px `.repeat(maxTile))
        canvas.css('grid-auto-rows', `${height}px`)
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

    // helper to animate tile size changes
    function _animateChange(id, startW, startH, endW, endH) {
        let elem = document.getElementById(id);
        let w = startW
        let h = startH
        let animateID = setInterval(animate, 5);
        function animate() {
            if (w === endW && h === endH) {
                clearInterval(animateID);
            } else {
                w < endW ? w++ : w === endW || w--
                h < endH ? h++ : h === endH || h--
                elem.style.width = w + "px";
                elem.style.height = h + "px";
            }
        }
    }

    // functions to help with drag and drop functionality
    function drag(ev) {
        ev.dataTransfer.setData("dragID", ev.target.id);
        ev.dataTransfer.setData("dragParent", ev.target.parentElement.id);
    }
    function drop(ev) {
        ev.preventDefault();
        const dragged = ev.dataTransfer.getData("dragID");
        const draggedParentID = ev.dataTransfer.getData("dragParent");
        let child = document.getElementById(ev.target.id)
        if (child && child.parentElement.id === draggedParentID) {
            const container = draggedParentID
            let toSort = document.getElementById(container).children
            toSort = Array.prototype.slice.call(toSort, 0)

            const first = toSort.findIndex((element) => element.id === dragged)
            const second = toSort.findIndex((element) => element.id === ev.target.id)

            if (first > -1 && second > -1) {
                [toSort[first], toSort[second]] = [toSort[second], toSort[first]]
            }

            let parent = document.getElementById(container)
            parent.innerHTML = ""

            for (let i = 0, l = toSort.length; i < l; i++) {
                parent.appendChild(toSort[i])
            }
        }
    }

    // helper for getting a short delay in code execution
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
            tile.draggable = 'true'
            tile.onmouseenter = (event) => {
                const target = event.target
                target.style.boxShadow = `0 0 3pt 2pt ${hover_color}`
                target.style.zIndex = 2
                _animateChange(target.id, this.width, this.height,
                    Math.ceil(1.2 * this.width), Math.ceil(1.2 * this.height))
            }
            tile.onmouseleave = async (event) => {
                const target = event.target
                target.style.boxShadow = '0 0 3pt 2pt black'
                target.style.zIndex = 1
                await sleep(10)
                _animateChange(target.id, Math.ceil(1.2 * this.width),
                    Math.ceil(1.2 * this.height), this.width, this.height)
            }
            tile.onclick = function (event) {
                alert('tile clicked (functionality not added yet)')
            }
            // add drag and drop functionality
            tile.ondrop = drop
            tile.ondragover = (ev) => { ev.preventDefault() }
            tile.ondragstart = drag

            if (img_src !== '') {
                const img = document.createElement('img')
                img.src = img_src
                img.style.height = '80%'
                img.style.width = '100%'
                img.style.pointerEvents = 'none'
                tile.append(img)
            }
            canvas.append(tile)
        }
    }
    global.TileConstructor = global.TileConstructor || TileConstructor

})(window, window.document, $);