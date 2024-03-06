const loadAuth = (req, res) => {
    res.render('auth');
}

const successGoogleLogin = (req, res) => {
    const email = req.user ? req.user.email : null;
    res.render('success', { email });
}

const failureGoogleLogin = (req, res) => { 
    res.send("Error");
}

module.exports = {
    loadAuth,
    successGoogleLogin,
    failureGoogleLogin
}