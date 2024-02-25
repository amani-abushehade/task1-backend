const fs = require("fs")

const addPerson = (id ,fname , lname , age , city) => {

  const allData = loadData()

  const duplicatedDate = allData.filter((obj) => {
    return obj.id === id 
   })

  if (duplicatedDate.length == 0) {
    allData.push({
        id : id,
        fname : fname,
        lname : lname,
        age : age,
        city : city
    })
    savaAllData(allData)
  }else {
    console.log("error duplicated id")
  }
}

const loadData = () => {
  try {
    const DataJson = fs.readFileSync("savedata.json").toString()
    return  JSON.parse(DataJson)
  }
  catch {
    return []
  } 
}

const savaAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData)
  fs.writeFileSync("savedata.json" , AllDataJson )
}

const deleteData = (id) => {
  const allData = loadData()

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id 
    })
  savaAllData(dataToKeep)
  console.log("you have already deleted an Item")
}

const readData = (id) => {

  const allData = loadData()

  const itemNeeded = allData.find((obj)=>{
    return  obj.id == id 
  })

  if (itemNeeded) {
    console.log(itemNeeded)
  } else {
    console.log("id needed not found")
  }
}

const  listData = () => {

  const allData = loadData()

  allData.forEach((obj) => {
    console.log(obj.fname , obj.age , obj.city)
  })
}

module.exports = {
  addPerson,
  deleteData,
  readData,
  listData
}
