const BASE_URL = 'https://app.nocodb.com/api/v1/db/data/noco';
const EVENT_URL = 'https://app.nocodb.com/api/v2/tables/mwu56sppizrkiya/records';
const ACCOUNT_URL = 'https://app.nocodb.com/api/v2/tables/m7vm0tg07gje478/records';
const RESERVATION_URL = 'https://app.nocodb.com/api/v2/tables/m9yuay09dgnkd2i/records';
const ANNOUNCEMENT_URL = 'https://app.nocodb.com/api/v2/tables/mtrg0ths6noz89o/records'; 

export const apikey = '2LDRJE3zbiKS_05EZ5as85ZghFLMWOrdBrU_kNDo';
export const getAllEvents = (offset, limit) => {
  return `${EVENT_URL}?offset=${offset}&limit=${limit}`;
}
export const nearbyEvents = (offset, limit, where) => {
  return `${BASE_URL}/p9nchx72w7ehalc/mwu56sppizrkiya/views/vwr2ue4nanhwft71?offset=${offset}&limit=${limit}&where=${where}`;
}
export const eventDetails = (id) => {
  return `${EVENT_URL}/${id}`;
}
export const getAccountsByParams = (offset, limit, where) => {
  return `${ACCOUNT_URL}?offset=${offset}&limit=${limit}&where=${where}`;
}
export const bookedSeatByEventIds = (offset, limit, where) => {
  return `${RESERVATION_URL}?offset=${offset}&limit=${limit}&where=${where}`;
} 
export const createBookedSeat = () => {
  return `${RESERVATION_URL}`;
}
export const getEventTicketBookedByUser = (offset, limit, where) => {
  return `${RESERVATION_URL}?offset=${offset}&limit=${limit}&where=${where}`;
}
export const registerUser = () => {
  return `${ACCOUNT_URL}`;
}
export const latestAnnoucement = (offset, limit, sort) => {
  return `${ANNOUNCEMENT_URL}?offset=${offset}&limit=${limit}&sort=${sort}`;
}

