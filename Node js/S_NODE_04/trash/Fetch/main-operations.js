

// In-memory data storage
let users = [];


  // Get all users
  app.get('/api/users', (req, res) => {
    app.
    res.json(users);
  });

// Create a new user
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
  });
  
  // Update a user by ID
  app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
  
    // Find the user by ID and update its properties
    users = users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
  
    res.json(updatedUser);
  });
  
  // Delete a user by ID
  app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
  
    // Remove the user with the specified ID
    users = users.filter(user => user.id !== id);
  
    res.sendStatus(204);
  });
  