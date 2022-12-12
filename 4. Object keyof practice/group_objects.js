let objectExample = [
    {name: "Kaitlyn", surname: "Scott"},
    {name: "Emilio", surname: "Sosa"},
    {name: "Clark", surname: "Buchanan"},
    {name: "Rajan", surname: "Arroyo"},
    {name: "Carol", surname: "Scott"},
    {name: "Eesa", surname: "Higgins"},
    {name: "Mike", surname: "Arroyo"}
  ];
let i = 0;
  
let arrangeObject = objectExample.reduce(
  function(prevObj, currObj) {
    for(const objKey in currObj) {
      if(prevObj[i] && prevObj[i].some(el => el[objKey] === currObj[objKey])) {
        prevObj[i].push(currObj);
        return prevObj;
      }
      for (const iObj in prevObj) {
        if (prevObj[iObj].some(el => el[objKey] === currObj[objKey])) {
          prevObj[iObj].push(currObj);
          return prevObj;
        }
      }
    }
    i++;
    prevObj[i] = [currObj];
    return prevObj;
  }, {});
  
  console.log(arrangeObject);