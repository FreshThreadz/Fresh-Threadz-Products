import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectReuse: false,
  stages: [
    {duration: '30s', target: 10},
    {duration: '1m', target: 10},
    {duration: '30s', target: 100},
    {duration: '1m', target: 100},
    {duration: '30s', target: 0},
  ],
  thresholds: {
    http_req_duration: ['p(95) < 50'],
  }
};

const API = 'http://localhost:3000/products';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


export default () => {
  http.batch([
    ['GET', `${API}/`],
    ['GET', `${API}/${getRandomIntInclusive(1,1000)}`],
    ['GET', `${API}/${getRandomIntInclusive(1,1000)}/styles`],
    ['GET', `${API}/${getRandomIntInclusive(1,1000)}/related`],
    ['GET', `${API}/${getRandomIntInclusive(200000,650000)}`],
    ['GET', `${API}/${getRandomIntInclusive(200000,650000)}/styles`],
    ['GET', `${API}/${getRandomIntInclusive(200000,650000)}/related`],
    ['GET', `${API}/${getRandomIntInclusive(800000,1000000)}`],
    ['GET', `${API}/${getRandomIntInclusive(800000,1000000)}/styles`],
    ['GET', `${API}/${getRandomIntInclusive(800000,1000000)}/related`],
  ]);
  sleep(1);
}