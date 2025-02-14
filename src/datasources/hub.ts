export class HubDataSource {
  static #url = "https://scp-data.tedivm.com/data/scp/hubs/index.json";

  async getAllHubs() {
    const response = await fetch(HubDataSource.#url);
    const hubsData = await response.json();
    return Object.values(hubsData);
  }
}
