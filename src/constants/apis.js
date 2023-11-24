/*--------------------------AUTHENTICATION--------------------------------*/
const BASE_AUTHENTICATION = '/account/'
export const REQUEST_LOGIN = BASE_AUTHENTICATION + 'login';
export const REQUEST_LOGOUT = BASE_AUTHENTICATION + 'logout';
/*------------------------------------------------------------------------*/

/*--------------------------APART-FOR-RENT--------------------------------*/
const APART_FOR_RENT_BASE_URL = '/apart-for-rent/'
export const REQUEST_GET_ALL_APART_FOR_RENT = APART_FOR_RENT_BASE_URL;
export const REQUEST_DELETING_APART_FOR_RENT = APART_FOR_RENT_BASE_URL;
export const REQUEST_ADDING_APART_FOR_RENT = APART_FOR_RENT_BASE_URL;
export const REQUEST_EDITING_APART_FOR_RENT = APART_FOR_RENT_BASE_URL;
export const REQUEST_GET_APART_FOR_RENT_DETAILS = APART_FOR_RENT_BASE_URL;
/*-------------------------------------------------------------------------*/

export const REQUEST_GET_ALL_STATIC_VALUE_APART_FOR_RENT = APART_FOR_RENT_BASE_URL + 'static-value';

/*--------------------------APART-FOR-SELL--------------------------------*/
const APART_FOR_SELL_BASE_URL = '/apart-for-sell/'
export const REQUEST_GET_ALL_APART_FOR_SELL = APART_FOR_SELL_BASE_URL;
export const REQUEST_DELETING_APART_FOR_SELL = APART_FOR_SELL_BASE_URL;
export const REQUEST_ADDING_APART_FOR_SELL = APART_FOR_SELL_BASE_URL;
export const REQUEST_EDITING_APART_FOR_SELL = APART_FOR_SELL_BASE_URL;
export const REQUEST_GET_APART_FOR_SELL_DETAILS = APART_FOR_SELL_BASE_URL;
/*-------------------------------------------------------------------------*/

/*--------------------------APART-UNDER-CONSTRUCTION--------------------------------*/
const APART_UNDER_CONSTRUCTION_BASE_URL = '/apart-under-construction/'
export const REQUEST_GET_ALL_APART_UNDER_CONSTRUCTION = APART_UNDER_CONSTRUCTION_BASE_URL;
export const REQUEST_DELETING_APART_UNDER_CONSTRUCTION = APART_UNDER_CONSTRUCTION_BASE_URL;
export const REQUEST_ADDING_APART_UNDER_CONSTRUCTION = APART_UNDER_CONSTRUCTION_BASE_URL;
export const REQUEST_EDITING_APART_UNDER_CONSTRUCTION = APART_UNDER_CONSTRUCTION_BASE_URL;
export const REQUEST_GET_APART_UNDER_CONSTRUCTION_DETAILS = APART_UNDER_CONSTRUCTION_BASE_URL;
export const REQUEST_GET_ALL_STATIC_VALUE_APART_UNDER_CONSTRUCTION = APART_UNDER_CONSTRUCTION_BASE_URL + 'static-value';
/*-------------------------------------------------------------------------*/

/*--------------------------APART-MANAGEMENT--------------------------------*/
const APART_MANAGEMENT_BASE_URL = '/apart-management/'
export const REQUEST_GET_ALL_APART_MANAGEMENT = APART_MANAGEMENT_BASE_URL;
export const REQUEST_DELETING_APART_MANAGEMENT = APART_MANAGEMENT_BASE_URL;
export const REQUEST_ADDING_APART_MANAGEMENT = APART_MANAGEMENT_BASE_URL;
export const REQUEST_EDITING_APART_MANAGEMENT = APART_MANAGEMENT_BASE_URL;
export const REQUEST_GET_APART_MANAGEMENT_DETAILS = APART_MANAGEMENT_BASE_URL;
/*-------------------------------------------------------------------------*/