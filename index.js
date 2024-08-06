import express, { json } from "express";
import cors from "cors";
import { sendMail, mailOptions } from "./sendmail.js";
import 'dotenv/config'
const app = express();


app.use(cors());
app.use(json());

app.post('/', async (req, res) => {
    const email = req.body.email;
    console.log(email);

    try {
        mailOptions.to = email;
        console.log(mailOptions);

        const response = await sendMail(mailOptions);

        console.log(response);

        res.status(201).send("Mail sent successfully");
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).send("Failed to send mail");
    }
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});
