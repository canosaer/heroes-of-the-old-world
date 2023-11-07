/*
NAME: data
DESCRIPTION: This file contains an object representing the global application state. The global state can be
read and updated with the useContext React hook.
*/

import TypesData from './types';

const data: TypesData = {
    data: [
        {
            id: -1,
        },
    ],
    dataRefresh: false,
    loading: false,
};

export default data;
