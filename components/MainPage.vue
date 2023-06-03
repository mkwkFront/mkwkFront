<template>
  <div class="MainPage">
    <div class="header-box">
      <div class="title">Walkoo</div>
      <div class="subtitle">📍 신세계쉐덴 아파트</div>
    </div>
    <div class="image">
      <div class="empty-box">
        <router-link to="/family">
        <img src="../assets/home.png" alt="Image 1" class="box-image" />
        </router-link>
        <img src="../assets/people/Preview10.png" alt="Image 2" class="box-image" />
        <img src="../assets/people/Preview11.png" alt="Image 7" class="box-image" />
        <img src="../assets/people/Preview-2.png" alt="Image 3" class="box-image" />
        <img src="../assets/people/Preview-3.png" alt="Image 4" class="box-image" />
        <img src="../assets/people/Preview-4.png" alt="Image 5" class="box-image" />
        <img src="../assets/people/Preview-5.png" alt="Image 6" class="box-image" />
      </div>
      <button class="walking-button">
        <router-link to="/WalkMate" class="walking-link">
          <div class="walking-text">
            산  책
            <br />
            시  작
          </div>
        </router-link>
      </button>


      <div class="buttonbox">
        <!-- Text above the new button -->
        <div class="button-text">{{ getCurrentDate() }}</div>

        <!-- New button with transparent background -->
        <button class="new-button">
          <router-link to="/WalkRecord" class="new-button">
          <img src="../assets/calendar.png" alt="Button Image" class="button-image" />
        </router-link>
        </button>
      </div>

      <div class="notice-container">
        <div class="notice-text">공지사항</div> <!-- Add the notice text here -->

        <img
          @click="handleClick"
          :src="require(`../assets/${images[currentImageIndex]}`)"
          alt="image"
          class="notice-image"
        />
      </div>
    </div>
    <router-link to="/alarm" class="circle-button">
      <img src="../assets/bell.png" alt="button" />
    </router-link>
  </div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  data() {
    return {
      pageName: "MainPage",
      images: [
        "001.png",
        "002.png",
        "003.png",
      ],
      currentImageIndex: 0,
    };
  },
  methods: {
    handleClick() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");

      return `${year}년 ${month}월 ${day}일`;
    },
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');

.header-box {
  background-color: #ecf1ff; /* Set the desired background color */
  padding: 20px; /* Adjust the padding as needed */
  color: #000000;
  text-align: left; /* Set the desired text color */
  border-bottom: 2px solid #000000;
}

.MainPage {
  position: relative; 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 0 auto;
  height: 90vh;
  overflow-y: auto; /* 스크롤이 생기도록 설정 */
  overflow-x: hidden;
}

.buttonbox {
  position: absolute;
  top: 23vh;
  left: 75%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px; /* Adjust the margin-bottom as needed */
}


.button-image {
    width: 14vh;
    height: 14vh;
}


.new-button {
  background-color: transparent;
  border: none;
  padding: 0;
}

.notice-text {
    position: absolute;
    top: calc(52vh - 1.5rem);
    left: 14%;
    transform: translateX(-50%);
    font-size: 1.2rem;
    color: #000000;
    font-family: 'IBM Plex Sans KR', sans-serif;
}

.title {
  font-size: 3.5rem;
  color: rgb(255, 176, 176);
  text-shadow: 1px 1px 1px #000;
  font-family: 'Permanent Marker', cursive;
  margin-top: -2vh;
}

.subtitle {
  margin-top: 10px; /* Adjust the margin-top as needed */
  font-size: 1.2rem;
  color: #000000;
  font-family: 'IBM Plex Sans KR', sans-serif;
  margin-top: -1vh;
}

.image {
  position: relative;
  margin-top: 140px;
}

.empty-box {
  background-color: #fff;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  margin-top: -5vh;
}

.image-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.box-image {
  width: 15vh;
  height: auto; 
  margin-right: 10px;
}

.walking-button {
    position: absolute;
    top: 33vh;
    left: 30%;
    transform: translate(-50%, -50%);
    padding: 4vh 6vh;
    background-color: #FFEBB6;
    color: rgb(52, 52, 52);
    font-size: 4vh;
    border-radius: 70px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border: 15px solid #fbd269;
    text-align: center;
}

.walking-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: rgb(52, 52, 52);
}

.circle-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-button img {
  width: 90%;
  height: 90%;
  margin-top: -1vh;
  margin-right: -1vh;
}

.notice-image {
  position: absolute;
  top: 53vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 25vh;
  border: 2px solid rgb(0, 0, 0);
}

</style>