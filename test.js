let createCharMap = function (matrix) {
//     let charMap = new Map();
//     for (let r = 0; r < matrix[0].length; r++) {
//         for (let c = 0; c < matrix.length - 1; c++) {
//             charMap[matrix[r][c]] = [r, c];
//         }
//     }
//     return charMap;
// }

let writeAWord = function (matrix, word) {
    let c = 0;
    let r = 0;
    let to_c = 0;
    let to_r = 0;
    let move_c = 0;
    let move_r = 0;

//     let charMap = createCharMap(matrix);
//     for (let char of word) {
//         let [to_r, to_c] = charMap[char];
//         move_c = to_c - c;
//         move_r = to_r - r;
//         console.log(move_c, move_r);
//         while (move_c > 0) {
//             console.log('R');
//             c++;
//             move_c--;
//         }
//         while (move_c < 0) {
//             console.log('L');
//             c--;
//             move_c++;
//         }
//         while (move_r > 0) {
//             console.log('D');
//             r++;
            move_r--;
        }
        while (move_r < 0) {
            console.log('U');
            r--;
            move_r++;
        }
//         if (c === to_c && r === to_r) {
//             console.log('!');
//         }
//     }
// }

// let matrix = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
// let word = "ifat";
// writeAWord(matrix, word);

// class User {
//     constructor (name) {
//         this.name = name;
//     }
//     getName() {
//         console.log('debug, ', this)
//         return this.name;
//     }
//     printSeatNumber() {
//         console.log('The seats have not been set');
//     }
// }

class Meeting {
    constructor (users) {
        const presenter = users[0];
        console.log(presenter)
        this.getPresenterName = presenter.getName.bind(presenter);
        this.setUserSeats(users);
    }
    setUserSeats(users) {
        for (var i = 0; i < users.length; i++) {
            users[i].printSeatNumber = ((seatNumber) => {
                return () => console.log(seatNumber);
            })(i);
        }
    }
}

const users = [new User('Jeni'), new User('Dan'), new User('Carol')];
const meeting = new Meeting(users);

// Broken results
console.log(meeting.getPresenterName()); // undefined (expected ‘Jeni’)
users[0].printSeatNumber(); // 3 (expected 0)
users[1].printSeatNumber(); // 3 (expected 1)
users[2].printSeatNumber(); // 3 (expected 2)
