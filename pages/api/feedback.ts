import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export interface Feedback {
  id: string;
  email: string;
  text: string;
}

type ResponseData = { message: string; feedback?: Feedback | Feedback[] };

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath: string) {
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

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

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ message: "this works", feedback: data });
  }
}
