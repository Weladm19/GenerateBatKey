export default function passGeneration(){
    let password: string = ""
    let caracteres: string = "123456789@aABENmnkOlpP*!"
    let passLength = 8
    for(let index=0; index < passLength; index++){
        password += caracteres.charAt(Math.floor(Math.random()* caracteres.length))
    }
    return password
}