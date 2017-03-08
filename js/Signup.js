function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = '../mapPage.html';
        } else {
            // User is signed out.
        }

    });
    document.getElementById('btn-login').addEventListener('click', toggleSignIn, false);
    document.getElementById('btn-signup').addEventListener('click', handleSignUp, false);
}
window.onload = function() {
    initApp();
};


/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var signupbox = document.getElementById('signupbox');
    var loginbox = document.getElementById('loginbox');


    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
            return;
        }
        console.log(error);
    });
    alert('Account Created! Thank you!!!');
    signupbox.style.display='none';
    loginbox.style.display='block';
}

/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    } else {
        var email = document.getElementById('login-username').value;
        var password = document.getElementById('login-password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }
}