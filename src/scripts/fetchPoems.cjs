// The following script downloads Poems from airtable and saves them to saveJSONToFile
// that will be used in React component
// this script is run with Node.js

const Airtable = require("airtable");
const saveJSONToFile = require("./saveJSONToFile.cjs");
const config = require('./config.cjs');

// Initialize Airtable
const base = new Airtable({apiKey: config.apiKey}).base(config.baseId);

// Fetch all rows from the table
base(config.tableName)
  .select({
    // You can add options like sort, filter, etc., here if needed
    //maxRecords: 5,
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
        "poem pl": body_pl,
        "Name pl": title_pl,
        Translator: translator,
        lang: lang
      }) => ({
        id,
        title,
        author,
        body,
        type,
        body_pl,
        title_pl,
        translator,
        lang

      })
    );


    // console.table(strippedFields);
    saveJSONToFile(strippedFields);
  })
  .catch((error) => {
    console.error("Error fetching records:", error);
  });
