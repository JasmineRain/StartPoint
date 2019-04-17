// 歌曲详情

module.exports = (query, request) => {
    query.id = query.id.split(/\s*,\s*/)
    const data = {
        c: '[' + query.id.map(id => ('{"id":' + id + '}')).join(',') + ']',
        ids: '[' + query.id.join(',') + ']'
    };
    return request(
        'POST', `https://music.163.com/weapi/v3/song/detail`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
};