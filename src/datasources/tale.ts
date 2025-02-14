import { readFileSync } from "fs";
import path from "path";

export class TaleDataSource {
  #talesData;

  constructor() {
    this.#talesData = JSON.parse(
      readFileSync(path.join(__dirname, "../../data/tales.json"), {
        encoding: "utf-8",
      }),
    );
  }

  async getAllTales() {
    return Object.values(this.#talesData);
  }

  async getTaleByPath(path: string) {
    return this.#talesData[path];
  }
}
