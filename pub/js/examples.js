"use strict"

const lib = new TileConstructor('demo1', 100, 100, true, true)
lib.addTile({ title: 'Here' })
lib.addTile({ title: 'are' })
lib.addTile({ title: 'some' })
lib.addTile({ title: 'tiles.' })

const button = $('#add_demo1')
button[0].addEventListener("click", function () {
    lib.addTile({ title: 'new tile' })
})


const lib2 = new TileConstructor('demo2', 200, 200)
lib2.addTile({
    title: 'Orange',
    img_src: 'https://www.mz-store.com/blog/wp-content/uploads_en/2020/11/shutterstock_342874121.jpg',
    hover_color: 'orange'
})
lib2.addTile({
    title: 'Apple',
    img_src: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?w=641&ssl=1',
    hover_color: 'red'
})
lib2.addTile({
    title: 'Lychee',
    img_src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/lychees-1296x728-feature.jpg',
    hover_color: 'pink'
})
lib2.addTile({
    title: 'Avocado',
    img_src: 'https://www.tasteofhome.com/wp-content/uploads/2018/02/shutterstock_263066297.jpg',
    hover_color: 'limegreen'
})
lib2.addTile({
    title: 'Grapes!',
    img_src: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/07/marselan-wiki-min.jpg',
    hover_color: 'purple'
})


// some demo playing card pictures
const demoPics = ['https://upload.wikimedia.org/wikipedia/commons/2/25/Playing_card_spade_A.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Playing_card_heart_2.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Playing_card_club_3.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Playing_card_diamond_4.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_spade_5.svg',
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/Playing_card_heart_6.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/Playing_card_club_7.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_8.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/Playing_card_spade_9.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/98/Playing_card_heart_10.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/Playing_card_club_J.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Playing_card_diamond_Q.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Playing_card_spade_K.svg']


const lib3 = new TileConstructor('demo3', 180, 280)
for (let i = 1; i < 14; i++) {
    lib3.addTile({
        title: i,
        img_src: demoPics[i - 1]
    })
}

const shuffle = $('#shuffle')
shuffle[0].addEventListener("click", function () {
    lib3.shuffle()
})
const sort = $('#sort')
sort[0].addEventListener("click", function () {
    lib3.sort()
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let prev_tile = null

async function test(data) {
    lib4.disable(data.id)
    if (!prev_tile) {
        prev_tile = {
            id: data.id,
            img: data.curr_img
        }
        return
    }
    let score = document.getElementById('score')
    if (data.id !== prev_tile.id && data.curr_img === prev_tile.img) {
        score.innerText = parseInt(score.innerText) + 10
        prev_tile = null
    } else {
        lib4.disableAll()
        await sleep(800)
        lib4.enableAll()
        if (prev_tile && data) {
            lib4.flip(prev_tile.id)
            lib4.flip(data.id)
            lib4.enable(prev_tile.id)
            lib4.enable(data.id)
            score.innerText = parseInt(score.innerText) - 5
        }
        prev_tile = null
    }
}

const matchPics = ['static/cat_ball.jpg',
    'static/cat_walk.jpg',
    'static/cat_walk.jpg',
    'static/cat_lie.jpg',
    'static/cat_ball.jpg',
    'static/cat_lie.jpg']

const lib4 = new TileConstructor('demo4', 200, 200)
for (let i = 0; i < matchPics.length; i++) {
    lib4.addTile({
        title: 'Click me!',
        img_src: 'static/question_mark.PNG',
        alt_img: matchPics[i],
        click_callback: test
    })

}
