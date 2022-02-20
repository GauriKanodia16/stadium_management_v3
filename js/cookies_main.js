function setBgColor()
{
    var i
    list = document.cookie.split('; ')
    for(i = 0; i < list.length; i++)
    {
        if(list[i].split('=')[0] == 'color')
        {
            document.body.style.backgroundColor = list[i].split('=')[1]
            document.getElementById("page_color").value = list[i].split('=')[1]
        }
    }
}
function addCookie()
{   

    var login = document.getElementById("login_ID").value
    var pass = document.getElementById("confirm_password").value
    if((login.trim() != "")  && (pass.trim() != ""))
    {
        document.cookie = "login=" + login + ";expires=Sun, 13 Feb 2022 00:00:00 UTC;"
        document.cookie = "pass=" + pass + ";expires=Sun, 13 Feb 2022 00:00:00 UTC;"
        
        alert("Cookie Added")
        window.location.reload()
    }
    else
    {
        alert("Form Incomplete")
    }
}

function readCookie()
{
 
    var i
    var message = ""
    var list = document.cookie.split(';')
    for(i = 0; i < list.length; i++)
    {
        message += list[i].split('=')[0] + ": " + list[i].split('=')[1] + "\n"
    }
    alert(message)
}

function removeCookie()
{
   
    document.cookie = "login=;expires=Sun, 13 feb 2022 00:00:00 UTC;"
    document.cookie = "pass=;expires=Sun, 13 feb 2022 00:00:00 UTC;"
   
    alert("cookies cleared")
    window.location.reload()
}

function changeColor()
{
    var color = document.getElementById("page_color").value
    document.cookie = "color=" + color + ";expires=Sun, 2 feb 2022 00:00:00 UTC;"
    localStorage.setItem('color', color)
    sessionStorage.setItem('color', color)
    document.body.style.backgroundColor = color
}