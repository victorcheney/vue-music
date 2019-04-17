// import {playMode} from 'common/js/config'
// // import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

// const state = {
//   singer: {},
//   playing: false,
//   fullScreen: false,
//   playlist: [],
//   sequenceList: [],
//   mode: playMode.sequence,
//   currentIndex: -1,
//   disc: {},
//   topList: {},
//   // searchHistory: loadSearch(),
//   // playHistory: loadPlay(),
//   // favoriteList: loadFavorite()
// }

// export default state

import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [], // 播放列表
  sequenceList: [], //
  mode: playMode.sequence, // 播放模式
  currentIndex: -1
}

export default state