/*
*   Display Date in list item
* */
function displayCurrentDate() {
  document.getElementById('item-date').innerHTML = new Date().toDateString();
}
displayCurrentDate();
