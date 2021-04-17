"use strict"

const lib = new TileConstructor('demo1')
lib.addTile('Here')
lib.addTile('are')
lib.addTile('some')
lib.addTile('tiles.')


const lib2 = new TileConstructor('demo2')
lib2.addTile('Orange', 'https://lh3.googleusercontent.com/proxy/uPk_r8ogi6TMP6EeRxXIR4xi97eEiQXqHEcxFxiW4HV4zP7uEVoF6zXGzG-Fqh38iiufmWPpN6RkjZvio6Ezw6JLJa8niQhG50Y4KuPNMw', 'orange')
lib2.addTile('Apple', 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?w=641&ssl=1', 'red')
lib2.addTile('Lychee', 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/lychees-1296x728-feature.jpg', 'pink')
lib2.addTile('Avocado', 'https://www.tasteofhome.com/wp-content/uploads/2018/02/shutterstock_263066297.jpg', 'limegreen')
lib2.addTile('Grapes!', 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/07/marselan-wiki-min.jpg', 'purple')


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



const lib3 = new TileConstructor('demo3')
for (let i = 1; i < 14; i++) {
    lib3.addTile(i, demoPics[i - 1])
}

// adding listeners to demo buttons
const button = $('#add_demo1')
button[0].addEventListener("click", function () {
    lib.addTile('new tile')
})
const shuffle = $('#shuffle')
shuffle[0].addEventListener("click", function () {
    lib3.shuffle()
})
const sort = $('#sort')
sort[0].addEventListener("click", function () {
    lib3.sort()
})