/* tiles.js */
"use strict";

// library code
(function (global, document, $) {

    // this function is currently only in the scope of the anonymous function at the moment.
    function TileConstructor(container, width = 100, height = 100, animate = true, cycle = false) {
        this.tiles = []
        this.container = container
        this.width = width
        this.height = height
        this.animate = animate
        this.color_cycle = cycle
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
    function _animateChange(id, startW, startH, endW, endH, obj) {
        let elem = document.getElementById(id);
        let w = startW
        let h = startH
        let animateID = setInterval(animate, 5);
        obj.stopID = animateID
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

    // helper to get a random int between -max and max
    function _getRandomInt(max) {
        const rnd = Math.floor(Math.random() * max)
        const sign = Math.random()
        return sign > 0.5 ? -rnd : rnd
    }

    // helper to animate tile colors
    function _animateColor(id) {
        let elem = document.getElementById(id);
        setInterval(animate, 200);
        function animate() {
            const currShadow = elem.style.boxShadow
            const components = [...currShadow.matchAll(/[\d]+[,)]/g)]
            if (components.length === 3) {
                const change = 20
                const newR = Math.abs((parseInt(components[0]) + _getRandomInt(change))) % 255
                const newG = Math.abs((parseInt(components[1]) + _getRandomInt(change))) % 255
                const newB = Math.abs((parseInt(components[2]) + _getRandomInt(change))) % 255
                elem.style.boxShadow = `0 0 3pt 2pt rgb(${newR} ${newG} ${newB})`
            } else {
                const r = Math.abs(_getRandomInt(255))
                const g = Math.abs(_getRandomInt(255))
                const b = Math.abs(_getRandomInt(255))
                elem.style.boxShadow = `0 0 3pt 2pt rgb(${r}, ${g}, ${b})`
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
            tile.style.width = this.width + 'px'
            tile.style.height = this.height + 'px'
            tile.style.backgroundColor = 'white'
            tile.style.borderRadius = '5px'
            tile.style.boxShadow = '0 0 3pt 2pt black'
            tile.style.textAlign = 'center'
            tile.draggable = 'true'
            // add behavior for mouse hover events
            tile.onmouseenter = (event) => {
                const target = event.target
                if (!this.color_cycle) {
                    target.style.boxShadow = `0 0 3pt 2pt ${hover_color}`
                }
                target.style.zIndex = 2
                if (this.animate) {
                    const tile = this.tiles.find((element) => element.id === target.id)
                    // first stop any current animations, then start the new one
                    clearInterval(tile.stopID)
                    const currW = parseInt(target.style.width)
                    const currH = parseInt(target.style.height)
                    _animateChange(target.id, currW, currH,
                        Math.ceil(1.11 * this.width), Math.ceil(1.11 * this.height), tile)
                }
            }
            tile.onmouseleave = (event) => {
                const target = event.target
                if (!this.color_cycle) {
                    target.style.boxShadow = '0 0 3pt 2pt black'
                }
                target.style.zIndex = 1
                if (this.animate) {
                    const tile = this.tiles.find((element) => element.id === target.id)
                    // first stop any current animations, then start the new one
                    clearInterval(tile.stopID)
                    const currW = parseInt(target.style.width)
                    const currH = parseInt(target.style.height)
                    _animateChange(target.id, currW, currH, this.width, this.height, tile)
                }
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
                img.style.width = '100%'
                title ? img.style.height = '84%' : img.style.height = '100%'
                img.style.pointerEvents = 'none'
                tile.append(img)
            }
            canvas.append(tile)
            this.tiles.push({
                id: tile.id,
                stopID: -1
            })
            if (this.color_cycle) {
                _animateColor(tile.id)
            }
        }
    }
    global.TileConstructor = global.TileConstructor || TileConstructor

})(window, window.document, $);