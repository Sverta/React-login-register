import * as mysql from 'mysql';
import Users from './users';
import Members from './members';
import Tasks from './tasks';
import Registration from './registration';
import config from '../config/configuration';

export const Connection = mysql.createConnection(config.mysql);

// check connection
Connection.connect(err => {
    if(err) console.log("error",err);
});
export default {
    Users, Members, Registration, Tasks
}
