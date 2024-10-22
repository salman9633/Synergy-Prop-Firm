'use server'
import { GMAIL_PASSKEY, MAIL_ID, SPREAD_SHEET_ID } from '@/config/envConfig'
import axios from 'axios'
import moment from 'moment'
import { cookies } from 'next/headers'
import nodemailer from 'nodemailer'


let spreadsheetApi = axios.create({
    baseURL: `https://script.google.com/macros/s/${SPREAD_SHEET_ID}/`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
type GoogleSpreadSheet = {
    name: string
    email: string
}


export const joinWaitList = async ({ name, email }: GoogleSpreadSheet) => {
    let res = await spreadsheetApi.post('exec', { name, email, date: moment().format('llll') });
   
    if (res.data.result === 'success' || res.status == 200) {
        cookies().set({
            name: 'name',
            value: name,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            sameSite: 'strict',
            httpOnly: true
        })
        cookies().set({
            name: 'email',
            value: email,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            sameSite: 'strict',
            httpOnly: true
        })

        let transporter
        try {
            transporter = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: MAIL_ID,
                    pass: GMAIL_PASSKEY
                }
            })
        } catch (err:any) {
            throw new Error(err)
        }
        try {
           await transporter.sendMail({
                from: `"Synergy Incorporation" <${MAIL_ID}>`, // sender address
                to: `${email}`, // list of receivers
                subject: `WELCOME TO SYNERGY FAMILY`, // Subject line
                html:`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Synergy Trading</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color: #ffffff;">
          <tr>
            <td align="center" bgcolor="#d73cbe" style="padding: 20px 0;">
              <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Welcome to Synergy Trading!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px 20px 30px;">
              <p style="font-size: 18px; color: #333333; line-height: 1.5;">
                Hi <strong>${name}</strong>,
              </p>
              <p style="font-size: 16px; color: #333333; line-height: 1.5;">
                Thank you for your interest in Synergy Trading! You’ve successfully joined our waiting list, and we’re excited to have you on board as we prepare to launch.
              </p>
              <p style="font-size: 16px; color: #333333; line-height: 1.5;">
                We’re working hard to ensure everything is set for an incredible trading experience, and you’ll be one of the first to know once we’re ready to get started. Stay tuned for updates and be prepared to embark on a rewarding trading journey with Synergy!
              </p>
              <p style="font-size: 16px; color: #333333; line-height: 1.5;">
                If you have any questions in the meantime, feel free to reach out.
              </p>
              <p style="font-size: 16px; color: #333333; line-height: 1.5;">
                Best regards,<br/>
                <strong>The Synergy Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#d73cbe" style="padding: 30px 30px;">
              <p style="color: #ffffff; text-align: center; font-size: 14px; margin: 0;">
                &copy; 2024 Synergy Trading. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>`
                // text: `WELCOME TO SYNERGY FAMILY`, // plain text body
            });
            await transporter.sendMail({
                from: `"Synergy Incorporation" <${MAIL_ID}>`, // sender address
                to: `${MAIL_ID}`, // list of receivers
                subject: `NEW USER`, // Subject line
                text: `New User On Wait List ${name} - ${email}`, // plain text body
            });
          
        } catch (error:any) {
            throw new Error(error)
        }
    }

}

export const checkDisableCookie = async() => {
    console.log('llllll');
    
    console.log(cookies().has('name'));
    if (cookies().has('name') && cookies().has('email')) {
        console.log(cookies().has('name'));
        
        return true
    } else {
        return false
    }
}