const mongoose = require('mongoose');

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017/DocuLabeler'; // Database name included in the URL

// Define a Mongoose schema for the "Users" collection
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add other fields as needed
}, { collection: 'Users' }); // Specify the collection name here

// Create a Mongoose model for the "Users" collection
const User = mongoose.model('User', userSchema);

// Data to be inserted
const newUser = {
  username: 'john_doe',
  email: 'john@example.com',
  // Add other fields as needed
};

// Connect to the MongoDB database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');

    // Create and save the new user document
    const user = new User(newUser);
    user.save()
      .then(() => {
        console.log('Inserted document successfully:', user._id);
        mongoose.connection.close(); // Close the MongoDB connection
      })
      .catch((insertErr) => {
        console.error('Error inserting document:', insertErr);
        mongoose.connection.close(); // Close the MongoDB connection on error
      });
  })
  .catch((connectErr) => {
    console.error('Error connecting to MongoDB:', connectErr);
  });
