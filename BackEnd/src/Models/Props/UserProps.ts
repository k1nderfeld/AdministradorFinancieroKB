export interface UserProps {
    id? : number,
    status : boolean,
    rut : string,
    name : string,
    lastName : string,
    birthDate : Date,
    phoneNumber : string,
    email : string,
    password : string,
    profilePicture : string | null
}