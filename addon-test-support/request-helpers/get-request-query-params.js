import getRequest from './get-request';

export default function getRequestQueryParams() {
  const request = getRequest();
  return request.queryParams;
}