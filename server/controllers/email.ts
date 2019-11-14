import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { config, logger } from '@things-factory/env'

export async function sendEmail({ receiver, subject, content }) {
  var emailInfo = config.get('email')

  // Send the email
  var transporter = nodemailer.createTransport({
    ...emailInfo
  })

  var mailOptions = {
    // from: 'moosung.gil@hatiolab.com',
    from: '"Opearto" <no-reply@hatiolab.com>',
    to: receiver,
    subject,
    text: content,
    html: content
  }

  return await transporter.sendMail(mailOptions, null)
}
