const employees = [
    
    { id: 2, name: 'larry', managerId: 1},
    { id: 4, name: 'shep', managerId: 2},
    { id: 3, name: 'curly', managerId: 1},
    { id: 1, name: 'moe'},
    { id: 5, name: 'groucho', managerId: 3},
    { id: 6, name: 'harpo', managerId: 5},
    { id: 8, name: 'shep Jr.', managerId: 4},
    { id: 99, name: 'lucy', managerId: 1}
  ];
  
  const spacer = (text)=> {
    if(!text){
      return console.log('');
    }
    const stars = new Array(5).fill('*').join('');
    console.log(`${stars} ${text} ${stars}`);
  }

  
  spacer('findEmployeeByName Moe')
  // given a name and array of employees, return employee
 function findEmployeeByName(name, arr){
 
    for(let i=0 ; i< arr.length; i++) {
      const currObj = arr[i]
      if(currObj['name'] === name) {
        return currObj
      }
    }

  }
  
  console.log(findEmployeeByName('moe', employees));//{ id: 1, name: 'moe' }
  spacer('')

  spacer('findManagerFor Shep Jr.')
  //given an employee and a list of employees, return the employee who is the manager

  function findManagerFor(cb, employeeArr) {

    for(let i =0; i < employeeArr.length; i++) {
      const currObj = employeeArr[i];
      const managerId = cb['managerId']
      const employeeId = currObj['id']
      if(managerId === employeeId){
        return currObj;

      }
    
    }
  }
  
  console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));//{ id: 4, name: 'shep', managerId: 2 }
  spacer('')
  
  spacer('findCoworkersFor Larry')
 
  //given an employee and a list of employees, return the employees who report to the same manager

  // function findCoworkersFor(cb, employeeArr) {
  //   const arr = []

  //   for(let i = 0;i < employeeArr.length; i++) {
  //     const currObj = employeeArr[i]
  //     const cbId = cb['managerId']
  //     const managerId = currObj['managerId']
  //     if(cbId === managerId && cb['id'] !== currObj['id']) {
  //       arr.push(currObj)
  //     }
  //   }
  //   return arr;


  // }
  function findCoworkersFor(cb, employeeArr) {
  
    return employeeArr.filter(function(person) {
      let currManager = cb['managerId']
      let findManagerId = person['managerId']
      if(currManager === findManagerId && cb['name'] !== person['name']) {
       
        return person
        
      }
      
   })
 
}

  console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));/*
  [ { id: 3, name: 'curly', managerId: 1 },
    { id: 99, name: 'lucy', managerId: 1 } ]
  */
  
  spacer('');
  
  spacer('findManagementChain for moe')
  //given an employee and a list of employees, return a the management chain for that employee. The management chain starts from the employee with no manager with the passed in employees manager 
  
  // console.log(findManagementChainForEmployee(findEmployeeByName('moe', employees), employees));//[  ]
  spacer('');

  spacer('findManagementChain for shep Jr.')


  // function findManagementChainForEmployee(cb,employeeArr){
  //   const chain = []


  //   for(let i =0; i < employeeArr.length; i++){
  //     let currObj = employeeArr[i]
  //     let find = cb['managerId']
  //     let id = currObj['id']
  //     if(find === id) {
  //       chain.push(currObj)
  //       find = currObj['managerId']
  //     }
  //     let findChain = findManagerFor(currObj, employeeArr)
  //     //console.log(findChain)
  //     if(findChain){
  //       console.log(findChain)
  //     }
     
  //   }


   
  //   return chain
  // }
function findManagementChainForEmployee(cb, employeeArr) {
  let chain = []
  let startChain = cb['managerId']

  
  employeeArr.find(function (employeeObj) {
    if(employeeObj['managerId']=== undefined) {
        console.log('did not work')
      chain.push(employeeObj)
    }
 
    chain.push(employeeObj)
    return startChain === employeeObj.id
  })
  
 

 return chain
 
}
  


  console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees));/*
  [ { id: 1, name: 'moe' },
    { id: 2, name: 'larry', managerId: 1 },
    { id: 4, name: 'shep', managerId: 2 }]
  */
  spacer('');
  
  
  spacer('generateManagementTree')
  //given a list of employees, generate a tree like structure for the employees, starting with the employee who has no manager. Each employee will have a reports property which is an array of the employees who report directly to them.
    
  // function generateManagementTree(employees){
  //   const tree ={}

  //   for(let i = 0; i < employees.lengh)
  // }
  console.log(JSON.stringify(generateManagementTree(employees), null, 2));
  /*
  {
    "id": 1,
    "name": "moe",
    "reports": [
      {
        "id": 2,
        "name": "larry",
        "managerId": 1,
        "reports": [
          {
            "id": 4,
            "name": "shep",
            "managerId": 2,
            "reports": [
              {
                "id": 8,
                "name": "shep Jr.",
                "managerId": 4,
                "reports": []
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "curly",
        "managerId": 1,
        "reports": [
          {
            "id": 5,
            "name": "groucho",
            "managerId": 3,
            "reports": [
              {
                "id": 6,
                "name": "harpo",
                "managerId": 5,
                "reports": []
              }
            ]
          }
        ]
      },
      {
        "id": 99,
        "name": "lucy",
        "managerId": 1,
        "reports": []
      }
    ]
  }
  */
  spacer('');
  
  spacer('displayManagementTree')
  //given a tree of employees, generate a display which displays the hierarchy
  displayManagementTree(generateManagementTree(employees));/*
  moe
  -larry
  --shep
  ---shep Jr.
  -curly
  --groucho
  ---harpo
  -lucy
  */