var League = class League {

	constructor(nameStr, nationStr, url) {
		this.nameStr = nameStr;
		this.nationStr = nationStr;
		this.url = url;
	}

	toString() {
		return this.nationStr + " " + this.nameStr;
	}

		fixturesUrl() {
			return this.url.replace("results", "fixtures");
		}

		summaryUrl() {
			return this.url.replace("results", "");
		}
}
