function main() {
    const userQuestion = document.getElementById('question').value;
    console.log(`You asked: ${userQuestion}`);

    const randomNumber = Math.floor(Math.random() * 8);
    let eightBallAnswer = '';

    switch (randomNumber) {
        case 0:
            eightBallAnswer = 'Outlook not so good';
            break;
        case 1:
            eightBallAnswer = 'It is certain';
            break;
        case 2:
            eightBallAnswer = 'It is decidedly so';
            break;
        case 3:
            eightBallAnswer = 'Reply hazy, try again';
            break;
        case 4:
            eightBallAnswer = 'I have a good feeling';
            break;
        case 5:
            eightBallAnswer = 'Do not count on it';
            break;
        case 6:
            eightBallAnswer = 'Indubitably';
            break;
        case 7:
            eightBallAnswer = 'Signs point to yes';
            break;
        default:
            eightBallAnswer = 'Error: try again';
    }

    console.log(`The eight ball answered: ${eightBallAnswer}`);
    document.getElementById('answer').innerHTML = `${eightBallAnswer}`;
}