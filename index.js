const FirstName=document.getElementById("Firstname");
const LastName=document.getElementById("lastname");
const PhoneNumber=document.getElementById("phoneNumber");
const Submit=document.getElementById("submit");

const Alert=document.querySelector("#alert")

const GetElement=document.querySelector("#getElement")

const ArrayList=
[{firstname:"ali",lastName:"amiri",phoneNumber:"09305443243"},
{firstname:"reza",lastName:"nasiri",phoneNumber:"09305442513"}];

Alert.children[1].addEventListener("click",()=>{
    Alert.style.top="-60%"
})
// لیست سازی 
const TodoList=()=>{
    ArrayList.forEach((item)=>
    {
        const List=document.createElement("li");
        const firstNameList=document.createElement("h1");
        firstNameList.innerText=item.firstname;
        const LastNameList=document.createElement("h3");
        LastNameList.innerText=item.lastName;
        const phoneNumberList=document.createElement("p");
phoneNumberList.innerText=item.phoneNumber;
        List.appendChild(firstNameList);
        List.appendChild(LastNameList);
        List.appendChild(phoneNumberList);
        GetElement.appendChild(List);
        List.style.backgroundColor="aqua";
        List.style.borderRadius="0.5rem"
    })
}

TodoList();


//
Submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!FirstName.value)
    {
        Alert.style.top="10%";
        Alert.children[2].children[0].style.width="100%"
setTimeout(()=>{
    Alert.children[2].children[0].style.width="0%"
Alert.style.top="-60%";
},7000)
    }
    else{
    const form={
        firstname:FirstName.value,
        lastName:LastName.value,
        phoneNumber:PhoneNumber.value
    };
    GetElement.innerHTML="";
    ArrayList.push(form);
    TodoList();

   
}
console.log(form);
})