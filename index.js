const dailyCheckIns = [
  ["Monday", 150],
  ["Tuesday", 160],
  ["Wednesday", 120],
  ["Thursday", 140],
  ["Friday", 180],
  ["Saturday", 200],
  ["Sunday", 130],
];

const classAttendances = [
  ["Monday", 50],
  ["Tuesday", 60],
  ["Wednesday", 40],
  ["Thursday", 50],
  ["Friday", 70],
  ["Saturday", 80],
  ["Sunday", 55],
];

const equipmentUsages = [
  ["Monday", 300],
  ["Tuesday", 320],
  ["Wednesday", 250],
  ["Thursday", 280],
  ["Friday", 350],
  ["Saturday", 400],
  ["Sunday", 290],
];

/*****************************************************************
Part 1: Activity Analysis

Task 1) Create a new array containing records for days when total activity (sum of check-ins, class attendance, and equipment usage) exceeded 500.
       Output 1) [["Tuesday", 540], ["Friday", 600], ["Saturday", 680]]

Task 2) Create a new array showing only the equipment usages for days when equipment usage was at least 300.
       Output 2) [ 300, 320, 350, 400 ]

******************************************************************/

const totalActivity = equipmentUsages.map((element) => {
  return [element[0]];
});
// console.log(totalActivity);

const eachDay = [];
for (let i = 0; i < 7; i++) {
  eachDay[i] =
    equipmentUsages[i][1] + classAttendances[i][1] + dailyCheckIns[i][1];
}
// console.log(eachDay);

for (let i = 0; i < 7; i++) {
  if (eachDay[i] > 500) {
    totalActivity[i].push(eachDay[i]);
  } else {
    totalActivity[i].push(0);
  }
}

// console.log(totalActivity);

const result = totalActivity.filter((element) => {
  if (element[1] != 0) {
    return true;
  } else {
    return false;
  }
});

// console.log(result);

const resultAli = classAttendances
  .filter((_, index) => {
    return (
      dailyCheckIns[index][1] +
        classAttendances[index][1] +
        equipmentUsages[index][1] >
      500
    );
  })
  .map((element, index) => {
    return [
      element[0],
      element[1] + dailyCheckIns[index][1] + equipmentUsages[index][1],
    ];
  });
console.log(resultAli);

/**** */

const result2 = equipmentUsages
  .filter((element) => {
    if (element[1] >= 300) {
      return true;
    } else {
      return false;
    }
  })
  .map((element) => {
    return element[1];
  });

console.log(result2);
/*****************************************************************
Part 2: Weekly Summaries

Task 3) Calculate the total number of members who checked in throughout the week.
       Output 3) 1080

Task 4) Calculate the total number of class attendances throughout the week.
       Output 4) 405

******************************************************************/
let result3 = 0;
dailyCheckIns.forEach((element) => {
  result3 = result3 + element[1];
});
console.log(result3);

let result4 = 0;
classAttendances.forEach((element) => {
  result4 = result4 + element[1];
});
console.log(result4);
/*****************************************************************
Part 3: Peak Performance

Task 5) Calculate the average number of equipment usages per day for the week.
       Output 5) 312.86 (rounded to two decimal places)

Task 6) Identify days when the number of class attendances was above the weekly average.
       Output 6) ["Tuesday", "Friday", "Saturday"]

******************************************************************/

// Use JavaScript array iteration methods such as filter, map, and reduce to achieve the desired output for each task.

let result5 = 0;
equipmentUsages.forEach((element) => {
  result5 = result5 + element[1];
});

console.log((result5 / 7).toFixed(2));
/**
 *
 */

let avgAttendances = 0;
classAttendances.forEach((element) => {
  avgAttendances = avgAttendances + element[1];
});

avgAttendances = avgAttendances / 7;
console.log(avgAttendances);

const result6 = classAttendances
  .filter((element) => {
    if (element[1] > avgAttendances) {
      return true;
    } else {
      return false;
    }
  })
  .map((element) => {
    return element[0];
  });

console.log(result6);
