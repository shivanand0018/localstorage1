function submit1(event)
{
    event.preventDefault();
    let a={
        firstName:document.getElementById('FirstName').value,
        lastName:document.getElementById('lastName').value,
        email:document.getElementById('Email').value
    }
    let a1=JSON.stringify(a)
    localStorage.setItem(a.email,a1)
    console.log(localStorage.getItem(a.email))
    show(a);
}

function show(a)
{
    const parent=document.getElementById('listOfItems')
    const child=document.createElement('li')
    var btn=document.createElement('button')
    
    child.textContent=a.firstName+ "-"+a.lastName+"-"+a.email;
    btn.appendChild(document.createTextNode('Delete'))
    btn.onclick=()=>{
        localStorage.removeItem(a.email)
        parent.removeChild(child)
    }
    var btn1=document.createElement('button')
    btn1.appendChild(document.createTextNode('EDIT'))
    btn1.onclick=()=>{
        
        localStorage.removeItem(a.email)
        parent.removeChild(child)
        document.getElementById('FirstName').value=a.firstName;
        document.getElementById('lastName').value=a.lastName;
        document.getElementById('Email').value=a.email;
    }
    child.appendChild(btn1)
    child.appendChild(btn);
    parent.appendChild(child);
}




