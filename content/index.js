module.exports = {
  view: "index",
  content: {
    stylesheet: [],
    javascript:[],
    // page specific meta
    meta: {
      title: "",
      description: "",
      keywords: "",
      canonical : "",
      image: "",
      social: {
        fb: {},
        twitter: {
          card: "",
        }
      }
    },
    leadspace: {
      
    },
    modules: [
      {
        module: "blah",
        content: {
          name: "name",
          title: "title",
          img: {
            src: "assets/img/test.jpg",
            alt: "",
          },
        }
      }
    ]
  }
}
