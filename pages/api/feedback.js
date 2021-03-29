import fs from 'fs'
import path from 'path'


export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'form-data.json')
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  return data
}

export default (req, res) => {


  if (req.method === 'POST') {
    const name = req.body.name
    const email = req.body.email 

    const newSubmission = {
      id: new Date().toISOString(),
      name,
      email
    }

    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    data.push(newSubmission)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({ message: 'Successfully submitted form' })

  } else {
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    res.status(200).json({ feedback: data })
  }
}

