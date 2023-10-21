<template>
  <div class="main-container">
    <div class="background-images">
      <div class="header-container">
        <div class="text-image-container" @click="goMain">
          <img 
            class="text-image"
            src="../assets/건강산책.png"
            alt="작은 글씨 이미지"
          />
        </div>
        <div class="right-container">
          <div class="circle-container">
            <div class="circle1">
              <img src="../assets/icon/Preview.png" alt="이미지 1" />
            </div>
            <div class="circle1">
              <img src="../assets/icon/dog4.png" alt="이미지 2" />
            </div>
          </div>
          <button class="image-button" @click="$router.push('./Alarm')">
            <img src="../assets/종버튼.png" alt="버튼 이미지" />
          </button>
        </div>
      </div>
      <div class="middle-container">
        <!-- 9.26 산책 시작 router 수정 -->
        <div class="circle2" @click="$router.push('./kakaomap')">
          <button
            class="default-button"
            @click="showController = !showController"
          >
            <strong>산책시작</strong>
          </button>
          <div class="box-container" v-if="showController">
            <div class="box" v-for="box in boxes" :key="box.id">
              {{ box.name }}
            </div>
          </div>
        </div>
        <div class="text-container">
          <p>
            <span class="bold-text large-text">0.24</span>
            <span class="bold-text gray-text small-text">Km</span>
          </p>
        </div>
      </div>
      <div class="square-image-container">
        <img
          class="square-image"
          src="../assets/공원.png"
          alt="정사각형 이미지"
        />
      </div>
      <div class="button-group">
        <button
          class="controller-button"
          :class="{ active: selectedButton === 'controller' }"
          @click="toggleButton('controller')"
        >
          <strong>메인</strong>
        </button>
        <button
          class="state-button"
          :class="{ active: selectedButton === 'state' }"
          @click="toggleButton('state')"
        >
          <strong>정보</strong>
        </button>
        <button
          class="history-button"
          :class="{ active: selectedButton === 'history' }"
          @click="toggleButton('history')"
        >
          <strong>이력</strong>
        </button>
      </div>
      <div class="additional-content" v-if="showController">
        <div class="box box-1">
          <div class="friend-containerd" style="margin-bottom: 1vh">
            <div class="friend-text">현재 산책가능한 친구 ></div>
            <div class="friend-images">
              <div class="friend-card" @click="toggleFriendSelection('별이')" :class="{ selected: isSelected('별이') }">
          <img src="../assets/people/Preview-8.png" alt="Image 7" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">홍길동</div>
          </div>
        </div>
        <div class="friend-card" @click="toggleFriendSelection('김지민')" :class="{ selected: isSelected('김지민') }">
          <img src="../assets/people/Preview-3.png" alt="Image 3" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">김지민</div>
          </div>
        </div>
        <div class="friend-card" @click="toggleFriendSelection('콩이')" :class="{ selected: isSelected('콩이') }">
          <img src="../assets/people/Preview-3.png" alt="Image 4" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">콩이</div>
          </div>
        </div>
        <div class="friend-card" @click="toggleFriendSelection('김유진')" :class="{ selected: isSelected('김유진') }">
          <img src="../assets/people/Preview-4.png" alt="Image 4" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">김유진</div>
          </div>
        </div>
        <div class="friend-card" @click="toggleFriendSelection('박태연')" :class="{ selected: isSelected('박태연') }">
          <img src="../assets/people/Preview-5.png" alt="Image 4" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">박태연</div>
          </div>
        </div>
        <div class="friend-card" @click="toggleFriendSelection('문효진')" :class="{ selected: isSelected('문효진') }">
          <img src="../assets/people/Preview-6.png" alt="Image 4" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">문효진</div>
          </div>
        </div>
        <div class="friend-card" @click="toggleFriendSelection('조나희')" :class="{ selected: isSelected('조나희') }">
          <img src="../assets/people/Preview-3.png" alt="Image 4" class="box-image" />
          <div class="friend-name-container">
            <div class="friend-name">조나희</div>
          </div>
              </div>
            </div>
            <button class="walk-request-button" 
            style="margin-top: 1vh;" 
            @click="handleWalkRequest" 
            :disabled="selectedFriends.length === 0">
            산책신청
          </button>
          </div>
        </div>
        <div class="box-row">
          <div class="box2">
            <div class="friend-text" @click="$router.push('./Ranking')">
              랭킹 >
              <img
                src="../assets/icon/goldcup.png"
                alt="Music Icon"
                class="music-icon"
              />
            </div>
          </div>
          <div class="box2">
            <!-- 9.26 친구 목록 router 수정 -->
            <div class="friend-text" @click="$router.push('./FriendAdd')">
              친구목록 >
              <img
                src="../assets/3D사람.png"
                alt="friendlisted"
                class="friendlisted"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="additional-content" v-if="showState">
    <div class="user-box">
      <div class="user-information">
      <div class="user-main">
        <div class="user-image">
          <img
            src="../assets/icon/Preview.png"
            alt="사용자캐릭터"
            class="user-character"
          />
        </div>
        <div class="user-details">
      <div class="user-name">심청이</div>
      <div class="badge-container">
        <img
          class="badge-image"
          src="../assets/walkicon.png"
          alt="배지 이미지"
        />
        <p class="user-badge-text">배지를 선택해주세요</p>
        </div>
    </div>
  </div>
        <div class="user-stats">
          <!-- 사용자 정보 -->
          <div class="user_info_row">
            <p class="user_info_label">누적 거리</p>
            <p class="user_info_value">0KM</p>
          </div>
          <div class="division_line"></div>
          <div class="user_info_row">
            <p class="user_info_label">누적 시간</p>
            <p class="user_info_value">0분</p>
          </div>
          <div class="division_line"></div>
          <div class="user_info_row">
            <p class="user_info_label">누적 도토리</p>
            <p class="user_info_value">0개</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pet-box">
      <div class="pet-information">
        <div class="pet-main">
          <div class="pet-profile">
          <img
            class="pet-image"
            src="../assets/icon/dog4.png"
            alt=""
          />
        </div>
        <div class="pet-details">
      <div class="pet-name">멍멍이</div>
      <div class="pet_status">
          <!-- 애완동물 산책레벨 -->
          <div class="pet_level">LV.1</div>
          <!-- 애완동물 레벨 바 -->
          <div class="level_progressbar_wrap">
            <div class="level_progressbar" style="width: 3%"></div>
          </div>
        </div>
    </div>
  </div>
          </div>
        </div>
      </div>
      <div class="additional-content" v-if="showHistory">
        <div class="box-row">
          <div class="box2">
            <!-- middle_4 -->
            <div class="middle_4">
              <!-- 배지 버튼 -->
              <div class="middle_4_wrap">
                <div
                  class="btn_wrap btn_badge"
                  @click="$router.push('./badgepage')"
                >
                  <img
                    class="icon"
                    src="../assets/MyPage/icon_badge.png"
                    alt="배지"
                  />
                </div>
                <div class="btn_text">
                  대표 배지를<br />
                  설정해 보세요!
                </div>
              </div>
            </div>
          </div>
          <div class="box-row">
            <div class="box2">
              <!-- 산책 기록 버튼 -->
              <div class="middle_4_wrap">
                <div
                  class="btn_wrap btn_badge"
                  @click="$router.push('./NewWalkRecord')"
                >
                  <img
                    class="icon"
                    src="../assets/MyPage/icon_calendar.png"
                    alt="산책기록"
                  />
                </div>
                <div class="btn_text">
                  산책 기록<br />
                  확인하러 가기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

