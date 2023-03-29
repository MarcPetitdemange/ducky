import { User } from "../User";

export class StringUtils{

    /**
     * Construct a string to wish a birthday to a User
     * @param user 
     * @returns 
     */
    static wishABirthday(user:User): string{
        return user.firstname + " " + user.lastname + " toute l'équipe Versusmind te souhaite un Joyeux Anniversaire !";
    }
}
