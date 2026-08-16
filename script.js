const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const result = document.getElementById("result");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === "") {
    result.textContent = "Please enter a search keyword.";
    return;
  }

  result.textContent = `You searched for: ${query}`;

  /*
    Later, you can replace this with a real API call, for example:

    fetch("https://your-backend-server.com/api/search?q=" + encodeURIComponent(query))
      .then(response => response.json())
      .then(data => {
        result.textContent = JSON.stringify(data);
      })
      .catch(error => {
        result.textContent = "Search failed.";
      });
  */
});
