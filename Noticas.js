function loginuno() {
    window.location.href = "https://www.facebook.com/100006923554973/posts/3702543106653105/?mibextid=rS40aB7S9Ucbxw6v";
}
function logindos() {
    window.location.href = "https://www.facebook.com/100050087748177/posts/pfbid0j4yE9CYHAkHaU13vTrgEWRpARyoGU9MvsQQXgeHx7UsJsxZppTcwodyF84uiPjiml/?app=fbl";
}
function logintres() {
    window.location.href = "https://www.facebook.com/100006923554973/posts/3702543106653105/?mibextid=rS40aB7S9Ucbxw6v";
}
function login() {
    event.preventDefault();
    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    console.log("Usuario:", username);
    console.log("Contraseña:", password);
}

function signup() {
    window.location.href = "Signup.html";
}

function cancelar() {
    window.location.href = "Noticias.html";
}
function reemplazarTexto() {
    let fraseModificada = "Nuestra misión es presentar de manera dinámica y atractiva las noticias más relevantes y actuales, abarcando una variedad de temas que impactan a nuestra audiencia. Nos esforzamos por ofrecer contenido veraz, equilibrado y de calidad, manteniendo altos estándares éticos en nuestra cobertura periodística. Buscamos proporcionar una experiencia informativa completa, utilizando multimedia y recursos interactivos para enriquecer la comprensión de nuestros lectores. Además, promovemos la participación activa de la comunidad, fomentando el debate constructivo y la reflexión crítica sobre los eventos que moldean nuestro mundo.";
    document.getElementById("textoOriginal").innerText = fraseModificada;
}

function cambiarEstilo() {
    let body = document.body;
    let texto = document.getElementById('textoOriginal');

    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        texto.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        texto.style.color = 'black';
    }
}
function reemplazarTextodos() {
    let fraseModificada = "Nuestra visión es transformar la manera en que las personas interactúan con las noticias, ofreciendo una experiencia única y personalizada que trascienda los límites tradicionales del periodismo. Nos esforzamos por ser una plataforma innovadora que inspire el descubrimiento, el aprendizaje y la acción. Aspiramos a ser más que solo un medio de información, buscamos ser un motor de cambio positivo en la sociedad, promoviendo la empatía, la diversidad de voces y la participación ciudadana activa. Nuestra visión es crear un mundo donde cada individuo esté informado, capacitado y motivado para contribuir a un futuro mejor.";
    document.getElementById("textoOriginal").innerText = fraseModificada;
}

function cambiarEstilodos() {
    let body = document.body;
    let texto = document.getElementById('textoOriginal');

    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        texto.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        texto.style.color = 'black';
    }
}