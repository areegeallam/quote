var quotes = [
    {
        'quote': " 'The best revenge is massive success. '",
        'author': "--Frank Sinatra"
    },

    {
        'quote': " 'You miss 100% of the shots you don't take.' ",
        'author': "--Wayne Gretzy"
    },

    {
        'quote': " 'Do not take life too seriously. You will not get out alive. '",
         'author': "--Elbert Hubbard"
    },

    {
        'quote': " 'Resentment is like drinking poison and waiting for your enemies to die. '",
         'author': "--Nelson Mandela"
    },
]

function get(){
    var num=Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerHTML=quotes[num].quote
    document.getElementById("author").innerHTML=quotes[num].author
}