const quotes = [
    {
        quote : "The road to success and the road to failure are almost exactly the same.",
        author : "Colin R. Davis",
    },
    {
        quote : "It is better to fail in originality than to succeed in imitation.",
        author : "Herman Melville",
    },
    {
        quote : "Success is walking from failure to failure with no loss of enthusiasm.",
        author : "Winston Churchill",

    },
    {
        quote : "All progress takes place outside the comfort zone.",
        author : "Michael John Bobak",
    },
    {
        quote : "Success usually comes to those who are too busy to be looking for it.",
        author : "Henry David Thoreau",
    },
    {
        quote : "A rose by any other name would smell as sweet.",
        author : "William Shakespeare",
    },
    {
        quote : "If you want something said, ask a man; if you want something done, ask a woman.",
        author : "Margaret Thatcher",
    },
    {
        quote : "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author : "Albert Einstein",
    },
    {
        quote : "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
        author : "Robert Frost",
    },
    {
        quote : "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
        author : "Abraham Lincoln",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
 