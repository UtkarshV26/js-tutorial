// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 6;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        // break;
    case 7:
        console.log("Jul");
        // break;
    case 8:
        console.log("Aug");
        // break;
    case 9:
        console.log("Sep");
        // break;
    case 10:
        console.log("Oct");
        // break;
    case 11:
        console.log("Nov");
        // break;
    case 12:
        console.log("Dec");
        // break;

    default:
        console.log("default case matched");
        break;
}

// NOTE: In switch, if a case is matched, then it runs all lines of code below it until a break occurs or the scope ends.