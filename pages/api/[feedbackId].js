import { extractFeedback, buildFeedbackPath } from './feedback'

export default function handler (req, res) {
  // You can do all of the rest routes on the dynamic route
  // if (req.method === "DELETE") {

  // }

  const feedbackId = req.query.feedbackId
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)

  const feedback = data.find(feedback => feedback.id === feedbackId)
  res.status(200).json({ feedback })
}

