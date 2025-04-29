// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
  appId: "<APP_ID>",
  measurementId: "<MEASUREMENT_ID>"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// *** REGISTRO DE USUARIO ***
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Registro exitoso
                console.log('Usuario registrado:', userCredential.user);
                alert('Registro exitoso!');
                window.location.href = 'index.html'; // Redirige al inicio de sesión
            })
            .catch((error) => {
                // Manejo de errores
                console.error('Error al registrar usuario:', error);
                alert('Error al registrar usuario: ' + error.message);
            });
    });
}

// *** INICIO DE SESIÓN ***
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Inicio de sesión exitoso
                console.log('Usuario ha iniciado sesión:', userCredential.user);
                alert('¡Inicio de sesión exitoso!');
                // Redirige a la página principal o al contenido protegido
                window.location.href = 'home.html';
            })
            .catch((error) => {
                // Manejo de errores
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión: ' + error.message);
            });
    });
}

