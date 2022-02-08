import axios from "axios";
//const baseUrl = "http://worldguestbooking.com.ar:8080/"

function AxiosLogin(email, password, setFormValido, setLog, setError, setEmail, setPassword, setLoading, lastLocation) {
    axios.get("mock/login.json")
        .then(response => {
            const user = response.data.filter((user) => user.email === email);
            console.log(user);
            console.log(parseInt(password));
            if (user.length > 0) {
                if (user[0].password === parseInt(password)) {
                    sessionStorage.setItem("name", `${user[0].name.charAt(0).toUpperCase()}${user[0].name.slice(1)}`);
                    sessionStorage.setItem("surname", `${user[0].surname.charAt(0).toUpperCase()}${user[0].surname.slice(1)}`);
                    sessionStorage.setItem("iniciales", `${user[0].name.slice(0, 1).toUpperCase()}${user[0].surname.slice(0, 1).toUpperCase()}`)
                    sessionStorage.setItem("token", user[0].token);
                    sessionStorage.setItem("id", user[0].id);
                    sessionStorage.setItem("email", email);
                    sessionStorage.setItem("log", "true");
                    sessionStorage.setItem("role", user[0].role);
                    /*  setEmail({ campo:email, valido: true })
                     setPassword({campo:password, valido: true }) */
                    setFormValido(true);
                    //setLoading(false);
                    setLog(true);
                } else {
                    setPassword({ error: "La contraseña es inválida" })
                }
            }else {
                setPassword({ error: "El usuario no existe" })
            }

        })
        .catch(error => {
            console.log(error);
            /*if (error.response.status !== 200) {
                setError("Las credenciales son inválidas")
                setEmail({ campo: email, valido: false })
                setPassword({ campo: password, valido: false })
                setFormValido(false)
                sessionStorage.setItem("log", "false");
                sessionStorage.removeItem("token")
            }*/
        })

}

/*function AxiosCreate(name, surname, email, password, setFormValido, setLog, setError, setEmail, setPassword, setLoading, lastLocation,openModalConfirm) {
    axios.post(baseUrl + "users/create", {
        "name": `${name}`,
        "surname": `${surname}`,
        "email": `${email}`,
        "password": `${password}`
    })
    .then(response => {
        console.log(response);
        setLoading(false);
        openModalConfirm(true);
    })
    .catch(error => {
        setLoading(false)
        console.log(error.response);
        if (error.response.status !== 200) {
            setEmail({ valido: false, error: "El usuario ya existe."})
            setFormValido(false)
            sessionStorage.setItem("log", "false");
            sessionStorage.removeItem("token")
        }
    })
}*/

export { AxiosLogin /*, AxiosCreate*/ }