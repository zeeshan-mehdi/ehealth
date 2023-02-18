import doctor from "./doctor";

export interface Appointment{
    doctor:doctor,
    userName:string,
    date:string,
    time:string
}