import { Connection } from './index';

export const all = (postData) => {
    // without callback
    return new Promise((resolve, reject) => {
        // check if already exist the member
        Connection.query("SELECT COUNT(*) AS cnt FROM members WHERE login = ? ",
            postData.login, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (data[0].cnt > 0) {
                        // Already exist 
                        console.log('Already exist');
                    } else {
                        // if not Post data to members table
                        Connection.query('INSERT INTO members SET ?', postData, (error, results) => {
                            if (error) {
                                return reject(error);
                            }
                            resolve(results);
                        });
                    }
                }
            })
    })
}

export default {
    all
}