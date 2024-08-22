const fs = require("fs").promises;
const path = require("path");
const saveJSONToFile = async (data, fileName = "./../astro-vue/src/assets/data/poems.json") => {
  try     {
       // Resolve the file path to avoid issues with relative paths
    const filePath = path.resolve(__dirname, fileName); 

    // Convert JSON object to string
    const jsonData = JSON.stringify(data, null, 2); // `null, 2` is for formatting the JSON string

    // Write JSON string to a file
    await fs.writeFile(fileName, jsonData);

    console.log(`Data saved to file: ${fileName}`);
  } catch (err) {
    console.error("Error saving data to file:", err);
  }
};
module.exports = saveJSONToFile;
