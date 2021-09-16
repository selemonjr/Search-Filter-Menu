function search(){
  //Declare the variables//
  const input = document.querySelector("#search");
  const filter = input.value.toUpperCase();
  const menu = document.querySelector(".menu");
  const li = menu.getElementsByTagName("li");

  //Loop to loop through all the list items//
  for(i = 0; i < li.length; i++) {
    query = li[i].getElementsByTagName("a")[0];
    if(query.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
