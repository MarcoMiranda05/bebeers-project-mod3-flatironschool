const BASE_URL = "http://localhost:3000/payload";
const videoCollection = document.getElementById("video-collection");
//// rendering videos

makeVideo = video => {
  const videoCard = makeVideoCard(video);
  // div.dataset.id = video.id;
  videoCollection.appendChild(videoCard);
};

makeVideoCard = video => {
  const videoWrapper = document.createElement("div");
  videoWrapper.className = "card";

  const videoFrame = document.createElement("video");
  videoFrame.className = "video-avatar";
  videoFrame.src = video.message.assets[0].assetUrl;
  videoFrame.addEventListener("mouseover", () => {
    videoFrame.autoplay = true;
    videoFrame.load();
  });
  videoFrame.addEventListener("click", () => {
    window.open(video.message.assets[0].assetUrl);
  });

  const cardDetails = document.createElement("div");
  cardDetails.className = "card-details";

  const title = document.createElement("p");
  title.className = "video-title";
  title.textContent = video.message.subject;

  const channelName = document.createElement("p");
  channelName.textContent = video.sender.displayName;
  channelName.className = "channel-name-home";

  // function for transform date in strings e.g. "2 hours ago"

  function time_ago(time) {
    switch (typeof time) {
      case "number":
        break;
      case "string":
        time = +new Date(time);
        break;
      case "object":
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, "seconds", 1], // 60
      [120, "1 minute ago", "1 minute from now"], // 60*2
      [3600, "minutes", 60], // 60*60, 60
      [7200, "1 hour ago", "1 hour from now"], // 60*60*2
      [86400, "hours", 3600], // 60*60*24, 60*60
      [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
      [604800, "days", 86400], // 60*60*24*7, 60*60*24
      [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
      [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
      [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
      [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
      [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = "ago",
      list_choice = 1;

    if (seconds == 0) {
      return "Just now";
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = "from now";
      list_choice = 2;
    }
    var i = 0,
      format;
    while ((format = time_formats[i++]))
      if (seconds < format[0]) {
        if (typeof format[2] == "string") return format[list_choice];
        else
          return (
            Math.floor(seconds / format[2]) + " " + format[1] + " " + token
          );
      }
    return time;
  }

  const videoDetails = document.createElement("p");
  // p2.className = `likes-amount${video.id}`;
  videoDetails.textContent =
    video.message.views +
    " views" +
    " • " +
    time_ago(video.message.publishingDate);
  videoDetails.className = "details-home";

  const channelAvatarWrapper = document.createElement("div");
  channelAvatarWrapper.className = "channel-avatar-wrapper";

  const channelAvatar = document.createElement("img");
  channelAvatar.className = "channel-avatar";
  channelAvatar.src = video.sender.imageUrl;

  // const button = document.createElement("button");
  // button.className = "like-btn";
  // button.textContent = "Like";
  // button.dataset.id = video.id;
  // button.addEventListener("click", e => {
  //   const likesAmount = document.querySelector(
  //     `.likes-amount${e.target.dataset.id}`
  //   );
  //   let likesNumber = Number(likesAmount.innerText);
  //   likesNumber++;
  //   updateVideo(likesNumber, e.target.dataset.id).then(init);
  // });

  videoWrapper.appendChild(videoFrame);
  videoWrapper.appendChild(channelAvatarWrapper);
  videoWrapper.appendChild(cardDetails);
  channelAvatarWrapper.appendChild(channelAvatar);
  cardDetails.appendChild(title);
  cardDetails.appendChild(channelName);
  cardDetails.appendChild(videoDetails);
  // videoWrapper.appendChild(button);

  return videoWrapper;
};

function showVideos(videos) {
  videoCollection.innerHTML = "";
  let videosSorted = videos.sort(
    (b, a) => parseFloat(a.likes) - parseFloat(b.likes)
  );
  videosSorted.map(video => {
    makeVideo(video);
  });
}

function init() {
  fetch(BASE_URL)
    .then(data => data.json())
    .then(showVideos);
}

init();

// /// updating likes

// function updateVideo(likes, id) {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       likes: likes
//     })
//   });
// }
