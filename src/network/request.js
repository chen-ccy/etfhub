import axios from 'axios'

export function getEtfData(){
  return axios.get('http://120.24.92.39:3033/users/etfdata')
}