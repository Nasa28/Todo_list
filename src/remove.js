export default removeTask = (ele)=> {
  if (ele.classList.contains('delete')) {
    ele.parentElement.parentElement.remove();
  }
}
