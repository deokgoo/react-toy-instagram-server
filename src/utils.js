import { adjectives, nouns } from './words';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport'

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}

export const sendMail = (email) => {
  const {SENDGRID_USERNAME, SENDGRID_PASSWORD} = process.env
  const options = {
    auth: {
      api_user: SENDGRID_USERNAME,
      api_key: SENDGRID_PASSWORD,
    }
  };
  const client = nodemailer.createTransport(sgTransport(options))

  return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: 'kkddgg1001@gmail.com',
    to: adress,
    subject: "Login Secret for Prismagram",
    html: `Hello! Your login secret it <strong>${secret}.</strong> <br/> Copy paste on the app/website to log in`
  }

  return sendMail(email);
}