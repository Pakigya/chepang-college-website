/**
 * Created by BG on 3/4/17.
 */
function() {
    const config = {
        apiKey: "AIzaSyBf7v4wizbVI4lqVLYP_eDPEDPAaFaisrs",
        authDomain: "projecte2c.firebaseapp.com",
        databaseURL: "https://projecte2c.firebaseio.com",
        storageBucket: "projecte2c.appspot.com",
        messagingSenderId: "902252621325"
    };
    firebase.initializeApp(config);


    // Arrange all the elments for login
    const loginusername= document.getElementById(login-username);
    const loginpassword= document.getElementById(login-password);
    const loginbutton= document.getElementById(btn-login);

    // Arrange all the elments for signUp

    const signupemail= document.getElementById(signup-email);
    const signupfirstname= document.getElementById(signup-firstname);
    const signuplastname = document.getElementById(signup-lastname);
    const signuppassword= document.getElementById(signup-password);
    const signupbutton= document.getElementById(btn-signup);

    signupbutton.addEventListener('click', e => {
        const useremail = signupemail.value;
    const  userpassword = signuppassword.value;
    const authenticate= firebase.auth();
    const promise= authenticate.createUserWithEmailAndPassword(useremail,userpassword);
    promise.catch(e => console.log(e.message));
});

};
