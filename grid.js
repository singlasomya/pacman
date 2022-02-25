class Grid {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.grid = {};
        this.positionX = null;
        this.positionY = null;
        this.face = null;
        this.direction = ["NORTH", "WEST", "SOUTH", "EAST"]
    }
    createGrid() {
        for (let i = 0; i < this.height; i++) {
            this.grid[i] = [];
            this.grid[i][0] = i;

            for (let j = 0; j < this.width; j++) {
                this.grid[i][j] = j;
            }
        }
        return this.grid;
    }

    validPlace(x, y) {
        if (x >= 0 && x <= this.width && y >= 0 && y <= this.height) {
            return true;
        } else {
            return false;
        }
    }

    place(x, y, f) {
        if (this.validPlace(x, y)) {
            this.positionX = x
            this.positionY = y
            this.face = f.toUpperCase();
            return `${this.positionX},${this.positionY},${this.face}`;
        }
    }

    canMove() {
        if (this.face === "NORTH" && this.positionY >= this.height) {
            return false;
        } else if (this.face === "WEST" && this.positionX <= 0) {
            return false;
        } else if (this.face === "EAST" && this.positionY >= this.width) {
            return false;
        } else if (this.face === "SOUTH" && this.positionY <= 0) {
            return false;
        }
        return true;
    }
    // move by 1
    move() {
        if (this.canMove()) {
            switch (this.face) {
                case "NORTH":
                    this.positionY = parseInt(this.positionY, 10) + 1;
                    break;
                case "WEST":
                    this.positionX = parseInt(this.positionX, 10) - 1;
                    break;
                case "EAST":
                    this.positionX = parseInt(this.positionX, 10) + 1;
                    break;
                case "SOUTH":
                    this.positionY = parseInt(this.positionY, 10) - 1;
                    break;
            }
        }
    }

    //turn left
    left() {
        if (this.face === "EAST") {
            return this.face = "NORTH";
        } else {
            const idx = this.direction.indexOf(this.face);
            return this.face = this.direction[idx + 1];
        }
    }
    // turn right
    right() {
        if (this.face === "NORTH") {
            return this.face = "EAST";
        } else {
            const idx = this.direction.indexOf(this.face);
            return this.face = this.direction[idx - 1];
        }
    }
    canShowReprot() {
        return this.positionX !== null && this.positionY !== null && this.face !== null
    }
    //reports current position of pacman
    report() {
        if (this.canShowReprot()) {
            return `OUTPUT: ${this.positionX},${this.positionY},${this.face}`;
        }

    }
}

module.exports = Grid;