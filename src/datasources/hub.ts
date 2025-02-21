import { Hub } from "../generated/graphql";
import { readFileSync } from "fs";
import path from "path";

export class HubDataSource {
  #hubsData;

  constructor() {
    this.#hubsData = JSON.parse(
      readFileSync(path.join(__dirname, "../../data/hubs.json"), {
        encoding: "utf-8",
      }),
    );
  }

  getAllHubs(): Hub[] {
    return Object.values(this.#hubsData);
  }

  getHubByLink(path: string): Hub {
    return this.#hubsData[path];
  }
}
