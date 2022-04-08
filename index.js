var songs=[
    {
        imgSrc:"./images/Dil Galti Kar Baitha Hai.jpeg",
        audioSrc:"audios/Dil Galti Kar Baitha Hai _ Meet Bros Ft. Jubin Nautiyal _ Mouni Roy _ Manoj M _ Ashish P _ Bhushan K.mp3",
        titleSrc:"Dil Galti kar Baitha Hai",
            id:01
    },
    {
        imgSrc:"./images/Bekhayali  Sachet Tandon.jfif",
        audioSrc:"./audios/Bekhayali Full Song _ Kabir Singh _ Shahid K,Kiara A_Sandeep Reddy Vanga _ Sachet-Parampara _ Irshad.mp3",
        titleSrc:"Bekhayali - Sachet Tandon",
            id:02
    },
    {
        imgSrc:"./images/Give Me Some Sunshine - 3 Idiots.jfif",
        audioSrc:"./audios/Give Me Some Sunshine - 3 Idiots _ Aamir Khan, Madhavan, Sharman J _ Suraj Jagan _ Shantanu Moitra.mp3",
        titleSrc:"Give Me Some Sunshine -Suraj jagan",
            id:03
    },
    {
        imgSrc:"./images/Mann Bharryaa.jpg",
        audioSrc:"./audios/Mann Bharryaa 2.0 – Official Video _ Shershaah _ Sidharth – Kiara _ B Praak _ Jaani.mp3",
        titleSrc:"Mann Bharryaa-B praak",
            id:04
    },
    {
        imgSrc:"./images/Mere Mehboob Qayamat Hogi.jpg",
        audioSrc:"./audios/Mere Mehboob Qayamat Hogi _ Sanam.mp3",
        titleSrc:"Mere Mehboob Qayamat Hogi",
            id:05
    },
    {
        imgSrc:"./images/Namo namo.jpg",
        audioSrc:"./audios/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3",
        titleSrc:"Namo Namo -Amith Trivedi",
            id:06
    },
    {
        imgSrc:"./images/O Antava Mawa.jpg",
        audioSrc:"./audios/Oo Antava..Oo Oo Antava  Pushpa Allu Arjun, Rashmika DSP Sukumar Samantha.mp3",
        titleSrc:"O Antava Pushpa-DSP-Sukumar",
            id:07
    },
    {
        imgSrc:"./images/Srivalli.jfif",
        audioSrc:"./audios/Srivalli (Video) _ Pushpa _ Allu Arjun, Rashmika Mandanna _ Javed Ali _ DSP _ Sukumar.mp3",
        titleSrc:"Srivalli- Jawed Ali-DSP",
            id:08
    },
    {
        imgSrc:"./images/Yalgaar.jpg",
        audioSrc:"./audios/YALGAAR - CARRYMINATI X Wily Frenzy.mp3",
        titleSrc:"Yalgaar-Carry Minati",
            id:09
    },
    {
        imgSrc:"./images/DIVINE - MIRCHI.jpg",
        audioSrc:"./audios/DIVINE - MIRCHI Feat. Stylo G, MC Altaf & Phenom _ Official Music Video.mp3",
        titleSrc:"DIVINE - MIRCHI",
            id:10
    },
    {
        imgSrc:"./images/Doori Gullyboy.jpg",
        audioSrc:"./audios/Doori _ Gully Boy _ Ranveer Singh & Alia Bhatt _ Javed Akhtar _ DIVINE _ Rishi Rich  _ Zoya Akhtar.mp3",
        titleSrc:"Doori Gullyboy",
            id:11
    },
]







function audioPlayer(songid){
    var song= songs.find(function(song,index){
        return song.id===songid
    });
  document.getElementById("play_img").src=song.imgSrc;
  document.getElementById("play_song").src=song.audioSrc;
  document.getElementById("play_title").innerText=song.titleSrc;
  document.getElementById("play_song").play();
}


