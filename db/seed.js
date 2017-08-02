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
    storm: { name: 'storm' },
    fog: { name: 'fog' },
    precipitation: { name: 'precipitation' },
    frost: { name: 'frost' },
    dry: { name: 'dry' },
    cloud: { name: 'clouds' },
    weird: { name: 'weird' }
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
        email: 'truman.purnell@gmail.co',
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
    },
    justin: {
        name: 'Justin Pinero',
        email: 'justin@pinero.gov',
        role: 'user',
        password: '1c234'
    }
}))

const products = seed(Product, ({ categories }) => ({
    anticyclone: {
        name: 'Anticyclone',
        description: `An anticyclone (that is, opposite to a cyclone) is a weather phenomenon defined by the United States National Weather Service's glossary as "a large-scale circulation of winds around a central region of high atmospheric pressure, clockwise in the Northern Hemisphere, counterclockwise in the Southern Hemisphere". Effects of surface-based anticyclones include clearing skies as well as cooler, drier air. Fog can also form overnight within a region of higher pressure. Mid-tropospheric systems, such as the subtropical ridge, deflect tropical cyclones around their periphery and cause a temperature inversion inhibiting free convection near their center, building up surface-based haze under their base. Anticyclones aloft can form within warm core lows such as tropical cyclones, due to descending cool air from the backside of upper troughs such as polar highs, or from large scale sinking such as the subtropical ridge.`,
        category_id: categories.precipitation.id,
        img: '/assets/images/High_pressure_Area_Sep_08_2012.jpg',
        price: 150,
        quantity: 7
    },
    acidrain: {
        name: 'Acid Rain',
        description: `Acid rain is a rain or any other form of precipitation that is unusually acidic, meaning that it possesses elevated levels of hydrogen ions (low pH). It can have harmful effects on plants, aquatic animals and infrastructure. Acid rain is caused by emissions of sulfur dioxide and nitrogen oxide, which react with the water molecules in the atmosphere to produce acids. Some governments have made efforts since the 1970s to reduce the release of sulfur dioxide and nitrogen oxide into the atmosphere with positive results. Nitrogen oxides can also be produced naturally by lightning strikes, and sulfur dioxide is produced by volcanic eruptions. Acid rain has been shown to have adverse impacts on forests, freshwaters and soils, killing insect and aquatic life-forms, causing paint to peel, corrosion of steel structures such as bridges, and weathering of stone buildings and statues as well as having impacts on human health.`,
        category_id: categories.precipitation.id,
        img: '/assets/images/Cloud_formation_from_refinery_in_Curacao.jpg',
        price: 2555,
        quantity: 300
    },
    balllightning: {
        name: 'Ball Lightning',
        description: `Ball lightning is an unexplained atmospheric electrical phenomenon. The term refers to reports of luminous, spherical objects that vary from pea-sized to several meters in diameter. Though usually associated with thunderstorms, the phenomenon lasts considerably longer than the split-second flash of a lightning bolt. Many early reports claim that the ball eventually explodes, sometimes with fatal consequences, leaving behind the odor of sulfur.`,
        category_id: categories.storm.id,
        img: '/assets/images/Ball_lightning.jpg',
        price: 1250,
        quantity: 600
    },
    crowinstability: {
        name: 'Crow Instability',
        description: `In aerodynamics, the Crow Instability, or V.C.I. vortex crow instability, is an inviscid line-vortex instability, named after its discoverer S. C. Crow. The Crow instability is most commonly observed in the skies behind large aircraft such as the Boeing 747. It occurs when the wingtip vortices interact with contrails from the engines, producing visible distortions in the shape of the contrail.`,
        category_id: categories.weird.id,
        img: '/assets/images/Crow_instability_contrail_1-9-08.jpg',
        price: 8000,
        quantity: 30
    },
    diamondDust: {
        name: 'Diamond Dust',
        description: `Diamond dust is a ground-level cloud composed of tiny ice crystals. This meteorological phenomenon is also referred to simply as ice crystals and is reported in the METAR code as IC. Diamond dust generally forms under otherwise clear or nearly clear skies, so it is sometimes referred to as clear-sky precipitation. It is most commonly observed in Antarctica and the Arctic, but it can occur anywhere with a temperature well below freezing. In polar regions diamond dust may continue for several days without interruption.`,
        category_id: categories.frost.id,
        img: '/assets/images/diamonddust.jpg',
        price: 1250,
        quantity: 306
    },
    extratropicalcyclone: {
        name: 'Extratropical Cyclone',
        description: `Extratropical cyclones, sometimes called mid-latitude cyclones or wave cyclones, are low-pressure areas which, along with the anticyclones of high-pressure areas, drive the weather over much of the Earth. Extratropical cyclones are capable of producing anything from cloudiness and mild showers to heavy gales, thunderstorms, blizzards, and tornadoes. These types of cyclones are defined as large scale (synoptic) low pressure weather systems that occur in the middle latitudes of the Earth. In contrast with tropical cyclones, extratropical cyclones produce rapid changes in temperature and dew point along broad lines, called weather fronts, about the center of the cyclone.`,
        category_id: categories.storm.id,
        img: '/assets/images/Northwest_Pacific_cyclone_2017-01-10_0300Z.jpg',
        price: 1250,
        quantity: 86
    },
    indianSummer: {
        name: 'Indian Summer',
        description: `Indian summer is a period of unseasonably warm, dry weather that sometimes occurs in autumn in the Northern Hemisphere. The US National Weather Service defines this as weather conditions that are sunny and clear with above normal temperatures, occurring late-September to mid-November.[1] It is usually described as occurring after a killing frost.`,
        category_id: categories.dry.id,
        img: '/assets/images/IndianSummer.jpg',
        price: 667,
        quantity: 6
    },
    Kelvin: {
        name: 'Kelvin–Helmholtz',
        description: `The Kelvin–Helmholtz instability (after Lord Kelvin and Hermann von Helmholtz) can occur when there is velocity shear in a single continuous fluid, or where there is a velocity difference across the interface between two fluids. An example is wind blowing over water: The instability manifests in waves on the water surface. More generally, clouds, the ocean, Saturn's bands, Jupiter's Red Spot, and the sun's corona show this instability`,
        category_id: categories.cloud.id,
        img: '/assets/images/Saturn_Kelvin_Helmholtz.jpg',
        price: 667,
        quantity: 6
    },
    animals: {
        name: 'Rain of Animals',
        description: `Raining animals is a rare meteorological phenomenon in which flightless animals fall from the sky. Such occurrences have been reported in many countries throughout history.[1] One hypothesis is that tornadic waterspouts sometimes pick up creatures such as fish or frogs, and carry them for up to several miles. However, this aspect of the phenomenon has never been witnessed by scientists.`,
        category_id: categories.weird.id,
        img: '/assets/images/frogs.jpg',
        price: 666,
        quantity: 13
    },
    storm: {
        name: 'storm',
        description: `A storm is any disturbed state of an environment or astronomical body's atmosphere especially affecting its surface, and strongly implying severe weather. It may be marked by significant disruptions to normal conditions such as strong wind, Tornadoes, hail, thunder and lightning (a thunderstorm), heavy precipitation (snowstorm, rainstorm), heavy freezing rain (ice storm), strong winds (tropical cyclone, windstorm), or wind transporting some substance through the atmosphere as in a dust storm, blizzard, sandstorm, etc.`,
        category_id: categories.storm.id,
        img: '/assets/images/storm.jpg',
        price: 100,
        quantity: 4
    },
    Nimbostratus: {
        name: 'Nimbostratus',
        description: `Nimbostratus is a stratiform genus formerly classified as "Family C" low-level, but now considered by the World Meteorological Organization (WMO) to be a middle- or multi-level stratus type. Although it is usually a low-based cloud, it actually forms most commonly in the middle level of the troposphere and then spreads vertically into the low and high levels. This change in classification would once have made it a "Family D" cloud, but this style of nomenclature was discontinued by the WMO in 1956. Nimbostratus usually produces precipitation over a wide area. Nimbo- is from the Latin word nimbus, which denotes precipitation. It has a diffuse cloud base generally found anywhere from near surface in the low levels to about 3,000 m (9,800 ft) in the middle level of the troposphere. Although usually dark at its base, it often appears illuminated from within to a surface observer.`,
        category_id: categories.cloud.id,
        img: '/assets/images/nimbo.jpg',
        price: 50,
        quantity: 45
    },
    cumulonimbus: {
        name: 'cumulonimbus',
        description: 'Cumulonimbus, from the Latin cumulus ("heap") and nimbus ("rainstorm", "storm cloud"), is a dense towering vertical cloud[1] associated with thunderstorms and atmospheric instability, forming from water vapor carried by powerful upward air currents. If observed during a storm, these clouds may be referred to as thunderheads. Cumulonimbus can form alone, in clusters, or along cold front squall lines. These clouds are capable of producing lightning and other dangerous severe weather, such as tornadoes. Cumulonimbus progress from overdeveloped cumulus congestus clouds and may further develop as part of a supercell. Cumulonimbus is abbreviated Cb.',
        category_id: categories.cloud.id,
        img: '/assets/images/culmulo.jpg',
        price: 500,

        quantity: 25
    },
    Cirrostratus: {
        name: 'Cirrostratus',
        description: 'Cirrostratus /ˌsɪroʊˈstrɑːtəs/ is a high-level, very thin, generally uniform stratiform genus-type of cloud, composed of ice-crystals. It is difficult to detect and is capable of forming halos when the cloud takes the form of thin cirrostratus nebulosus. The cloud has a fibrous texture with no halos if it is thicker cirrostratus fibratus. On the approach of a frontal system, the cirrostratus often begins as nebulosus and turns to fibratus. If the cirrostratus begins as fragmented fibratus it often means the front is weak. Cirrostratus is usually located above 5.5 km (18,000 ft). Its presence indicates a large amount of moisture in the upper atmosphere.',
        category_id: categories.cloud.id,
        img: '/assets/images/Curious_Cirrostratus.JPG',
        price: 200,
        quantity: 5
    },
    rain: {
        name: 'rain',
        description: `Rain is liquid water in the form of droplets that have condensed from atmospheric water vapor and then precipitated—that is, become heavy enough to fall under gravity. Rain is a major component of the water cycle and is responsible for depositing most of the fresh water on the Earth. It provides suitable conditions for many types of ecosystems, as well as water for hydroelectric power plants and crop irrigation.The major cause of rain production is moisture moving along three-dimensional zones of temperature and moisture contrasts known as weather fronts. If enough moisture and upward motion is present, precipitation falls from convective clouds (those with strong upward vertical motion) such as cumulonimbus (thunder clouds) which can organize into narrow rainbands. In mountainous areas, heavy precipitation is possible where upslope flow is maximized within windward sides of the terrain at elevation which forces moist air to condense and fall out as rainfall along the sides of mountains. On the leeward side of mountains, desert climates can exist due to the dry air caused by downslope flow which causes heating and drying of the air mass. The movement of the monsoon trough, or intertropical convergence zone, brings rainy seasons to savannah climes. The urban heat island effect leads to increased rainfall, both in amounts and intensity, downwind of cities. Global warming is also causing changes in the precipitation pattern globally, including wetter conditions across eastern North America and drier conditions in the tropics.[citation needed] Antarctica is the driest continent. The globally averaged annual precipitation over land is 715 mm (28.1 in), but over the whole Earth it is much higher at 990 mm (39 in).[1] Climate classification systems such as the Köppen classification system use average annual rainfall to help differentiate between differing climate regimes. Rainfall is measured using rain gauges. Rainfall amounts can be estimated by weather radar.`,
        category_id: categories.precipitation.id,
        img: '/assets/images/rain.jpg',
        price: 50,
        quantity: 3
    },
    haboob: {
        name: 'haboob',
        description: 'A haboob is a type of intense dust storm carried on an atmospheric gravity current, also known as a weather front. Haboobs occur regularly in arid regions throughout the world.',
        category_id: categories.precipitation.id,
        img: '/assets/images/haboob-1.jpg',
        price: 50,
        quantity: 3
    },
    fog: {
        name: 'Fog',
        description: `Fog consists of visible cloud water droplets or ice crystals suspended in the air at or near the Earth's surface.[1] Fog can be considered a type of low-lying cloud and is heavily influenced by nearby bodies of water, topography, and wind conditions. In turn, fog has affected many human activities, such as shipping, travel, and warfare.`,
        category_id: categories.fog.id,
        img: '/assets/images/High_Desert_Fog.jpg',
        price: 56,
        quantity: 3000
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
        product_id: products.rain.id
    },

    r4: {
        body: `Shabby chic distillery tacos kickstarter plaid 90's pug godard migas tousled freegan 3 wolf moon affogato selfies. Retro raw denim four loko, post-ironic prism edison bulb truffaut blue bottle. Heirloom tumeric 3 wolf moon gluten-free next level artisan mumblecore vice man braid taxidermy plaid cliche affogato. Jean shorts prism listicle neutra green juice hell of aesthetic. IPhone austin single-origin coffee umami woke chillwave. Semiotics food truck flexitarian, bushwick pug hammock everyday carry ennui artisan. Selfies enamel pin synth distillery meggings narwhal. `,
        star: 3,
        user_id: users.god.id,
        product_id: products.storm.id
    },
    r5: {
        body: `Chillwave echo park trust fund, sartorial celiac seitan thundercats squid shabby chic irony. Schlitz kickstarter echo park gluten-free leggings blog. `,
        star: 2,
        user_id: users.andrew.id,
        product_id: products.rain.id
    },
    r6: {
        body: `sartorial celiac seitan thundercats squid shabby chic irony.`,
        star: 4,
        user_id: users.eli.id,
        product_id: products.haboob.id
    },
    r7: {
        body: `Celiac literally tbh street art humblebrag, single-origin coffee tumeric ramps synth meggings +1 hot chicken 3 wolf moon. Plaid vice jean shorts four dollar toast fashion axe deep v. Kombucha brooklyn vinyl trust fund gastropub wayfarers wolf small batch distillery tumblr poutine you probably haven't heard of them bushwick. Gastropub affogato mumblecore, quinoa bespoke keffiyeh enamel pin single-origin coffee beard tumeric vaporware la croix. Vinyl butcher affogato everyday carry hot chicken bicycle rights locavore pork belly viral gastropub brunch crucifix literally.`,
        star: 4,
        user_id: users.eli.id,
        product_id: products.haboob.id
    },
    r8: {
        body: `Kickstarter humblebrag freegan, slow-carb occupy poutine taiyaki cardigan pug. Godard kinfolk pop-up pug actually single-origin coffee hoodie salvia forage YOLO organic biodiesel farm-to-table four loko street art. Cliche irony chillwave leggings, skateboard knausgaard tote bag af tbh poutine hella YOLO vegan jianbing four loko. Shoreditch af copper mug pickled raclette, everyday carry plaid kale chips pinterest. Vape lomo echo park freegan. Raw denim pitchfork vegan waistcoat fingerstache cardigan. `,
        star: 2,
        user_id: users.andrew.id,
        product_id: products.animals.id
    },
    r9: {
        body: `Portland venmo four dollar toast dreamcatcher, XOXO tacos mixtape sustainable direct trade taiyaki pinterest art party helvetica 90's. `,
        star: 5,
        user_id: users.barack.id,
        product_id: products.cumulonimbus.id
    },
    r10: {
        body: `Roof party ethical franzen, farm-to-table organic celiac fam messenger bag pitchfork bespoke microdosing iPhone pickled waistcoat umami. Offal DIY wayfarers, meditation helvetica YOLO leggings copper mug glossier hella. `,
        star: 1,
        user_id: users.truman.id,
        product_id: products.animals.id
    },
    r11: {
        body: `Shoreditch tattooed wolf, meh artisan poutine man bun ugh meditation fashion axe fam vape coloring book kitsch plaid. Keytar listicle thundercats readymade, plaid drinking vinegar tousled green juice vexillologist seitan flannel organic humblebrag snackwave. Plaid four loko biodiesel man braid gluten-free gentrify chambray subway tile.`,
        star: 4,
        user_id: users.truman.id,
        product_id: products.Kelvin.id
    },
    r12: {
        body: `Man bun pok pok paleo food truck actually. Letterpress pour-over yr succulents dreamcatcher, flannel waistcoat hexagon hammock.`,
        star: 2,
        user_id: users.justin.id,
        product_id: products.anticyclone.id
    },
    r13: {
        body: `Tote bag taxidermy street art glossier unicorn. Art party neutra man braid messenger bag tilde lumbersexual church-key polaroid bicycle rights +1 health goth farm-to-table. Hashtag pok pok irony twee. Brunch intelligentsia deep v, four loko polaroid meh church-key pok pok mlkshk actually. Skateboard tacos quinoa bespoke taxidermy tousled umami chillwave twee sartorial YOLO you probably haven't heard of them migas shaman XOXO.`,
        star: 5,
        user_id: users.andrew.id,
        product_id: products.balllightning.id
    },
    r14: {
        body: `Tote bag street art glossier unicorn. Four loko polaroid meh Skateboard tacos quinoa bespoke taxidermy tousled umami chillwave twee sartorial YOLO you probably haven't heard of them migas shaman XOXO.`,
        star: 5,
        user_id: users.justin.id,
        product_id: products.balllightning.id
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

module.exports = Object.assign(seed, { products, reviews, orders, users, categories })
