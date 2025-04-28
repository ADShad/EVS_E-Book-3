const PRODUCTION_MODE = true;
const appdb = {
  config: {
    subject: "",
    class: "Class 3",
    id: "riz_569",
    totalPages: 73,
    bookWidth: 1259,
    bookHeight: 1646,
    prePages: [
      { pageUrl: "cover.jpg", pageName: "Cover" },
      { pageUrl: "blank.jpg", pageName: "Blank" },
    ],
  },

  ebook: {
    toc: {
      icon: "fa-book",
      menu: "Table of Contents",
      link: "content",
      data: [
        {
          page: 3,
          title: "1. Family and Friends",
        },
        {
          page: 9,
          title: "2. Going to the Mela",
        },
        {
          page: 15,
          title: "3. Celebrating Festivals",
        },
        {
          page: 21,
          title: "4. Getting to Know Plants",
        },
        {
          page: 27,
          title: "5. Plants and Animals Live Together",
        },
        {
          page: 33,
          title: "6. Living in Harmony",
        },
        {
          page: 39,
          title: "7. Water-A Precious Gift",
        },
        {
          page: 43,
          title: "8. Food We Eat",
        },
        {
          page: 49,
          title: "9. Staying Healthy and Happy",
        },
        {
          page: 55,
          title: "10. This World of Things",
        },
        {
          page: 61,
          title: "11. Making Things",
        },
        {
          page: 67,
          title: "12. Taking Charge of Waste",
        },
      ],
    },
    // Animations: {
    //   icon: "fa-video-camera",
    //   menu: "Animations",
    //   link: "video",
    //   data: [
    //     {
    //       path: "resources/animations/ch_1_1.mp4",
    //       title: "Family and Friends",
    //       size: "850x480",
    //       page: 3,
    //       chapter: "Chapter 1",
    //     },
    //     {
    //       path: "resources/animations/ch_2_1.mp4",
    //       title: "Going to the Mela",
    //       size: "850x480",
    //       page: 9,
    //       chapter: "Chapter 2",
    //     },
    //     {
    //       path: "resources/animations/ch_3_1.mp4",
    //       title: "Celebrating Festivals",
    //       size: "850x480",
    //       page: 15,
    //       chapter: "Chapter 3",
    //     },
    //     {
    //       path: "resources/animations/ch_4_1.mp4",
    //       title: "Getting to Know Plants",
    //       size: "850x480",
    //       page: 21,
    //       chapter: "Chapter 4",
    //     },
    //     {
    //       path: "resources/animations/ch_5_1.mp4",
    //       title: "Plants and Animals Live Together",
    //       size: "850x480",
    //       page: 27,
    //       chapter: "Chapter 5",
    //     },
    //     {
    //       path: "resources/animations/ch_6_1.mp4",
    //       title: "Living in Harmony",
    //       size: "850x480",
    //       page: 33,
    //       chapter: "Chapter 6",
    //     },
    //     {
    //       path: "resources/animations/ch_7_1.mp4",
    //       title: "Water-A Precious Gift",
    //       size: "850x480",
    //       page: 39,
    //       chapter: "Chapter 7",
    //     },
    //     {
    //       path: "resources/animations/ch_8_1.mp4",
    //       title: "Food We Eat",
    //       size: "850x480",
    //       page: 43,
    //       chapter: "Chapter 8",
    //     },
    //     {
    //       path: "resources/animations/ch_9_1.mp4",
    //       title: "Staying Healthy and Happy",
    //       size: "850x480",
    //       page: 49,
    //       chapter: "Chapter 9",
    //     },
    //     {
    //       path: "resources/animations/ch_10_1.mp4",
    //       title: "This World of Things",
    //       size: "850x480",
    //       page: 55,
    //       chapter: "Chapter 10",
    //     },
    //     {
    //       path: "resources/animations/ch_11_1.mp4",
    //       title: "Making Things",
    //       size: "850x480",
    //       page: 61,
    //       chapter: "Chapter 11",
    //     },
    //     {
    //       path: "resources/animations/ch_12_1.mp4",
    //       title: "Taking Charge of Waste",
    //       size: "850x480",
    //       page: 69,
    //       chapter: "Chapter 12",
    //     },

    //   ],
    // },
    "Interactivities.": {
      icon: "fa-users",
      menu: "Activities",
      link: "iframe",
      data: [
        {
          path: "resources/interactivities/true-false/chap_1_ws_1_2.html",
          title: "Chapter 1, Activity A",
          size: "1024x700",
          page: 3,
        },
        {
          path: "resources/interactivities/fib/chap_1_ws_1_5.html",
          title: "Chapter 1, Activity B",
          size: "1024x650",
          page: 3,
        },
        {
          path: "resources/interactivities/mcq_new/chap_1_ws_2_1.html",
          title: "Chapter 1, Activity C",
          size: "1024x800",
          page: 4,
        },
        {
          path: "resources/interactivities/fill-in-blanks/chap_1_ws_2_2.html",
          title: "Chapter 1, Activity D",
          size: "1024x600",
          page: 4,
        },
        {
          path: "resources/interactivities/fib/chap_1_ws_2_3.html",
          title: "Chapter 1, Activity E",
          size: "1024x750",
          page: 5,
        },
        {
          path: "resources/interactivities/fill-in-blanks/chap_2_ws_4_2.html",
          title: "Chapter 2, Activity A",
          size: "1024x1000",
          page: 9,
        },
        {
          path: "resources/interactivities/circle-items/chap_1_circle.html",
          title: "Chapter 2, Activity B",
          size: "1024x750",
          page: 9,
        },
        {
          path: "resources/interactivities/true-false/chap_1_tf.html",
          title: "Chapter 2, Activity C",
          size: "1024x800",
          page: 10,
        },
        {
          path: "resources/interactivities/matching/chap_1_match.html",
          title: "Chapter 2, Activity D",
          size: "1024x800",
          page: 11,
        },
        {
          path: "resources/interactivities/fib/chap_2_ws_6_4.html",
          title: "Chapter 2, Activity E",
          size: "1024x750",
          page: 13,
        },
        {
          path: "resources/interactivities/mcq_new/chap_3_ws_7_1.html",
          title: "Chapter 3, Activity A",
          size: "1024x750",
          page: 14,
        },
        {
          path: "resources/interactivities/true-false/chap_3_ws_7_3.html",
          title: "Chapter 3, Activity B",
          size: "1024x750",
          page: 15,
        },
        {
          path: "resources/interactivities/fill-in-blanks/chap_3_ws_8_2.html",
          title: "Chapter 3, Activity C",
          size: "1024x700",
          page: 16,
        },
      ],
    },
    // "Games.": {
    //   icon: "fa-users",
    //   menu: "Games",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },
    // "Test Paper Generator.": {
    //   icon: "fa-users",
    //   menu: "Test Paper Generator",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },

    zother: [],
  },
};

