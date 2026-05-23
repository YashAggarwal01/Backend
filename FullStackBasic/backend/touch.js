
import express from 'express';
const app = express();
app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res) => {
    const jokes = [
    {
        id: 1,
        title: "Programmer Humor",
        content: "Why do programmers prefer dark mode? Because light attracts bugs."
    },
    {
        id: 2,
        title: "Array Joke",
        content: "Why did the array break up? Because it had too many elements to handle."
    },
    {
        id: 3,
        title: "Debugging Life",
        content: "I tried to fix my bugs... but they turned into features."
    },
    {
        id: 4,
        title: "JavaScript Truth",
        content: "JavaScript developers be like: 'It works, I don’t know why.'"
    },
    {
        id: 5,
        title: "Frontend Pain",
        content: "CSS is like magic… until it isn’t."
    },
    {
        id: 6,
        title: "Backend Reality",
        content: "Backend developers don’t sleep… they just wait for APIs to respond."
    },
    {
        id: 7,
        title: "Coffee Dependency",
        content: "Code without coffee is like a bug without a stack trace."
    },
    {
        id: 8,
        title: "404 Humor",
        content: "My brain: Error 404 — Motivation not found."
    },
    {
        id: 9,
        title: "Git Joke",
        content: "I told Git to commit, but it said: 'You have nothing to commit but your mistakes.'"
    },
    {
        id: 10,
        title: "AI Joke",
        content: "I asked AI to fix my code… now I don’t understand it anymore."
    }
    ];
    res.send(jokes);
})



app.listen(port,()=> {
    console.log(`Serve at http://localhost:${port}`);
});






