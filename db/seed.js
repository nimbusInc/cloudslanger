'use strict'

const db = require('APP/db'),
    { User, Product, Review, Order, Category, Promise } = db,
    { mapValues } = require('lodash')

function seedEverything() {
    const seeded = {
        users: users(),
        categories: categories()
    }

    seeded.orders = orders(seeded)
    seeded.products = products(seeded)
    seeded.reviews = reviews(seeded)
    
    return Promise.props(seeded)
}

const categories = seed(Category, ({
    storm: { category: 'storm' },
    fog: { category: 'fog' },
    precipitation: { category: 'precipitation' },
    frost: { category: 'frost' },
    dry: { category: 'dry' },
    cloud: { category: 'clouds' }
}))

const users = seed(User, ({

    god: {
        email: 'god@example.com',
        name: 'So many names',
        password_digest: '1234',
        role: 'admin'
    },
    barack: {
        name: 'Barack Obama',
        email: 'barack@example.gov',
        password: '12334',
        role: 'admin'

    },
    truman: {
        name: 'Truman Purnell',
        email: 'truman@example.gov',
        password: '1234',
        role: 'user'
    },

    eli: {
        name: 'Eli Mauskopf',
        email: 'eli@head.gov',
        role: 'user',
        password: '1234'
    },

    andrew: {
        name: 'andrew atkinson',
        email: 'andrew@blue.dog',
        role: 'guest',
        password: '1234'
    }
}))

const products = seed(Product, ({ categories })  => ({
    storm: {
        name: 'storm',
        description: 'its loud',
        category_id: categories.storm.id,
        img: 'https://s-media-cache-ak0.pinimg.com/originals/37/6d/44/376d442176f0af9dd2112cf8e5ea4937.jpg',
        price: 100,
        quantity: 4
    },
    cloud: {
        name: 'cloud',
        description: 'a nice ol cloud',
        category_id: categories.cloud.id,
        img: 'https://cdn.pixabay.com/photo/2011/06/21/14/13/cloud-8075_960_720.jpg',
        price: 50,
        quantity: 45
    },
    cumulonimbus: {
        name: 'cumulonimbus',
        description: 'Cumulonimbus, from the Latin cumulus ("heap") and nimbus ("rainstorm", "storm cloud"), is a dense towering vertical cloud[1] associated with thunderstorms and atmospheric instability, forming from water vapor carried by powerful upward air currents. If observed during a storm, these clouds may be referred to as thunderheads. Cumulonimbus can form alone, in clusters, or along cold front squall lines. These clouds are capable of producing lightning and other dangerous severe weather, such as tornadoes. Cumulonimbus progress from overdeveloped cumulus congestus clouds and may further develop as part of a supercell. Cumulonimbus is abbreviated Cb.',
        category_id: categories.cloud.id,
        img: 'https://commons.wikimedia.org/wiki/File:Fly00890_-_Flickr_-_NOAA_Photo_Library.jpg#/media/File:Fly00890_-_Flickr_-_NOAA_Photo_Library.jpg',
        price: 500,

        quantity: 25
    },
    Cirrostratus: {
        name: 'Cirrostratus',
        description: 'Cirrostratus /ˌsɪroʊˈstrɑːtəs/ is a high-level, very thin, generally uniform stratiform genus-type of cloud, composed of ice-crystals. It is difficult to detect and is capable of forming halos when the cloud takes the form of thin cirrostratus nebulosus. The cloud has a fibrous texture with no halos if it is thicker cirrostratus fibratus. On the approach of a frontal system, the cirrostratus often begins as nebulosus and turns to fibratus. If the cirrostratus begins as fragmented fibratus it often means the front is weak. Cirrostratus is usually located above 5.5 km (18,000 ft). Its presence indicates a large amount of moisture in the upper atmosphere.',
        category_id: categories.cloud.id,
        img: 'https://commons.wikimedia.org/wiki/File:Cirrostratus_with_mock_sun.jpg#/media/File:Cirrostratus_with_mock_sun.jpg',
        price: 200,
        quantity: 5
    },
    rain: {
        name: 'rain',
        description: 'water from clouds',
        category_id: categories.precipitation.id,
        img: 'http://dreamicus.com/data/rain/rain-01.jpg',
        price: 50,
        quantity: 3
    },
    haboob: {
        name: 'haboob',
        description: 'A haboob is a type of intense dust storm carried on an atmospheric gravity current, also known as a weather front. Haboobs occur regularly in arid regions throughout the world.',
        category_id: categories.precipitation.id,
        img: 'https://commons.wikimedia.org/wiki/File:Haboob_Ransom_Canyon_Texas_2009.jpg#/media/File:Haboob_Ransom_Canyon_Texas_2009.jpg',
        price: 50,
        quantity: 3
    }

}))

const orders = seed(Order, ({ users, products }) => ({
    order1: {
        user_id: users.god.id,
    },
    order2: {
        user_id: users.barack.id,
    },
    order3: {
        user_id: users.truman.id,
    },
    order4: {
        user_id: users.eli.id,
    }
}))

