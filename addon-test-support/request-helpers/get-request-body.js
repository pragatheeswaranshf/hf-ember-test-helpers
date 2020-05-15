import getRequest from './get-request';

export default function getRequestBody(url) {
  const request = getRequest(url);
  return JSON.parse(request.requestBody);
}