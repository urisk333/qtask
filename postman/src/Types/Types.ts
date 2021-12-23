export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type Comment = {
  postId: number,
  id: number, 
  name: string,
  email: string,
  body: string
}

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: UsersAddress,
  phone: string,
  website: string,
  company: UsersCompany
}

export type UsersAddress = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: AddressGeolocation
}

export type AddressGeolocation = {
  lat: string,
  lng: string
}

export type UsersCompany = {
  name: string,
  catchPhrase: string,
  bs: string
}

export type Message = {
  mainMessage: string
}

export type Mocks = {
  postData: Post,
  postsData: Post[],
  usersData: User[],
  commentsData: Comment[],
  mainMessageItemData: Message,
  mainMessageListData: Message
}
