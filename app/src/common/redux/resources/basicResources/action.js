import * as types from './types';

export const fetchusers = () => ({
    type: types.FETCH_USERS,
    payload: {
        path: `/user`,
        method: 'GET',
    },
    meta: {
        api: true,
        successMessage: 'Users fetch successfully',
        errorMessage: 'Users fetch failed',
    },
});

export const fetchfileData = () => ({
    type: types.FETCH_FILE_DATA,
    payload: {
        path: `/datafile/`,
        method: 'GET',
    },
    meta: {
        api: true,
        successMessage: 'File data fetch successfully',
        errorMessage: 'File data fetch failed',
    },
});

// export const fetchfile = () => ({
//     type: types.FETCH_FILE_DATA,
//     payload: {
//         path: `/`,
//         method: 'GET',
//     },
//     meta: {
//         api: true,
//         successMessage: 'File fetch successfully',
//         errorMessage: 'File fetch failed',
//     },
// });

export const uploadFile = (file) => ({
    type: types.UPLOAD_FILE,
    payload: {
        path: `/`,
        method: 'POST',
    },
    meta: {
        api: true,
        file: file,
        successMessage: 'File upload successfully',
        errorMessage: 'File upload failed',
    },
});



// // common state control actions
// export const deleteMessage = () => ({
//     type: types.DELETE_MESSAGE,
//     meta: {
//         api: false,
//         successMessage: 'Message deleted successfully',
//         errorMessage: "Message failed to delete",
//     },
// });

// export const deleteRoute = () => ({
//     type: types.DELETE_ROUTE,
//     meta: {
//         api: false,
//         successMessage: 'Route deleted successfully',
//         errorMessage: "Route failed to delete",
//     },
// });
// export const setLoader = (status, time) => ({
//     type: types.SET_LOADER,
//     payload : {
//         status: status,
//         time: time
//     },
//     meta: {
//         api: false,
//         successMessage: 'Loader seted successfully',
//         errorMessage: "Loader failed to set",
//     },
// });
// export const setProgress = (payload) => ({
//     type: types.SET_PROGRESS,
//     payload : payload,
//     meta: {
//         api: false,
//         successMessage: 'progress seted successfully',
//         errorMessage: "progress failed to set",
//     },
// });

// // api control actions
// export const getProviderList = () => ({
//     type: types.GET_SERVER_PROVIDER,
//     payload: {
//         path: `/serverproviders/all/details`,
//         method: 'GET',
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server provider fetch successfully',
//         errorMessage: "Server  provider failed to fetch",
//     },
// });

// export const getProviderDetails = (payload) => ({
//     type: types.GET_PROVIDER_DETAILS,
//     payload: {
//         path: `/serverproviders/os/size/location/details?Provider_ID=${payload}`,
//         method: 'GET',
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server os fetch successfully',
//         errorMessage: "Server  os failed to fetch",
//     },
// });

// export const getServerSizeDetails = (providerId, sizeId) => ({
//     type: types.GET_SERVER_SIZE_DETAILS,
//     payload: {
//         path: `/serverproviders/size/price/details?Provider_ID=${providerId}&Size_ID=${sizeId}`,
//         method: 'GET',
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server size details fetch successfully',
//         errorMessage: "Server  size details failed to fetch",
//     },
// });

// export const saveLaunchServerInfo = (payload) => ({
//     type: types.SAVE_SERVER_LAUNCH_INFO,
//     payload: {
//         data: payload
//     },
//     meta: {
//         api: false,
//         successMessage: 'Server data saved successfully',
//         errorMessage: "Server data failed to save",
//     },
// });

// export const resetLaunchServerInfo = (payload) => ({
//     type: types.RESET_SERVER_LAUNCH_INFO,
//     payload: {
//         data: payload,
//     },
//     meta: {
//         api: false,
//         successMessage: 'Server data reset successfully',
//         errorMessage: "Server data failed to reset",
//     },
// });

// export const launchNow = (parameter) => ({
//     type: types.LAUNCH_NOW,
//     payload: {
//         path: `/instance/create?${parameter}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server launch successfully',
//         errorMessage: "Server  failed to launch",
//     },
// });

// export const getServerList = () => ({
//     type: types.SERVER_LIST,
//     payload: {
//         path: `/instance/list/all`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server list fetch successfully',
//         errorMessage: "Server list failed to fetch",
//     },
// });

// export const startServer = (provider, instance) => ({
//     type: types.START_SERVER,
//     payload: {
//         path: `/instance/boot?Provider_ID=${provider}&Instance_ID=${instance}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server Start successfully',
//         errorMessage: "Server failed to Start",
//     },
// });


// export const restartServer = (provider, instance) => ({
//     type: types.RESTART_SERVER,
//     payload: {
//         path: `/instance/reboot?Provider_ID=${provider}&Instance_ID=${instance}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server Restart successfully',
//         errorMessage: "Server failed to Restart",
//     },
// });


// export const stopServer = (provider, instance) => ({
//     type: types.STOP_SERVER,
//     payload: {
//         path: `/instance/shutdown?Provider_ID=${provider}&Instance_ID=${instance}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server Stop successfully',
//         errorMessage: "Server failed to Stop",
//     },
// });

// export const deleteServer = (provider, instance) => ({
//     type: types.DELETE_SERVER,
//     payload: {
//         path: `/instance/delete?Provider_ID=${provider}&Instance_ID=${instance}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server Deleted successfully',
//         errorMessage: "Server failed to Delete",
//     },
// });

// export const fetchMasterCredentials = (instanceId) => ({
//     type: types.FETCH_MASTER_CREDENTIALS,
//     payload: {
//         path: `/instance/master/credential?Instance_ID=${instanceId}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Master credential fetch successfully',
//         errorMessage: "Master credential failed to fetch",
//     },
// });

// export const backupServer = (providerId, instanceId, snapName) => ({
//     type: types.BACKUP_SERVER,
//     payload: {
//         path: `/instance/snapshot?Provider_ID=${providerId}&Instance_ID=${instanceId}&Snapshot_Name=${snapName}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: 'Server backup successfll',
//         errorMessage: "Backup server failed",
//     },
// });

// export const changeBackupServerStatus = (providerId, instanceId, status) => ({
//     type: types.CHANGE_BACKUP_SERVER_STATUS,
//     payload: {
//         path: `/instance/backup?Provider_ID=${providerId}&Instance_ID=${instanceId}&Enable=${status}`,
//         method: 'POST'
//     },
//     meta: {
//         api: true,
//         successMessage: `Server backup ${status ? 'enabled ' : 'disabled '} successflly`,
//         errorMessage: `Backup server failed to ${status ? 'enable' : 'disable'}`,
//     },
// });