const reviews = seed(Review, ({ users, products }) => ({
    r1: {
        body: `Actually gentrify etsy tbh biodiesel meh vice street art stumptown photo booth hexagon knausgaard pok pok lyft. Food truck bicycle rights helvetica activated charcoal keffiyeh. Slow-carb fingerstache retro, woke cliche mixtape jean shorts direct trade portland. Literally messenger bag marfa irony master cleanse scenester vice brooklyn lyft. Actually man braid disrupt whatever church-key swag. Meditation bespoke pinterest, food truck normcore pour-over fingerstache fanny pack polaroid kale chips. Health goth kinfolk cred direct trade, lumbersexual butcher listicle. 90's yr truffaut cold-pressed chartreuse affogato vinyl vaporware tbh next level wayfarers. Hella hell of succulents four dollar toast food truck cronut deep v celiac. PBR&B health goth jean shorts cloud bread, +1 kitsch affogato salvia XOXO chillwave. Keytar pinterest paleo marfa skateboard swag, tote bag ethical ugh kickstarter. Cred bespoke skateboard cloud bread put a bird on it pickled.`,
        star: 3,
        user_id: users.god.id,
        product_id: products.storm.id
    },
    r2: {
        body: `Yr church-key kombucha, lomo godard succulents organic banh mi hashtag hella vegan waistcoat man braid yuccie. Ethical fixie microdosing coloring book iPhone, shaman jianbing paleo raw denim. Hashtag farm-to-table vexillologist poke single-origin coffee snackwave franzen man bun tote bag neutra freegan crucifix PBR&B drinking vinegar yr. Kinfolk street art letterpress, cloud bread taiyaki chartreuse hammock authentic. XOXO scenester biodiesel brunch poutine af. Chicharrones vinyl everyday carry, franzen mustache YOLO try-hard vape taxidermy celiac. Palo santo helvetica selfies yr 8-bit williamsburg stumptown authentic listicle deep v food truck. Cray freegan taxidermy skateboard, single-origin coffee microdosing hashtag health goth shabby chic scenester vaporware pinterest tumblr keffiyeh cardigan. Tacos sriracha normcore, pickled fixie seitan food truck art party echo park. Chambray sustainable deep v lomo.`,
        star: 4,
        user_id: users.truman.id,
        product_id: products.rain.id
    },

    r3: {
        body: `Ethical kickstarter enamel pin intelligentsia wayfarers, waistcoat taiyaki pok pok selfies mustache. Kogi sriracha pabst, kale chips slow-carb jean shorts humblebrag glossier pok pok chicharrones pinterest PBR&B lomo. Helvetica church-key celiac YOLO vape umami. Banh mi microdosing cold-pressed gentrify hot chicken. Cronut truffaut humblebrag kogi kickstarter shaman shoreditch biodiesel tumblr. Artisan affogato pug tacos. Af tumeric small batch locavore you probably haven't heard of them lyft photo booth microdosing asymmetrical literally pork belly. Kitsch waistcoat semiotics YOLO literally, pickled activated charcoal vexillologist humblebrag mixtape cred everyday carry meditation. VHS affogato taxidermy succulents, venmo occupy austin bespoke keffiyeh flexitarian tattooed pok pok man bun pabst. Cloud bread XOXO before they sold out chambray slow-carb VHS subway tile whatever selfies kitsch yuccie flexitarian. Intelligentsia scenester chia palo santo hammock. Master cleanse pitchfork cornhole meditation selfies scenester franzen waistcoat fixie etsy mixtape wolf schlitz tattooed. Mumblecore hella mustache, cronut wayfarers portland slow-carb. Snackwave asymmetrical ugh single-origin coffee narwhal truffaut selvage pork belly kickstarter 90's iPhone poutine succulents leggings locavore. Ethical letterpress salvia distillery seitan narwhal.`,
        star: 5,
        user_id: users.eli.id,
        product_id: products.cloud.id
    }
}))

if (module === require.main) {
    db.didSync
        .then(() => db.sync({ force: true }))
        .then(seedEverything)
        .finally(() => process.exit(0))
}
class BadRow extends Error {
    constructor(key, row, error) {
        super(error)
        this.cause = error
        this.row = row
        this.key = key
    }
    toString() {
        return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
    }
}
// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
    return (others = {}) => {
        if (typeof rows === 'function') {
            rows = Promise.props(
                mapValues(others,
                    other =>
                        // Is other a function? If so, call it. Otherwise, leave it alone.
                        typeof other === 'function' ? other() : other)
            ).then(rows)
        }
        return Promise.resolve(rows)
            .then(rows => Promise.props(
                Object.keys(rows)

                    .map(key => {
                        const row = rows[key]
                        return {
                            key,
                            value: Promise.props(row)
                                .then(row => Model.create(row)
                                    .catch(error => { throw new BadRow(key, row, error) })
                                )
                        }
                    }).reduce(
                    (all, one) => Object.assign({}, all, {
                        [one.key]: one.value
                    }), {}
                    )
            ))
            .then(seeded => {
                console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
                return seeded
            }).catch(error => {
                console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
            })
    }
}

module.exports = Object.assign(seed, {  products,reviews, orders ,users, categories })
