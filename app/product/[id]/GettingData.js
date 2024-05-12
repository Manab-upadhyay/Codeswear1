import getData from '../GetDataFile'

  getDataForMe=async()=>{
   let myData=await getData()
   return myData
}

module.exports=getDataForMe