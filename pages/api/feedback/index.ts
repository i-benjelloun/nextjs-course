import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export interface Feedback {
  id: string;
  email: string;
  text: string;
}

type ResponseData = { message: string; feedback?: Feedback | Feedback[] };

export function buildFeedbacksPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedbacks(filePath: string): Feedback[] {
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

    const filePath = buildFeedbacksPath();
    const data = extractFeedbacks(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    const filePath = buildFeedbacksPath();
    const data = extractFeedbacks(filePath);
    res.status(200).json({ message: "this works", feedback: data });
  }
}
