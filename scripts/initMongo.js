db.createUser({
  user: 'admin',
  pwd: 'Password1!',
  roles: [{
    role: "userAdminAnyDatabase",
    db: "admin"
  }]
});