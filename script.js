//alert("hii");

var users=[
    {name:"Ekta Yadav",password:1234},
    {name:"Nishu",password:123},
    {name:"srishti Yadav",password:123456},
]


function log(){
    uname=username.value;
    pswd=password.value;
    users.forEach((user)=>{

        console.log(user);
        if(user.name==uname && user.password==pswd)
        {
            window.alert("welcome");
            document.getElementById("log").style.display="none";
            chatapp.style.display="flex";
        }
    }
)
}

function send(){
    m=msgbox.value;
    if(m.trim()==""){
        window.alert("please Enter msg")
    }
    else{
    msg=document.getElementById('msg');
    var li=document.createElement('li');
    var br=document.createElement('br');
    li.textContent=m;
    li.classList.add('msgtext');
    msg.appendChild(li);
    msg.appendChild(br);
    chatbox.scrollTop=chatbox.scrollHeight;
    msgbox.value="";
    }
}