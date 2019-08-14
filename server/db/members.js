import { Connection } from './index';

export const all = () => {
// without callback
    return new Promise((resolve, reject) => {
        // Executing the MySQL query (select all data from the 'members' table).
        Connection.query('SELECT * FROM members', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) {
                return reject(error)
            }

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            resolve(results)
        });
    })
}

export default {
    all
}