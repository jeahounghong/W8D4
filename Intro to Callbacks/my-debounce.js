class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar();


Function.prototype.myDebounce = function(interval) {
    console.log(this);
    let timeout = null;
    return () => {
        clearTimeout(timeout)
        timeout = setTimeout(()=> {
            this();
        }, interval);
    };
}

searchBar.search = searchBar.search.myDebounce(500);

const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
}

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  syncWait(1500);
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

syncWait(1000);
console.log("before or after?")



queryForHelloWorld();