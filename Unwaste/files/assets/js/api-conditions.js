function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}
function loginCheck(){
    let user = getCookie("user");
    if (user == null) {
        window.location.href = "../auth-normal-sign-in.htm";
    }else{
        let profile = JSON.parse(JSON.parse(user));
        return profile
    }
}
let profile = loginCheck()
console.log(profile)
document.getElementById('user').innerHTML = profile.data.name