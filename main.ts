import { Plugin } from "obsidian";

const quoteWebsiteAPI = "https://api.quotable.io";

export default class QuotePlugin extends Plugin {
  async onload() {
    // Configure resources needed by the plugin.
    this.addCommand({
      id: "insert-quote",
      name: "Insert Quote",
      callback: () => {
        console.log("It worked!");
      },
    });
  }
  async onunload() {
    // Release any resources configured by the plugin.
  }
}