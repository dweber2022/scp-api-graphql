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

  async getAllHubs() {
    return Object.values(this.#hubsData);
  }

  async getHubByLink(path: string) {
    return this.#hubsData[path];
  }
}
