
function dataSong(name, singer, song) {

    this.songname = name,
    this.singername = singer
    this.song = song

}


let song1 = new dataSong("AFSANAY", "Young Stunners Talhah Yunus Talha Anjum", "./songs_data/AFSANAY_Young Stunners Talhah Yunus Talha Anjum.mp3")
let song2 = new dataSong("ANGAD", "Fotty Seven", "./songs_data/ANGAD_Fotty Seven.mp3")
let song3 = new dataSong("ASOOL", "Fotty Seven", "./songs_data/Asool_Fotty Seven.mp3")
let song4 = new dataSong("BAAP SE", "Fotty Seven", "./songs_data/Baap Se_Fotty Seven.mp3")
let song5 = new dataSong("BANJO", "Fotty Seven", "./songs_data/Banjo_Fotty Seven.mp3")
let song6 = new dataSong("BHOT TEJ", "Fotty Seven", "./songs_data/Boht Tej_Fotty Seven.mp3")
let song7 = new dataSong("CHAUD", "Fotty Seven", "./songs_data/Chaud_Fotty Seven.mp3")
let song8 = new dataSong("DOORIYAN", "Dino james", "./songs_data/Dooriyan_Dino james.mp3")
let song9 = new dataSong("DRACULA", "King", "./songs_data/Dracula_King.mp3")
let song10 = new dataSong("GALAT LAUNDA", "Fotty Seven", "./songs_data/Galat Launda_Fotty Seven.mp3")
let song11 = new dataSong("GUMAAN", "Young Stunners Talhah Yunus Talha Anjum", "./songs_data/Gumaan_Young Stunners Talhah Yunus Talha Anjum.mp3")
let song12 = new dataSong("ILZAAM", "Badshah", "./songs_data/Ilzaam_Badshah.mp3")
let song13 = new dataSong("INTERSTELLAR", "Badshah", "./songs_data/Interstellar_Badshah.mp3")
let song14 = new dataSong("KAR LENGE BHAI", "Fotty Seven", "./songs_data/Kar Lenge Bhai_Fotty Seven.mp3")
let song15 = new dataSong("LOSER", "Dino James", "./songs_data/Loser_Dino James.mp3")
let song16 = new dataSong("LOST", "Dino James", "./songs_data/Lost_Dino James.mp3")
let song17 = new dataSong("MERCY", "Badshah", "./songs_data/Mercy_Badshah.mp3")
let song18 = new dataSong("MIRAGE", "Dino James", "./songs_data/Mirage_Dino James.mp3")
let song19 = new dataSong("MOMENT", "King", "./songs_data/Moment Hai_King Rocco.mp3")
let song20 = new dataSong("NO LOSS", "King", "./songs_data/No Loss_King.mp3")
let song21 = new dataSong("OHHHHHH", "Fotty Seven", "./songs_data/Ohhhhhhh_Fotty Seven.mp3")
let song22 = new dataSong("SHURU", "Badshah", "./songs_data/Shuru_Badshah.mp3")
let song23 = new dataSong("SWAHA", "Fotty Seven", "./songs_data/Swaha_Fotty Seven.mp3")
let song24 = new dataSong("THERAPY", "Badshah", "./songs_data/Therapy_Badshah.mp3")
let song25 = new dataSong("TU NASHA", "Dhruv", "./songs_data/Tu Nasha_Dhruv.mp3")
let song26 = new dataSong("WHY NOT", "Young Stunners Talha Anjum Talhah Yunus", "./songs_data/WHY NOT_Young Stunners Talha Anjum Talhah Yunus.mp3")
let song27 = new dataSong("WISH LIST", "Dino James", "./songs_data/Wish List_Dino James.mp3")
let song28 = new dataSong("ZINDGI TO JHAND HAI", "Fotty Seven", "./songs_data/Zindagi To Jhand Hai_Fotty Seven.mp3")

let dataArr = []

dataArr.push(song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22, song23, song24, song25, song26, song27, song28)


dataArr.map((elem)=> {

    let container = document.createElement("div")
    container.setAttribute("class", "song-container")

    let song_details = document.createElement("div")

    let song_name = document.createElement("h1")
    song_name.innerText = elem.songname

    let singer_name = document.createElement("p")
    singer_name.innerText = `Singer Name: ${elem.singername}`

    song_details.append(song_name, singer_name)

    let song_play = document.createElement("div")

    let songplay = document.createElement("iframe")
    songplay.src = elem.song

    song_play.append(songplay)

    container.append(song_details, song_play)

    document.querySelector("#songs-list").append(container)

})