/**
 * name : constants/common.js
 * author : Aman Kumar Gupta
 * Date : 04-Nov-2021
 * Description : All commonly used constants through out the service
 */

const successResponse = ({ statusCode = 500, responseCode = 'OK', message, result = [] ,meta={} }) => {
    return {
        statusCode,
        responseCode,
        message,
        result,
        meta
    }
};

const failureResponse = ({ message = "Oops! Something Went Wrong.", statusCode = 500, responseCode }) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.responseCode = responseCode;
    return error;
};

module.exports = {
    pagination: {
        DEFAULT_PAGE_NO: 1,
        DEFAULT_PAGE_SIZE: 100,
    },
    successResponse,
    failureResponse,
    guestUrls: [
        "/sessions/completed"
    ],
    DELETE_METHOD:"DELETE",
    dateFormat: 'dddd, Do MMMM YYYY',
    timeFormat: 'hh:mm A',
    MENTEE_SESSION_REMAINDER_EMAIL_CODE:"mentee_session_enrollment",
    MENTOR_SESSION_REMAINDER_EMAIL_CODE:"mentor_session_reminder",
    UTC_DATE_TIME_FORMAT:"YYYY-MM-DDTHH:mm:ss",
    internalAccessUrs:[
        "/notifications/emailCronJob"
    ]
};

