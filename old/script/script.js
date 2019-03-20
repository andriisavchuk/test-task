/*
*   Display Date in list item
* */
function displayCurrentDate() {
  let currentDate = new Date().toDateString();
  let items = document.querySelectorAll('.current-date');

  items.forEach(item => {
    item.innerHTML = (currentDate);
  })
}
displayCurrentDate();
