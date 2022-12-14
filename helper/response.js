import etag from 'etag';
import path from 'path';
import { constants } from 'config';
import { log } from 'helper';

class Response {
    /**
     * Class default constructor
     */
    constructor() {
        this.file_path = path.join(__dirname, path.basename(__filename));
    }

    /**
     * @returns {object} reflection object
     */
    res200 = (res, body = '', otherOptions = '', message) => {
        try {
            if (body.toJS) {
                body = body.toJS();
            }
            const json = JSON.stringify({
                success: true,
                message: message || constants.messages.defaultSuccessMessage,
                status: constants.responseCode[200],
                data: body,
                meta: otherOptions,
            });
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('ETag', etag(json));
            }
            res.status(constants.responseCode[200]);
            return res.end(json);
        } catch (e) {
            log.error(res, e, this.file_path);
            return false;
        }
    }

    /**
     * @returns {object} reflection object
     */
    res500 = (res, body = '', message) => {
        body = (body === '') ? constants.messages.internalServerError : body;

        const json = JSON.stringify({
            success: false,
            message: message || constants.messages.defaultErrorMessage,
            status: constants.responseCode[500],
            error: body,
        });
        if (!res.headersSent) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
        }
        res.status(constants.responseCode[500]);
        return res.end(json);
    }

    /**
     * @returns {object} reflection object
     */
    res404 = (_req, res, message) => {
        try {
            const json = JSON.stringify({
                status: constants.responseCode[404],
                success: false,
                message: message || constants.messages.defaultErrorMessage,
                error: constants.messages.pageNotFound,
            });
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
            }
            res.status(constants.responseCode[404]);
            return res.end(json);
        } catch (e) {
            log.error(res, e, this.file_path);
            return false;
        }
    }

    /**
     * @returns {object} reflection object
     */
    res422 = (res, body, message) => {
        try {
            if (body.toJS) {
                body = body.toJS();
            }
            const json = JSON.stringify({
                success: false,
                message: message || constants.messages.defaultErrorMessage,
                status: constants.responseCode[422],
                error: body,
            });
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
            }
            res.status(constants.responseCode[422]);
            return res.end(json);
        } catch (e) {
            log.error(res, e, this.file_path);
            return false;
        }
    }

    /**
     * @returns {object} reflection object
     */
    res401 = (res, body = null, message) => {
        try {
            if (body && body.toJS) {
                body = body.toJS();
            } else {
                body = constants.messages.unauthorizedAccess;
            }
            const json = JSON.stringify({
                success: false,
                message: message || constants.messages.defaultErrorMessage,
                status: constants.responseCode[401],
                error: body,
            });
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
            }
            res.status(constants.responseCode[401]);
            return res.end(json);
        } catch (e) {
            log.error(res, e, this.file_path);
            return false;
        }
    }

    /**
     * @returns {object} reflection object
     */
    res400 = (res, body = null, message) => {
        try {
            if (body && body.toJS) {
                body = body.toJS();
            } else {
                body = constants.messages.tokenExpired;
            }
            const json = JSON.stringify({
                success: false,
                message: message || constants.messages.defaultErrorMessage,
                status: constants.responseCode[400],
                error: body,
            });
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
            }
            res.status(constants.responseCode[400]);
            return res.end(json);
        } catch (e) {
            log.error(res, e, this.file_path);
            return false;
        }
    }
}
export default new Response();
