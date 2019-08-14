import { Connection } from './index';

export const all = (postData) => {
// without callback
    return new Promise((resolve, reject) => {
        Connection.query('INSERT INTO users SET ?', postData, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    })
}

export default {
    all
}