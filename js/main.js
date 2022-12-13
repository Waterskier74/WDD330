const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    { label: "Week2 notes",
      url: "week2/index.htm"
    },
    { label: "Week3 notes",
      url: "week3/index.htm"
    },
    { label: "Week4 notes",
      url: ""
    },
    { label: "Week5 notes",
      url: "week5/index.htm"
    },
    { label: "Week6 ToDo application",
      url: "https://waterskier74.github.io/todo_application/"
    },
    { label: "Week7 notes",
      url: "week7/index.htm"
    },
    { label: "Week8 notes",
      url: "week8/index.htm"
    },
    { label: "week9 notes",
      url: "week9/index.htm"
    },
    { label: "week10 notes",
      url: "week10/index.htm"
    },
    {
      label: "Final Project",
      url: "finalProject/index.html"
    }
  ]

  function loadIndex () {
    const ol = document.querySelector("#classLinks")

    links.forEach (link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText =link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })
  }