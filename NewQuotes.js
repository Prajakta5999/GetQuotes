
    const myQuotes = 
    [
        
        {'author': 'Jim Rohn', 
        'quote': 'Beware of what you become in pursuit of what you want.'
        },
        {'author': 'Epictetus', 
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
        },
        {'author': 'Frank Sinatra', 
        'quote': 'The best revenge is massive success.'
        },
        {'author': 'Wayne Gretzy', 
        'quote': 'You miss 100% of the shots you don\'t take.'
        },
        {'author': 'Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
        },
        {'author': 'Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
        },
        {'author': 'Will Rogers', 
        'quote': 'Don’t Let Yesterday Take Up Too Much Of Today.'
        },
        {'author': 'Unknown', 
        'quote': 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.'
        },
    ];

    function getQuote(){
    const random = Number.parseInt(Math.random()*myQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${myQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${myQuotes[random].author}`;

}

