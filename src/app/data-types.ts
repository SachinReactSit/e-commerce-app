export interface SignUp{
    name: string,
    password: string,
    email: string
}

export interface logIn{
    email: string,
    password: string,
}

export interface product{
    id:number,
    name : string,
    price: string,
    category : string,
    color: string,
    image: string,
    description : string
}