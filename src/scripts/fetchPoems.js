// The following script downloads Poems from airtable and saves them to saveJSONToFile
// that will be used in React component
// this script is run with Node.js
// npm install airtable before use

import Airtable from "airtable";
import saveJSONToFile from "./saveJSONToFile";
const apiKey = "";
const baseId = "";
const tableName = "Eiles";

// Initialize Airtable
const base = new Airtable({ apiKey }).base(baseId);

// Fetch all rows from the table
base(tableName)
  .select({
    // maxRecords: 5,
    sort: [{ field: "order", direction: "asc" }],
  })
  .all()
  .then((records) => {
    //Process the records
    const fields = records.map((record) => {
      return record.fields;
    });

    console.warn(`Deconsrtucted: `);
    // the key namas are just as they named in airtable
    const strippedFields = fields.map(
      ({
        order: id,
        "Name lt": title,
        "Author OK": author,
        "poem lt": body,
        Type: type,
      }) => ({
        id,
        title,
        author,
        body,
        type,
      })
    );

    // console.table(strippedFields);
    saveJSONToFile(strippedFields);
  })
  .catch((error) => {
    console.error("Error fetching records:", error);
  });
