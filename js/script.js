let SortingBtn = document.querySelector("#btn1");
let AddButton = document.querySelector("#btn2");


let Items =[]
 
function addItem(){
let item = {
    id : Items.length+1,
    name:document.querySelector("#Data-input").value,
    CreatedDate: new Date().toDateString(),
    Completed: false,
   } 
   
   Items.push(item);
   localStorage.setItem('key', JSON.stringify(Items));
   DisplayItems()


   
}



function DisplayItems(){
    let names = JSON.parse(localStorage.getItem('key'))
    names.forEach((name,index)=>{
        let li = document.getElementById("incomplete-tasks")
        li.textContent=name.name;


      
    })
}








//    console.log(Items);
   AddButton.addEventListener("click", addItem)
    
