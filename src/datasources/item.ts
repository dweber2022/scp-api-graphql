import { Item } from "../generated/graphql";
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

  getAllItems(): Item[] {
    return Object.values(this.#itemsData);
  }

  getItemByPath(path: string): Item {
    return this.#itemsData[path];
  }
}
