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
    child.textContent=a.firstName+ "-"+a.lastName+"-"+a.email;
    parent.appendChild(child);
}




