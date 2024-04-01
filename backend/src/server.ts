import express, { json, NextFunction, Request, Response } from 'express';

const port = process.env.PORT || 3000;
const app = express();
app.use(json());

/*
  Interface sketch

  - user registration
    - Course code list
      - I am going to let the users be responsible 
        for checking if each course is available 
        in any given term.
    - Programming languages list
    - Other information
      - Languages
      - Gender
      - Age
      - WAM bracket
      - Academic Social Ratio
    - Hobbies list
    - Preferences (see other information)
  - user login

  - Preview self profile
  - Modify self profile (see registration)

  - Matching
    - Receive the next `n` recommended profiles
    - Send back to the server when matched

  - Messaging Socket.IO magic
*/


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);

  if (err instanceof ServerError) {
    return res.status(err.status).json({ error: err.message });
  }

  return res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`UNSWipe-backend listening at http://localhost:${port}`);
});
