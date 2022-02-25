const assert = require('assert');
const Grid = require('./grid');

it("create a grid", () => {
    const gridBoard = new Grid(5, 5);

    assert.deepStrictEqual(gridBoard.createGrid(), {
        "0": [0, 1, 2, 3, 4],
        "1": [0, 1, 2, 3, 4],
        "2": [0, 1, 2, 3, 4],
        "3": [0, 1, 2, 3, 4],
        "4": [0, 1, 2, 3, 4]
    });
});

it("check pacman was placed within the grid", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    const check1 = gameBoard.validPlace(4, 1);
    assert.equal(check1, true);

    const check2 = gameBoard.validPlace(5, -1);
    assert.equal(check2, false);

    const check3 = gameBoard.validPlace(-1, 5);
    assert.equal(check3, false);

    const check4 = gameBoard.validPlace(-1, -1);
    assert.equal(check4, false);

    const check5 = gameBoard.validPlace(5, 6);
    assert.equal(check5, false);

    const check6 = gameBoard.validPlace(7, 6);
    assert.equal(check6, false);

    const check7 = gameBoard.validPlace(3, 4);
    assert.equal(check7, true);
});

it("should pacman should be put in grid", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    gameBoard.place(0, 0, "north");
    assert.equal(gameBoard.report(), "Output: 0,0,NORTH");

    gameBoard.place(4, 5, "east");
    assert.equal(gameBoard.report(), "Output: 4,5,EAST");
});

it("check pacman can move", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    gameBoard.place(0, 0, "north");
    assert.equal(gameBoard.canMove(), true);

    gameBoard.place(5, 5, "north");
    assert.equal(gameBoard.canMove(), false);
});

it("should pacman move", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    gameBoard.place(0, 0, "NORTH");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 0,1,NORTH");

    gameBoard.place(3, 1, "NORTH");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 3,2,NORTH");

    gameBoard.place(3, 5, "NORTH");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 3,5,NORTH");

    gameBoard.place(0, 0, "SOUTH");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 0,0,SOUTH");

    gameBoard.place(0, 1, "SOUTH");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 0,0,SOUTH");

    gameBoard.place(1, 3, "SOUTH");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 1,2,SOUTH");

    gameBoard.place(1, 1, "EAST");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 2,1,EAST");

    gameBoard.place(2, 1, "WEST");
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 1,1,WEST");
});

it("can rotate left", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    gameBoard.place(0, 0, "NORTH");
    gameBoard.left();
    assert.equal(gameBoard.report(), "Output: 0,0,WEST");

    gameBoard.place(3, 1, "south");
    gameBoard.left();
    assert.equal(gameBoard.report(), "Output: 3,1,EAST");
});

it("can rotate rigth", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    gameBoard.place(0, 0, "NORTH");
    gameBoard.right();
    assert.equal(gameBoard.report(), "Output: 0,0,EAST");

    gameBoard.place(3, 1, "south");
    gameBoard.right();
    assert.equal(gameBoard.report(), "Output: 3,1,WEST");
});

it("can move and rotate", () => {
    const gameBoard = new Grid(5, 5);
    gameBoard.createGrid();

    gameBoard.place(1, 2, "EAST");
    gameBoard.move();
    gameBoard.move();
    gameBoard.left();
    gameBoard.move();
    assert.equal(gameBoard.report(), "Output: 3,3,NORTH");
});