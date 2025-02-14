import { readFileSync } from "fs";
import path from "path";

export class GOIDataSource {
  #goisData;

  constructor() {
    this.#goisData = JSON.parse(
      readFileSync(path.join(__dirname, "../../data/gois.json"), {
        encoding: "utf-8",
      }),
    );
  }

  async getAllGOIs() {
    return Object.values(this.#goisData);
  }

  async getGOIByPath(path: string) {
    return this.#goisData[path];
  }
}
