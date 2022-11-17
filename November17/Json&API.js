async function data(){
    //fetch data from public link 
    const getdata= await fetch("https://www.breakingbadapi.com/api/characters");

    //convert data to data object  using json
    const condata= await getdata.json();
    console.log( condata);

    //print selected data in browser
    document.getElementById("name").innerHTML =condata[0].name;
    document.getElementById("image").src =condata[0].img;

        //print all data in browser
        // for(let i=0;i<condata.length ; i++){
        // document.write( "name is :"+ condata[i].name +"<br>" );
        // //must add image tag
        // document.write("<img src="+condata[i].img+">" +"<br>" );

        // }
}
data();