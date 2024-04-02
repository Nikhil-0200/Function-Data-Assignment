let Rectangle = {
    length: 20,
    width: 50,

    area: function(){
        console.log(this.length * this.width)
    },

    perimeter: function(){
        console.log(2*(this.length + this.width))
    }
}


Rectangle.area()
Rectangle.perimeter()