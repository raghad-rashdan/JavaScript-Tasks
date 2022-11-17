async function InfoOfUsers(){

  //fetch data from public link 
  const getdata= await fetch("https://www.breakingbadapi.com/api/characters");

  //convert data to data object  using json
  const condata= await getdata.json();
  for(let i=0;i<condata.length ; i++){

    document.getElementById("name").innerHTML = condata[i].name;
    document.getElementById("image").src =condata[i].img;

  }

  document.getElementById("name").innerHTML =condata[i].name;
  document.getElementById("image").src =condata[i].img;

}
InfoOfUsers();

