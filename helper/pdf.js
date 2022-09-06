import path from 'path';
import ejs from 'ejs';
import fs from 'fs';
import { log } from 'helper';
import { v4 as uuid } from 'uuid';
import { storage } from 'config/firebase';
import mail from './mail';

const pdf = require('html-pdf');

class Pdf {
    /**
   * Class default constructor
   */
    constructor() {
        this.file_path = path.join(__dirname, path.basename(__filename));
    }

  generate = async (template, data = {}, height = '16.87in', width = '12.75in') => {
      try {
          const name = `public/report/${new Date().getTime()}.pdf`;
          const UUID = uuid();
          const html = ejs.render(
              fs.readFileSync(`views/${template}.ejs`, 'utf-8'),
              data,
          );
          const options = {
              height,
              width,
              header: {
                  height: '20mm',
              },
              footer: {
                  height: '20mm',
              },
              zoom: 0.5,
              border: {
                  top: '0in',
                  right: '0.5in',
                  bottom: '0in',
                  left: '0.5in',
              },
          };
          return new Promise((resolve, rej) => {
              pdf
                  .create(html, options)
                  .toFile(name, async () => {
                      return storage
                          .bucket(process.env.BUCKET_NAME)
                          .upload(name, {
                              destination: `${data.storagePath}${new Date().getTime()}.pdf`,
                              gzip: true,
                              metadata: {
                                  firebaseStorageDownloadTokens: UUID,
                                  cacheControl: 'public, max-age=31536000',
                              },
                          })
                          .then(async(v) => {
                              const file = v[0];
                              if (data.sendMail) {
                                  await mail.send(
                                      'mail/appointment_email',
                                      'Appointment Invoice',
                                      data.sendMail,
                                      {},
                                      `${name}`,
                                  );
                              }

                              fs.unlinkSync(name);
                              return resolve(`https://firebasestorage.googleapis.com/v0/b/${
                                  process.env.BUCKET_NAME
                              }/o/${encodeURIComponent(file.name)}?alt=media&token=${UUID}`);
                          });
                  });
          });
      } catch (e) {
          log.error(null, e, this.file_path);
      }
      return false;
  };
}

export default new Pdf();
