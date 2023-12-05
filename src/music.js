import { v4 as uuidv4 } from 'uuid';
function HipHop() {
    return [
        {
            name: "Winter Wonderland",
            cover: "https://chillhop.com/wp-content/uploads/2023/10/4b79c4bf0b01545dd9ffe5c9bc7636454e2eaeca-1024x1024.jpg",
            artist: "Masked",
            audio: "",
            color: ["#3A424B","#11202B"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Daylight",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
          },
          {
            name: "Keep Going",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Nightfall",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Reflection",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Under the City Stars",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: " Middle School Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
          }
    ]
}
export default HipHop