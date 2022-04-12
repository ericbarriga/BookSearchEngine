import { gql } from '@apollo/client'

export const GET_ME = gql`
{
    me {
    _id
    username
    email
    savedBooks{
    bookId
    images
    author
    description
    title
    link
    }
  }
}
`;