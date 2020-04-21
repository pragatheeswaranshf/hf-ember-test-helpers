import { getRequest } from './get-request';

export default function getRequestBody() {
  const request = getRequest();
  return request.queryParams;
}