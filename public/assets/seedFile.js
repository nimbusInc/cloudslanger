//Basic seed file with products and filters

const state =  {
    products: [
        {
            name: 'storm',
            description: 'its loud',
            category: 'rough weather',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/37/6d/44/376d442176f0af9dd2112cf8e5ea4937.jpg',
            price: 100,
            id: 1
        },
        {
            name: 'cloud',
            description: 'a nice ol cloud',
            category: 'precipitation',
            image: 'https://cdn.pixabay.com/photo/2011/06/21/14/13/cloud-8075_960_720.jpg',
            price: 50,
            id: 2
        },
        {
            name: 'rain',
            description: 'water from clouds',
            category: 'precipation',
            image: 'http://dreamicus.com/data/rain/rain-01.jpg',
            price: 50,
            id: 3
        },
        
    ],
    filters: ['precipation', 'clear', 'rough', 'wet']
}

export default state;