window.onload = function(e) {
    const user = localStorage.getItem('user');
    if (user) {
        document.getElementById('demo').innerHTML = user;
    } else {
        document.getElementById('demo').innerHTML = 'nobody :(';
    }
}