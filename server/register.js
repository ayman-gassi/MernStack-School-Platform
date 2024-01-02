db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
// Define a schema
const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});
// Create a model based on the schema
const User = mongoose.model('User', userSchema);

//Create and save a new user
const newUser = new User({
    Name: 'Zack',
    Email: 'zack1@example.com',
    Password: '1234'
});
newUser.save()
    .then(user => {
        console.log('User saved:', user.id);
        // Query the database
        return User.find({});
    })
    .then(users => {
        console.log('All Users:', users);
        // Close the connection
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        // Close the connection in case of an error
        mongoose.connection.close();
    });
    
});
