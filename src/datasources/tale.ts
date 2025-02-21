import { Tale } from "../generated/graphql";
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

  getAllTales(): Tale[] {
    return Object.values(this.#talesData);
  }

  getTaleByPath(path: string): Tale {
    return this.#talesData[path];
  }
}
