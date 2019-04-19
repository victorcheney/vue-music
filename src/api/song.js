import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    pcachetime: +new Date().getTime()
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}