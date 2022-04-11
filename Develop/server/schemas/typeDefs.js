const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID 
    username: String
    email: String
    password: String
    savedBooks:[Book]
 }

  type Book {
  author: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
  }

    type Auth {
        token: ID
        User: User 
    }

    type Query {
    me:User
    }

    type Mutation {
        login(email: String, password: String):Auth
        addUser(username: String,email: String,password: String):Auth
        removeBook(bookId:String):User
    }
`;



module.exports = typeDefs;