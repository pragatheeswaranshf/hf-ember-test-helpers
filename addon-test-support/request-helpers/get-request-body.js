import getRequest from './get-request';

export default function getRequestBody() {
  const request = getRequest();
  return JSON.parse(request.requestBody);
}