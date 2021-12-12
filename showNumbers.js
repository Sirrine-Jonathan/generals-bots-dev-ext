function showNumbers(){
  let i = 0;
  let body = document.querySelector('table#gameMap tbody');
  let rows = body.querySelectorAll('tr');
  [].forEach.call(rows, (row) => {
    let cols = row.children;
    [].forEach.call(cols, (col) => {
      let note = document.createElement('span');
      note.innerText = i++;
      note.classList.add('tile_number');
      col.style.position = "relative";
      col.appendChild(note);
    })
  })
}
showNumbers();
window.addEventListener('DOMContentLoaded', (event) => {
  showNumbers();
});
