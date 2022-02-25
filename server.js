const readline = require('readline');
const Grid = require('./grid');

const rl = readline.createInterface(process.stdin, process.stdout);

console.log(`
  Command           Description
  PLACE 0,0,NORTH   creates a new grid of width w and height h.
  MOVE              move Pacman one unit forward in the direction it is currently facing.
  LEFT/RIGHT        rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
  REPORT            announce the X,Y and F of Pacman.
  Q                 Quits the program.
`);

const gridBoard = new Grid(4, 4);
gridBoard.createGrid()

rl.setPrompt('Enter Your Command:');
rl.prompt();

rl.on('line', (line) => {
    let [command, coordinates] = line.trim().split(" ");
    switch (command) {
        case "PLACE":
            if (coordinates) {
                let [x, y, f] = coordinates.split(",")
                gridBoard.place(x, y, f);
            }
            break;
        case "MOVE":
            gridBoard.move();
            break;
        case "LEFT":
            gridBoard.left();
            break;
        case "RIGHT":
            gridBoard.right();
            break;
        case "REPORT":
            let result = gridBoard.report()
            if (result) {
                console.log(result);
            }
            break;
        case "Q":
            process.exit(0);
        default:
            console.log("Please enter a valid command.")
    }
    rl.prompt();
}).on('close', () => {
    console.log('Thank you for playing!')
    process.exit(0)
})


