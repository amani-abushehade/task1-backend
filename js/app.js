const persondata = require("./persondata")
const yargs = require("yargs")

yargs.command ({
    command : "add",
    describe : "to add an item",
    builder: {
      id : {
        describe: "this is the id description in add command",
        demandOption: true,
        type : "string"
     },
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     },
     age : {
      describe: "this is the age description in add command",
      demandOption: true,
      type : "string"
   },
   city: {
    describe: "this is the city description in add command",
    demandOption: true,
    type : "string"
 }
    },
    handler:(x)=> {
      persondata.addPerson(x.id , x.fname , x.lname,x.age , x.city)
    }
})

yargs.command({
  command : "delete",
  describe : "to delete an item",
  builder : {
    id : {
      describe : "this is id in del command",
      demandOption : true,
      type : "string"
    }
 },
  handler:(x)=> {
    persondata.deleteData(x.id)
  }

})

yargs.command({
    command: "read",
    describe : "to read an item",
    builder : {
       id : {
         describe : "this is id in read command",
         demandOption : true,
         type : "string"
       }
    },
    handler: (x)=> {
      persondata.readData(x.id)
    }
})

yargs.command ({
  command : "list",
  describe : "to list data" ,
  handler : () => {
    persondata.listData()
  }
})

yargs.parse()


  








 