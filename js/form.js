	function formSubmit()
	{
		"use strict"
		let name = document.forms["my-form"]["name"].value
		let email = document.forms["my-form"]["email"].value

		let password = document.forms["my-form"]["password"].value
		let repassword = document.forms["my-form"]["repassword"].value

		//if(name == " " )
			//{
			//alert("Поле має бути заповненим!!!")
			//return false
			//}
		let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
		
		if(!email.match(reg))
			{
				alert("Ви ввели невалідну email адресу!")
				return false  
			}	
	
		if(password.length < 6)
		{
			alert("Пароль має містити не менше 6 символів")
			return false
		}

		if (password != repassword)
		{
			alert ("Пароль не співпадає !!!")
			return false

		}
console.log("123")
		let my-form = document.querySelector("form")
	    form.addEventListener("submit",
	    	function(event)
		    {
			console.log("Saving value", form.elements.value.value)
			event.preventDefault()
			})
	}
