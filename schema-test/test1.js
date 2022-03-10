const Ajv = require('ajv')
const  ajv = new Ajv()

ajv.addFormat('testformat',function(data){
  return data==='haha'
})

const  schema ={
  type:'object',
  properties:{
    name:{
      type:'string',
      format: 'testformat',
    },
    age:{
      type:'number',
    },
    pets:{
      type:'array',
      items:{
        type:'string',
      }
    },
    isWorker:{
      type:'boolean',
    }
  },
  required:['name','age']
}
const validate = ajv.compile(schema)
const valid = validate({
  name:'haha',
  age:19,
  pet:[
    'min',
    'mam',
  ],
  isWorker:true
})

if(!valid){
  console.log(validate.errors)
}