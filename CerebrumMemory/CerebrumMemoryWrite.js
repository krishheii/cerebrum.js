const fs = require("fs");
const { dataSet } = require("./CerebrumBuiltInMemory.js");

exports.writeBuiltInMemory = async () => {
  const dir = "./cerebrumTrainedData/";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    const data = JSON.stringify(dataSet);
    fs.writeFileSync(dir + "./cerebrumDataSet.json", data);
  }
};

exports.updateMemory = async (memory, dataset) => {
    const dir = "./cerebrumTrainedData/";
    const currentMemory = memory.data;
    const updatedMemory = currentMemory.concat(dataset); 
    memory.data = updatedMemory;
    if (fs.existsSync(dir)) {
        const data = JSON.stringify(memory);
        fs.writeFileSync(dir + "./cerebrumDataSet.json", data);
      }
  };
