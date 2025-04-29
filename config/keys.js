dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + 'nodepassportlogin.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};