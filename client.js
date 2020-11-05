const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  },
  {
    name: 'Fred',
    employeeNumber: '8906',
    annualSalary: '35000',
    reviewRating: 1
  }
  
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

for (let employeeItem of employees){
  let results = processEmployee(employeeItem);
  console.log('Processed employee is:', results);
}

function processEmployee (employee) {
  console.log('Employee is', employee);
  let bonusPercentage = calculateBonusPercentage(employee);
  let totalBonus = employee.annualSalary * bonusPercentage *.01;
  let newEmployeeObject = {
    
    name: employee.name,
    totalCompensation : Number(employee.annualSalary) + totalBonus,
    bonusPercentage: bonusPercentage,
    totalBonus: totalBonus
  }
  return newEmployeeObject
}

function calculateBonusPercentage(employee){
  let bonusPercentage = 0;
  switch (employee.reviewRating) {
    case 0:
    case 1:
    case 2: 
    bonusPercentage = 0;
    break;
    case 3: 
    bonusPercentage = 4;
    break;
    case 4:
      bonusPercentage =6;
      break; 
      case 5:
       bonusPercentage = 10;
       break;
  }
  
  if (employee.reviewRating > 2 && employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
  }
  if(employee.annualSalary > 65000){
    bonusPercentage -= 1;
  }
  
  if (bonusPercentage < 0) {
      bonusPercentage = 0;
  } else if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }
  return bonusPercentage;
}