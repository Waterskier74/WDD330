const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html",
      label: "week2 notes",
      url: "week2/Larrabee_Week2_notes.htm",
      label: "week3 notes",
      url: "week3/Larrabee_week3_notes.htm",
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