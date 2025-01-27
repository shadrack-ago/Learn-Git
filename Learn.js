const authpage = {
    _username:'user123',
    _password: 'password123',

    get username(){
        return this._username
    },
    set username(newUsername){
        if(typeof newUsername==='string' && newUsername.length >3){
            this._username = newUsername;


        }
        else{
            console.log('Username must be a string(word) with at least 4 characters.')
        }
    },

    //setter for password
    set password(newPassword){
        if(typeof newPassword=== 'string' && newPassword.length >= 8){
            this._password=newPassword;
        }
        else{
            console.log('Password must be a string with at least 8 characters.');
        }
    },

    authenticate(inputusername, inputpassword){
        if(inputusername=== this._username && inputpassword === this._password){
            console.log('login successful');
        }
        else {
            console.log('Invalid username or password.');
        }
    }

} 