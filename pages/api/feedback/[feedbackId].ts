import { NextApiRequest, NextApiResponse } from "next";
import { Feedback, buildFeedbacksPath, extractFeedbacks } from ".";
import { StatusCode } from "status-code-enum";

type ResponseData = { message: string; feedback?: Feedback };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { feedbackId } = req.query;

  const filePath = buildFeedbacksPath();
  const data = extractFeedbacks(filePath);
  const feedback = data.find((feedback) => feedback.id === feedbackId);

  if (!feedback) {
    res.status(StatusCode.ClientErrorNotFound);
  }

  res.status(StatusCode.SuccessOK).json({ message: "Success", feedback });
}
