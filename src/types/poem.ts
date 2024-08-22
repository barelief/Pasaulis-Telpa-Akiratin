// Interface defining the structure of a poem object
// check airtable/js saver
export interface Poem {
  id: number;
  title: string;
  body: string;
  type: string;
  author: string;
  translator?: string;
  "title pl"?: string;
}
