import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export interface Feedback {
  id: string;
  email: string;
  text: string;
}

type ResponseData = { message: string; feedback?: Feedback };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedbackText,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    console.log(fileData);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    res.status(201).json({ message: "this works" });
  }
}
