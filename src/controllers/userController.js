const path = require('path')
const loadAuth = (req, res) => {
    // if views folder is out of src we can write as res.renader('path')
    res.render(path.join(__dirname, '..', 'views', 'auth'));  
}

const successGoogleLogin = (req, res) => {
    const email = req.user ? req.user.email : null;
    //  if views folder is out of src we can write as res.render('success', { email });
    res.render(path.join(__dirname, '..', 'views', 'success'), { email }); 
}

const failureGoogleLogin = (req, res) => { 
    res.send("Error");
}

module.exports = {
    loadAuth,
    successGoogleLogin,
    failureGoogleLogin
}