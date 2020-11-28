const fs = require("fs");

exports.readCerebrumMemory = async () => {
  const dir = "./cerebrumTrainedData/";
  if (fs.existsSync(dir)) {
    const rawdata = fs.readFileSync(dir + "./cerebrumDataSet.json");
    const existingMemory = JSON.parse(rawdata);
    return existingMemory;
  }
};