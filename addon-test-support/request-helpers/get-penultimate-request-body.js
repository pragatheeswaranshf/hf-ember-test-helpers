import { getPenultimateRequest } from './get-penultimate-request';

export default function getPenultimateRequestBody() {
  const request = getPenultimateRequest();
  return JSON.parse(request.requestBody);
}