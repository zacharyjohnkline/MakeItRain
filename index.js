const routes = {
  "#/home": "./home.html",
  "#/plans": "./plans.html",
  "#/connect": "./connect.html",
  "#/store": "./store.html",
};

async function router() {
  let link = window.location.hash;
  console.log(link);
  let route = routes[link];
  console.log(route);
  if (route) getPage(route);
}

router();

async function getPage(url) {
  const response = await fetch(url);
  console.log(url);
  const text = await response.text();
  const element = document.getElementById("switch-container");
  console.log(element);
  element.innerHTML = text;
}

window.addEventListener("hashchange", router);
