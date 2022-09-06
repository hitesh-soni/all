import path from 'path';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import { log } from 'helper';

class Mail {
    /**
     * Class default constructor
     */
    constructor() {
        this.file_path = path.join(__dirname, path.basename(__filename));
    }


    /**
     * Send mail from smtp
     *
     * @param {String} template
     * @param {String} subject
     * @param {String} receiver
     * @param {Object} data
     * @returns Boolean
     */
    send = async(template, subject = '', receiver, data = {}, attachment = '') => {
        try {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            const testAccount = await nodemailer.createTestAccount();
            const options = {
                host: process.env.MAIL_HOST || 'smtp.ethereal.email',
                port: process.env.MAIL_PORT || 587,
                // service: process.env.EMAIL_SERVICE,
                secure: ((process.env.MAIL_PORT || 587) === 465), // true for 465, false for other ports
                auth: {
                    user: process.env.MAIL_USERNAME || testAccount.user, // generated ethereal user
                    pass: process.env.MAIL_PASSWORD || testAccount.pass, // generated ethereal password
                },
            };

            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport(options);
            const html = ejs.render(fs.readFileSync(`views/${template}.ejs`, 'utf-8'), data);
            // send mail with defined transport object
            const message = {
                from: 'Fred Foo 👥 <foo@blurdybloop.com>', // sender address
                to: receiver, // list of receivers
                subject, // Subject line
                html, // html body

            };

            // If any attachment
            if (attachment !== '') {
                message.attachments = [{ // filename and content type is derived from path
                    filename: path.basename(attachment),
                    path: path.resolve(__dirname, '../..', attachment), // path.resolve(__dirname, '../..', attachment)
                }];
            }

            // Send mail
            const info = await transporter.sendMail(message);

            log.info(`Message sent: %s ${info.messageId}`, this.file_path);
            return info.messageId || false;
        } catch (e) {
            log.error(null, e, this.file_path);
        }
        return false;
    }
}

export default new Mail();
