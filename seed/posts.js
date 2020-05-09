const db = require('../db')
const Post = require('../models/post')


db.on('error', console.error.bind(console, 'MongoDB connection error'))

const haha = "😂"
const heart = "💖"
const sad = "😓"
const thumb = "👍"
const lorem = "Massa massa ultricies mi quis hendrerit dolor magna eget est. Eget nullam non nisi est sit amet facilisis. Consectetur purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget duis at tellus at urna condimentum mattis pellentesque id. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Tempor orci eu lobortis elementum nibh tellus. Urna neque viverra justo nec. At urna condimentum mattis pellentesque id nibh. Vestibulum mattis ullamcorper velit sed. Porttitor massa id neque aliquam vestibulum morbi. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus."


const main = async () => {
    const posts =
        [
            {
                "title": "Sir Cumference",
                "imgURL": "https://i.imgur.com/2b9aaT7.jpg",
                "description": lorem,
                "reaction": haha,
            },
            {
                "title": "doggo",
                "imgURL": "https://i.imgur.com/kkDYbHZ.jpg",
                "description": lorem,
                "reaction": heart,
            },
            {
                "title": "Zippo",
                "imgURL": "https://i.imgur.com/HGTmWFr.jpg",
                "description": lorem,
                "reaction": thumb,
            },
            {
                "title": "Sad Meme",
                "imgURL": "https://i.imgur.com/6qwJSwY.jpg",
                "description": lorem,
                "reaction": sad,
            },
        ]
    await Post.insertMany(posts)
    console.log("Created Posts")
}

const run = async () => {
    await main()
    db.close()
}
run();
