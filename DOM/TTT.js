var restartb=document.querySelector('#b')
var cells=document.querySelectorAll('td')
function ClearAllCells(){
  for(cell of cells){
    cell.textContent=''
  }
}
restartb.addEventListener('click',ClearAllCells)
function contentChange(){
  if (this.textContent==''){
    this.textContent='X'
  }
  else if(this.textContent=='X'){
    this.textContent='O'
  }
  else {
    this.textContent=''
  }
}
for (cell of cells){
  cell.addEventListener('dblclick',contentChange)
}
