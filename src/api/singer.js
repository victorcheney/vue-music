// import jsonp from 'common/js/jsonp'
import { commonParams } from './config'
import axios from 'axios'

export function getSingerList() {
  const url = '/getSingerList'

  /* const data = Object.assign({}, commonParams, {
    // '-': 'getUCGI3961350960561656',
    '-': 'getUCGI47324136185420684',
    'g_tk': 5381,
    'loginUin': 0,
    'hostUin': 0,
    'format': 'json',
    'inCharset': 'utf8',
    'outCharset': 'utf-8',
    'notice': 0,
    'platform': 'yqq.json',
    'needNewCode': 0,
    'data': '{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}'
  }) */
  const data = Object.assign({}, commonParams, {
    'g_tk': 1928093487,
    'hostUin': 0,
    channel: 'singer',
    'format': 'json',
    'inCharset': 'utf8',
    'outCharset': 'utf-8',
    'notice': 0,
    'platform': 'yqq',
    'needNewCode': 0,
    'page': 'list',
    'key': 'all_all_all',
    'pagesize': 100,
    'pagenum': 1
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail(singerId) {
  const url = '/getSingerDetail'

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    ct: 24,
    singermid: singerId,
    order: 'listen',
    begin: 0,
    num: 100
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

// 获取播放音乐vkey
export function getVkey({songmid}) {
  const url = '/getVkey'

  const data = Object.assign({}, commonParams, {
    '-': 'getplaysongvkey3078070806817632',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"3192878321","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"3192878321","songmid":["${songmid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}