export default defineComponent ({
  name: 'mainComponent',
  data() {
    return {
      showController: true,
      showState: false,
      showHistory: false,
      selectedButton: 'controller',
      selectedFriends: [], // 선택된 친구를 저장할 배열
    };
  },
  methods: {
    isSelected(friendName) {
      return this.selectedFriends.includes(friendName);
    },
    toggleButton(button) {
      if (this.selectedButton === button) {
        this.selectedButton = null;
      } else {
        this.selectedButton = button;
      }
      this.showController = this.selectedButton === 'controller';
      this.showState = this.selectedButton === 'state';
      this.showHistory = this.selectedButton === 'history';
    },
    toggleFriendSelection(friendName) {
      if (this.selectedFriends.includes(friendName)) {
        const index = this.selectedFriends.indexOf(friendName);
        if (index !== -1) {
          this.selectedFriends.splice(index, 1);
        }
      } else if (this.selectedFriends.length < 3) {
        this.selectedFriends.push(friendName);
      } else {
        Swal.fire({
          icon: 'error',
          title: '친구 선택 오류',
          text: '3명만 선택이 가능합니다.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    handleWalkRequest() {
      if (this.selectedFriends.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '친구 선택 오류',
          text: '친구를 선택하지 않았습니다.',
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }

      this.$router.push({
        path: './kakaomap',
        query: { selectedFriends: this.selectedFriends },
      });
    }
  },
});
</script>

<style>
.main-container {
  position: relative;
}

.background-images {
  background-image: url("../assets/건강산책배경.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow-y: auto;
}

.header-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.text-image-container {
  width: 100px;
}

.text-image {
  width: 19vh;
}

.right-container {
  display: flex;
  align-items: center;
}

.circle-container {
  display: flex;
}

.circle1 {
  width: 7vh;
  height: 7vh;
  border: 2px solid #ffffff; /* 흰색 테두리 추가 */
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.circle1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circle1:nth-child(2) {
  transform: translateX(1px);
}

.circle1:nth-child(1) {
  transform: translateX(-2px);
}

.image-button {
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.image-button img {
  width: 3.5vh;
  height: 3.5vh;
  object-fit: cover;
}

.middle-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.circle2 {
  width: 10vh;
  height: 4vh;
  border: 3px solid #e0807a;
  border-radius: 2vh;
  position: relative;
  overflow: hidden;
  background-color: white;
  margin-left: -6vh;
}

.default-button {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.text-container {
  margin-left: 20px;
}

.bold-text {
  font-weight: bold;
}

.large-text {
  font-size: 2.5rem;
}

.gray-text {
  color: gray;
}

.small-text {
  font-size: 1.5rem;
}

.square-image-container {
  display: flex;
  justify-content: center;
}

.square-image {
  width: 44vh;
  height: 44vh;
  margin-top: -3vh;
}

.additional-content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.left-button,
.right-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
}

.controller-button,
.state-button,
.history-button {
  border-radius: 1vh;
  background-color: #dfefff;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 6px;
  width: 14.5vh;
  -webkit-text-fill-color: #00c0ff;
  border: 2px;
}

.controller-button.active,
.state-button.active,
.history-button.active {
  /* 활성화된 버튼의 스타일 */
  background-color: #00bfff;
  -webkit-text-fill-color: white;
}

.additional-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.box-1 {
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
}

.friend-containerd {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  height: 87%;
  background-color: white;
  width: 40vh;
  justify-content: space-between;
  border-radius: 1vh;
  box-shadow: 0 2px 6px rgba(71, 71, 71, 0.2);
}

.friend-text {
  font-weight: bold;
  color: #454545;
  margin-bottom: 15px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
}

.friend-images {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */
}

.friend-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px; /* Adjust the margin as needed */
}

.walk-request-button {
  padding: 5px 16px;
  background-color: #fff;
  color: #00bfff;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
  border-radius: 4vh;
  border: 3px solid #00bfff;
}

.box-image {
  width: 50px;
  height: 50px;
  flex-shrink: 0; /* Prevent images from shrinking */
  margin-right: 10px; /* Add some spacing between images */
}

.box2 {
  width: 18.5vh;
  height: 13.5vh;
  background-color: #ffffff;
  margin: 5px;
  margin-bottom: 2vh;
  border-radius: 1vh;
  box-shadow: 0 2px 6px rgba(71, 71, 71, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box3 {
  width: 39.5vh;
  height: 44.5vh;
  background-color: #ffffff;
  margin: 5px;
  border-radius: 1vh;
  box-shadow: 0 2px 6px rgba(71, 71, 71, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.box-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.friend-name-container {
  margin-top: 3px; /* Adjust the margin as needed */
  text-align: center;
  width: 100%;
}

.friend-name {
  font-weight: bold;
  white-space: nowrap; /* Prevent the name from wrapping */
  margin-right: 5px;
  font-size: 2px;
}

.music-icon {
  width: 8vh;
}

.friendlisted {
  width: 7vh;
}
/* middle */
.middle {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
/* middle 1 */
.middle_1 {
  position: relative;
  width: 100%;
  height: 32%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.mypage .user_information_box {
  width: 72%;
  height: 57%;
  margin-left: -6vh;
  transform: translateX(5%);
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  background: #ffffff;
  border: 1px solid #c3c3c5;
  border-radius: 10px;
  padding: 1em;
}

.user_name_box {
  position: absolute;
  width: 54%;
  height: 35%;
  top: 8%;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.user_name {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}
.user_character_box {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  top: 8%;
  left: 5%;
  object-fit: cover;
}
.user_character {
  width: 13vh;
}

/* middle 3 */
.middle_3 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.middle_3 div {
  width: 45%;
  height: 80%;

  background: #ffffff;
  border: 1px solid #c3c3c5;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.middle_3 p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}

.user-box {
    display: flex;
    width: 40vh;
    height: 24.5vh;
    background-color: #ffffff;
    margin: 5px;
    margin-bottom: 1vh;
    border-radius: 1vh;
    box-shadow: 0 2px 6px rgba(71, 71, 71, 0.2);
    padding: 10px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}

.pet-box {
  display: flex;
  width: 40vh;
  height: 13.5vh;
  background-color: #ffffff;
  margin: 5px;
  margin-bottom: 2vh;
  border-radius: 1vh;
  box-shadow: 0 2px 6px rgba(71, 71, 71, 0.2);
  padding: 10px;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}

/* middle 4 */
.middle_4 {
  position: relative;
  width: 120%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 1em;
}
.pet_profile {
  width: fit-content;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
}
.pet_profile_img {
  width: 12vh;
  height: 9vh;
  background-color: #ddd;
  border-radius: 100%;
}
.mypage .pet_status {
  padding-left: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.pet_level {
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: #747474;
}
.level_progressbar_wrap {
  width: 23vh;
  height: auto;
  background-color: #dedede;
}
.level_progressbar {
  height: 3vw;
  background-color: #638263;
  animation-name: pet_level_ani;
  animation-duration: 3s;
}

.user_information_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.user_info_row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user_info_label {
  font-family: "Inter";
  font-style: normal;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  z-index: 1000;
  font-size: 1.5vh;
  font-weight: bold;
}

.user_info_value {
  font-family: "Inter";
  font-style: 9vh;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
  z-index: 1000;
}

.user-information,
.pet-information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-image,
.pet-profile {
  display: flex;
  justify-content: center;
}

.user-image img,
.pet-profile img {
  width: 10vh;
  height: 10vh;
  background-color: #ddd;
  border-radius: 100%;
  padding: 0.5vh;
}

.user-stats,
.pet-status {
  display: flex;
}

.user-info-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-info-label,
.user-info-value {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
}

.pet-level {
  font-size: 1.2rem;
  font-weight: bold;
  color: #747474;
}

.level-progressbar-wrap {
  width: 23vh;
  height: auto;
  background-color: #dedede;
}

.level-progressbar {
  height: 3vw;
  background-color: #638263;
  animation-name: pet-level-ani;
  animation-duration: 3s;
}

@keyframes pet-level-ani {
  0% {
    width: 0%;
  }
  100% {
  }
}

.middle_4_wrap {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.middle_4_wrap .btn_wrap {
  width: 8vh;
  height: 7vh;
  background-color: #bbb;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 14px;
  cursor: pointer;
}
.middle_4_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.middle_4_wrap .btn_text {
  font-size: 1.2vh;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

.friend-card.selected {
  background-color: #a0c0eb; 
  border: 2px solid #979797;
  box-shadow: 0 0 5px rgba(128, 128, 128, 0.5); 
  display: flex; 
  align-items: center;
}

.friend-card.selected img {
  margin: auto; 
}

.friend-card.selected .friend-name-container {
  margin: auto; 
}

.division_line {
    width: 1px;
    background-color: #c3c3c5;
    margin: 4vh;
    height: 47%;
  }

  .user-image {
  margin-right: 10px; /* 사진과 간격을 조절합니다. */
}

.user-character {
  width: 9vh;
  height: 9vh;
  background-color: #ddd;
  border-radius: 100%;
  padding: 0.5vh;
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.user-name {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.badge-container {
  display: flex;
  align-items: center;
}

.user-badge-text {
  font-size: 1rem;
  color: gray;
  margin-bottom: 5px;
}

.badge-image {
  width: 3vh;
  height: auto;
}

.user-badge-text {
  font-size: 1rem;
  color: gray;
  margin-left: 5px; /* 배지 텍스트와 간격을 조절합니다. */
}

.user-main {
  display : flex;
}

.pet-image {
  margin-right: 10px; /* 사진과 간격을 조절합니다. */
}

.pet-character {
  width: 9vh;
  height: 9vh;
  background-color: #ddd;
  border-radius: 100%;
  padding: 0.5vh;
}

.pet-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.pet-name {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.pet-main {
  display : flex;
}
</style>