var TOOLS_OPTIONS = {
  sidebar: {
    activate: true,
    id: "tool-sidebar",
  },
  notes: {
    activate: true,
    id: "ebook-addnote",
  },
  zoomin: {
    activate: true,
    id: "tool-zoom-in",
  },
  zoomout: {
    activate: true,
    id: "tool-zoom-out",
  },
  mode: {
    activate: true,
    id: "tool-bookmode-single-double",
  },
  fullscreen: {
    activate: true,
    id: "tool-fullscreen",
  },
  assetmode: {
    activate: true,
    id: "app-btn-toggleres",
  },
  spotlight: {
    activate: true,
    id: "app-btn-spotlight",
  },
  backgroundmusic: {
    activate: true,
    id: "tool-backgroundmusic",
  },
  pen: {
    activate: true,
    id: "app-tool-pen",
  },
  highlighter: {
    activate: true,
    id: "app-tool-highlight",
  },
  thumbnail: {
    activate: true,
    id: "app-tool-thumbnail",
  },
  glossary: {
    activate: false,
    id: "app-btn-glossary",
  },
  bookmarkslist: {
    activate: true,
    id: "app-list-bookmark",
  },
  highlightsList: {
    activate: true,
    id: "app-list-highlights",
  },
  notesList: {
    activate: true,
    id: "app-list-notes",
  },
};
