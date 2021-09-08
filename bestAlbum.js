// 각 곡들의 genres와 play횟수가 genres, playes 배열로 주어진다.
// 각 곡들의 고유번호는 genres의 인덱스와 같다.
// 잘 팔리는 장르별로, 장르에서는 제일 잘팔리는 두개의 곡을 내림차순으로 나타내는 배열을 구하는 문제

function getBestAlbum(genres, plays) {
    let playQuantityOfSongs = {};
    const result = [];
    
    for (let i = 0; i < genres.length; i++) {
        const currentGenres = playQuantityOfSongs[genres[i]] || { total: 0 };
        currentGenres[`${i}`] = plays[i];
        currentGenres['total'] = currentGenres['total'] + plays[i];
        playQuantityOfSongs[genres[i]] = currentGenres;
    }
    playQuantityOfSongs = Object.values(playQuantityOfSongs).sort((a, b) => b.total - a.total);
    playQuantityOfSongs.forEach(cur => { delete cur.total })
    playQuantityOfSongs = playQuantityOfSongs.map(cur => Object.entries(cur).sort((a, b) => b[1] - a[1]))
    playQuantityOfSongs.forEach(cur => {
        for (let i = 0; i < cur.length && i < 2; i++) {
            result.push(Number(cur[i][0]));
        }
    });
    
    return result;
}

console.log(getBestAlbum(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])); // 결과값 [4, 1, 3, 0]