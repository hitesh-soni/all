import path from 'path';
import { log } from 'helper';
import { messaging } from 'config';

class Notification {
    /**
   * Class default constructor
   */
    constructor() {
        this.file_path = path.join(__dirname, path.basename(__filename));
    }

  send = async (data) => {
      Object.keys(data.data).forEach((e) => {
          data.data[e] = (typeof data.data[e] !== 'string') ? JSON.stringify(data.data[e]) : data.data[e];
      });

      try {
          messaging.sendToDevice(
              data.token,
              {
                  data: data.data,
                  notification: data.notification,
              },
              {
                  contentAvailable: data.content_available,
                  dryRun: data.dry_run,
                  priority: data.priority,
                  mutableContent: data.mutable_content,
              },
          );
      } catch (e) {
          log.error(null, e, this.file_path);
      }
      return false;
  };

  sendToTopic = async (data) => {
      try {
          Object.keys(data.data).forEach((e) => {
              data.data[e] = JSON.stringify(data.data[e]);
          });
          messaging.sendToTopic(
              data.topic,
              {
                  data: data.data,
                  notification: data.notification,
              },
              {
                  contentAvailable: data.content_available,
                  dryRun: data.dry_run,
                  priority: data.priority,
                  mutableContent: data.mutable_content,
              },
          );
      } catch (e) {
          log.error(null, e, this.file_path);
      }
      return false;
  };
}

export default new Notification();
