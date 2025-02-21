import { Goi } from "../generated/graphql";
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

  getAllGOIs(): Goi[] {
    return Object.values(this.#goisData);
  }

  getGOIByPath(path: string): Goi {
    return this.#goisData[path];
  }
}
