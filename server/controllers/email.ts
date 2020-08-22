import { config } from '@things-factory/env'
import nodemailer from 'nodemailer'

const debug = require('debug')('things-factory:email-base:email')

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

  try {
    var transporter = nodemailer.createTransport({
      ...emailInfo,
    })

    var mailOptions = {
      from: sender,
      to: receiver,
      subject,
      text: content,
      html: content,
    }

    debug('sendEmail', sender, receiver, subject, content)

    return await transporter.sendMail(mailOptions, null)
  } catch (e) {
    console.log(e)
  }
}
