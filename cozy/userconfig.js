let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Bangalore, India',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#db4740",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://bing.com/search?q=", "Bing"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      i: ["https://www.google.com/search?tbm=isch&q=", "Google Images"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "hello",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [{
        name: "Social",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#b4befe",
          },
          
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#b4befe",
          },
        ],
      },{
        name: "Dev",
        links: [
          {
            name: "github",
            url: "https://github.com/",
            icon: "brand-github",
            icon_color: "#b4befe",
          },
          {
            name: "wifiman",
            url: "https://wifiman.com/",
            icon: "network",
            icon_color: "#b4befe",
          },
        ],
      },{
        name: "School",
        links: [
          {
            name: "docs",
            url: "https://docs.google.com/",
            icon: "paperclip",
            icon_color: "#b4befe",
          },
          {
            name: "PW",
            url: "https://www.pw.live/study/batches/study",
            icon: "book",
            icon_color: "#b4befe",
          },
        ],
      

      },  ],
    },
    
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
