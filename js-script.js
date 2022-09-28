document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    console.log("vscode");
    showOnScreen()  
});

async function showOnScreen(){
    try{
        var res= await axios.get('https://crudcrud.com/api/882bfa55866b47778c580e02127c7d2b/users');
        var data=res.data;
            
        for(let i=0;i<data.length;i++) {
            console.log("hello")
            let id=data[i]._id
            var name=data[i].ExpenseName
            email=data[i].Email
            purpose=data[i].Purposeformoneyspent;
            var amt=data[i].Amount
            var s=name+"---"+purpose+"-----"+email+"--"+amt
            var para_element = document.createElement('p');
            para_element.setAttribute("id",id);
            const divelement=document.getElementById("newDiv")
            var node=node=document.createTextNode(s);
            para_element.setAttribute("id",id);
            para_element.appendChild(node);
            var editbtn=document.createElement('input');
            var deletebtn=document.createElement("input");
            deletebtn.setAttribute("value","Delete")
            editbtn.setAttribute("value","Edit")
            deletebtn.setAttribute("type","button")
            editbtn.setAttribute("type","button")
            para_element.appendChild(deletebtn);
            para_element.appendChild(editbtn);
            deletebtn.addEventListener('click',()=>deletedata(id))
            editbtn.addEventListener('click',()=>editdata(data[i].ExpenseName,data[i].Email,data[i].Purposeformoneyspent,data[i].Amount,id))
            
            divelement.appendChild(para_element)
    }
}
catch(err){
    if (err.response.status === 404) {
        console.log('Resource could not be found!');
    } else {
        console.log(err.message);
    }
    }
    
}
async function deletedata(id){
    try{
        await axios.delete(`https://crudcrud.com/api/882bfa55866b47778c580e02127c7d2b/users/${id}`)
        var divelement=document.getElementById("newDiv");
        var para_element=document.getElementById(id);
        divelement.removeChild(para_element)
    

    }catch(err){
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
        }
}
async function postform(event){
    event.preventDefault()
    var id;
    var name_of_expense=document.getElementById('name').value
    var email=document.getElementById('email').value
    var purpose=document.getElementById('purpose').value
    var amount=document.getElementById('amt').value
    console.log(name_of_expense,email,purpose,amount);
    const obj={
        "ExpenseName":name_of_expense,
        "Email":email,
        "Purposeformoneyspent":purpose,
        "Amount":amount,    
    }
    try{
        id=await axios.post('https://crudcrud.com/api/882bfa55866b47778c580e02127c7d2b/users',obj)
        console.log("Succesful")
    }catch(err){
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
        }
    var divelement=document.getElementById("newDiv");
    var para_element=document.createElement('p');
    var text=document.createTextNode(obj.ExpenseName+" "+obj.Email+"  "+obj.Purposeformoneyspent+"  "+obj.Amount);
    para_element.appendChild(text);
    divelement.appendChild(para_element)
    var editbtn=document.createElement('input');
    var deletebtn=document.createElement("input");
    deletebtn.setAttribute("value","Delete")
    editbtn.setAttribute("value","Edit")
    deletebtn.setAttribute("type","button")
    editbtn.setAttribute("type","button")
    para_element.appendChild(deletebtn);
    para_element.appendChild(editbtn);
    deletebtn.addEventListener('click',()=>deletedata(id))
    editbtn.addEventListener('click',()=>editdata(obj.ExpenseName,obj.Email,obj.Purposeformoneyspent,obj.Amount,id))   
}
async function editdata(name,email,purpose,value,id){
    console.log("In edit function")
    document.getElementById('name').value=name;
    document.getElementById('email').value=email
    document.getElementById('purpose').value=purpose
    document.getElementById('amt').value=value
    console.log(name,email,purpose,value);
    try{
        await axios.delete(`https://crudcrud.com/api/102492ec0a884e00967d2bc4b6a33b3a/users/${id}`)
        await postform()
    }catch(err){
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
        }
}
