var LivingCreature =require("./livingcreature.js");
var random = require("./random.js");

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y){
        super(x, y);
        this.energy = 15;  
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   // eat, mul, move, die



    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 20) {
            grassEaterhashiv++;
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt);
            grassEaterhashiv++;
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    // eat() {
    //     var food = random(this.chooseCell(1))
    //     if (food) {
    //         var newX = food[0]
    //         var newY = food[1]
    //         matrix[newY][newX] = 2
    //         matrix[this.y][this.x] = 0

    //         for (var i in grassArr) {
    //             if (grassArr[i].x == newX && grassArr[i].y == newY) {
    //                 grassArr.splice(i, 1)
    //             }
    //         }

    //         this.x = newX
    //         this.y = newY
    //         this.energy ++;
    //     }
    // }

    eat() {
   

        var newCell = random(this.chooseCell(1));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }
    
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}
