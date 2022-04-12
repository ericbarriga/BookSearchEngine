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

    input bookInput {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String!
    link: String
  }

    type Query {
    me:User
    }

    type Mutation {
        login(email: String, password: String):Auth
        addUser(username: String,email: String,password: String):Auth
        removeBook(bookId:String):User
        saveBook(input: bookInput!): User
    }
`;

module.exports = typeDefs;