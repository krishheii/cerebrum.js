/*

  MIT License

  Copyright (c) 2020 Krishnanunny H

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 */

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
