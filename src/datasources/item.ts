import { readFileSync } from "fs";
import path from "path";

export class ItemDataSource {
  #itemsData;

  constructor() {
    this.#itemsData = JSON.parse(
      readFileSync(path.join(__dirname, "../../data/items.json"), {
        encoding: "utf-8",
      }),
    );
  }

  async getAllItems() {
    return Object.values(this.#itemsData);
  }

  async getItemByPath(path: string) {
    return this.#itemsData[path];
  }
}
