'use strict';


{
  const rectangle = {
        width: '5см',
        height:'5см',

        set setwidth(wid) {
            this.width = `${wid} + 'см'`
        },
        set setheight(hie) {
            this.height = `${hie} + 'см'`
        },   

        get squareOfRectangle(){
            return parseFloat(this.width) * parseFloat(this.height); 
        },
        get perimeterOfRectangle(){
            return 2 * (parseFloat(this.width) + parseFloat(this.height)); 
        },
}

rectangle.setwidth = 40;
rectangle.setheight = 30;
console.log(rectangle.squareOfRectangle);
console.log(rectangle.perimeterOfRectangle);



}