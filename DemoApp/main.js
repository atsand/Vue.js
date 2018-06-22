var app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        image: 'vmSocks-green-onWhite_preview.jpeg',
        link: 'https://www.newegg.com',
        inventory: 100,
        onSale: false,
        details:[
            '80% cotton',
            '20% polyester',
            'Gender-nuetral',
        ],
        variants:[
        {
            variantId: 2234,
            variantColor: 'green',
            variantImage: 'vmSocks-green-onWhite_preview.jpeg',
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'vmSocks-blue-onWhite_preview.jpeg',
        },
        ],
        sizes:[
        {
            sizeOption: 'Small',
            sizeID: 1,
        },
        {
            sizeOption: 'Medium',
            sizeID: 2,
        },
        {
            sizeOption: 'Large',
            sizeID: 3,
        },
        ],
        cart: 0,
    },
    methods:{
        addToCart: function(){
            this.cart += 1
        },
        colorHover: function(variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            this.cart -= 1
        },
    }
})