// 搜索
const dictionary = {
    song: 1,
    album: 10,
    singer: 100,
    playlist: 1000,
    user: 1002,
    MV: 1004,
    lyric: 1006,
    FM: 1009,
    video: 1014
};

module.exports = (query, request) => {
    const data = {
        s: query.keywords,
        type: dictionary[query.t] || 1, // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
        limit: query.n || 30,
        offset: (query.p - 1)*(query.n || 30) || 0
    };
    return request(
        'POST', `https://music.163.com/weapi/search/get`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
};