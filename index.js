// function saturdayFun(activity) {
//     if(activity = 'null'){
//     return `This Saturday, I want to roller-skate!`;
//     } else {
//         return `This Saturday, I want to ${activity}!`;
//     }
// }


function saturdayFun(activity = 'roller-skate') {
        return `This Saturday, I want to ${activity}!`;
    }


const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = 'special') {
        return (`You are ${flair}${adjective}${flair}!`);
    }
}