import { config } from '@things-factory/env'
import nodemailer from 'nodemailer'

/**
 * sendEmail({
 *  sender: 'No reply <no-reply@hatiolab.com>',
 *  receiver: 'someone@email.com',
 *  subject: 'Subject',
 *  context: 'Content'
 * })
 */
export async function sendEmail({ sender, receiver, subject, content }) {
  var emailInfo = config.get('email')

  var transporter = nodemailer.createTransport({
    ...emailInfo
  })

  var mailOptions = {
    from: sender,
    to: receiver,
    subject,
    text: content,
    html: content
  }

  return await transporter.sendMail(mailOptions, null)
}
