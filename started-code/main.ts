import { StringManipulationService, NumberManipulationService } from './main-service';

class StringManipulation implements StringManipulationService {
    //rounak
    print(word: string): void {

        // - Display the given string without any modifications (use console.log to print)

        console.log(word);

        // - Display the given string in uppercase.

        console.log(word.toUpperCase());

        // - Display the given string in lowercase.

        console.log(word.toLowerCase());

        // - Display the character at a particular position in a given string.

        console.log("The character at postion 2 in '" + word + "' is " + word.charAt(2));
        // - Concatenate the given string with another string.

        console.log(word.concat(" I am a FullStack Web Developer"));
        // - Slice the given string and display.

        console.log(word.slice(0, 2));
        // - Find the length of the given string.

        console.log(word.length);

    }

    printWithSpace(mystring: string): void {
        console.log(mystring.split('').join(' '));
    }
    findVowel(str: string): void {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u') {
                count++;
            }
        }
        console.log(count);
    }
}
var word: string = "I love programming";
var manipulation = new StringManipulation;
manipulation.print(word);
manipulation.printWithSpace(word);

manipulation.findVowel(word);


class NumberManipulations implements NumberManipulationService {
    /* Prime **/

    findPrime(num: number): void {
        var flag: boolean = true;
        var n = num;
        for (var i = 2; i < Math.ceil(num / 2); i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }

        }
        if (flag == true)
            console.log(n + " is a prime number");
        else
            console.log(n + " is not a prime number");

    }
    /*magic no*/

    findMagic(num: number): number {
        let temp: number = num;
        let rem: number = 0;
        let sum: number = 0;

        while (temp != 0) {
            rem = temp % 10;
            sum += rem;
            temp = Math.floor(temp / 10);
        }
        // }
        if (Math.floor(sum / 10) != 0) {
            return this.findMagic(sum);
        }
        else {
            console.log(sum);
            return sum;
        }
    }

}
var numbr: number = 199;
var numManipulations = new NumberManipulations();
numManipulations.findPrime(numbr);
numManipulations.findMagic(199);