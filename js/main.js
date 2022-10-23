const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html",
      label: "week6 Todo App",
      url: "week6/new_todo_app/index.html"
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