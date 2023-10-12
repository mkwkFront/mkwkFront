<template>
  <div id="friendaddpg">
    <!-- 아이디를 입력하라는 모달창 -->
    <div class="black-bg2" v-if="openModal == true">
      <div class="white-bg2">
        <h2>ID를 입력하세요!</h2>
        <input type="text" class="textfield" v-model="input" placeholder="입력해주세요!" />

        <button v-if="!friend" class="ok" @click="findFriend">확인</button>

        <div v-if="friend">
          <img class="image2" :src="friend.image" />
          <p class="found">
            {{ friend.name }}님이 발견되었습니다! <br />
            추가하시겠습니까?
          </p>
          <div class="YorN">
            <button class="reject" @click="openModal = false">거절</button>
            <button class="accept" @click="openModal = false">수락</button>
          </div>
        </div>

        <img v-if="!friend" src="@/assets/x.png" alt="나가기" class="exit-button" @click="openModal = false">
      </div>
    </div>
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img class="icon" src="@/assets/backbutton.png" @click="$router.go(-1)" />
        </div>
        <div class="top_center">친구 추가</div>
        <div class="top_right">
          <div class="top_right">
            <div></div>
            <button class="friendadd-button2" @click="openModal = true">
              아이디로 친구추가
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="friend-list-box1">
      <div class="friend-list-box2">
        <div class="friend-list2">
          <div v-for="friend in friends" :key="friend.id" class="friend2" :src="`@/assets/friendimages/${name}`">
            <img :src="friend.image" alt="friendimage" class="friend-image2" />
            <span class="friend-name2">{{ friend.name }}</span>
            <!-- 9.26 친구 추가 버튼 주석 처리 -->
            <!-- <img
                src="../assets/addfriendbutton.png"
                alt="addfriendbutton"
                class="addfriend-button2"
              /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useRouter } from "vue-router";

export default {
  name: "pg_friendadd",

  setup() {
    const router = useRouter();
    function goBack() {
      router.go(-1);
    }
    return {
      goBack,
    };
  },
  methods: {
    goToFriendList() {
      this.$router.push("/friendlist");
    },
    findFriend() {
      const friend = this.friends.find((f) => f.id === parseInt(this.input));
      if (friend) {
        this.friend = friend;
      } else {
        this.showAlertModal("아이디가 존재하지 않습니다!");
      }
    },
    showAlertModal(message) {
      const alertModal = document.createElement("div");
      alertModal.classList.add("alert-modal");

      const alertHeading = document.createElement("h2");
      alertHeading.textContent = message;
      alertModal.appendChild(alertHeading);

      const closeButton = document.createElement("button");
      closeButton.textContent = "닫기";
      closeButton.addEventListener("click", () => {
        document.body.removeChild(alertModal);
      });
      alertModal.appendChild(closeButton);

      document.body.appendChild(alertModal);
    },
  },
  data() {
    return {
      openModal: false,
      inputValue: "",
      friend: null,
      friends: [
        {
          id: 1,
          name: "김지수",
          image: require("@/assets/people/Preview.png"),
        },
        {
          id: 2,
          name: "김유진",
          image: require("@/assets/people/Preview1.png"),
        },
        {
          id: 3,
          name: "조별이",
          image: require("@/assets/people/Preview-2.png"),
        },
        {
          id: 4,
          name: "조나희",
          image: require("@/assets/people/Preview-3.png"),
        },
        {
          id: 5,
          name: "문콩이",
          image: require("@/assets/people/Preview-5.png"),
        },
        {
          id: 6,
          name: "김지민",
          image: require("@/assets/people/Preview-6.png"),
        },
        {
          id: 6,
          name: "문효진",
          image: require("@/assets/people/Preview-7.png"),
        },

        // 친구 목록 추가
      ],
    };
  },
};
</script>
  
<style>

.friendadd.top_center {
  width: 40%;
}

.friendadd .top_left {
  width: 10%;
}
.friendadd .top_right {
  width: 50%;
  height: 100%;
}
.friendadd .top_wrap {
  width: 100%;
}
#friendaddpg {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.upperbar {
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
}

.upperbar>h1 {
  font-size: 20px;
  padding-left: 20px;
}
/* 
.friendadd-button2_btn_wrap {
  display: flex;
  height: 100%;
  padding: 2%;
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: space-between;
} */

.top_right>.friendadd-button2 {
  width: 95%;
  height: 100%;
  padding: 4%;
  border-radius: 30vh;
  border: none;
}

.top_right>.friendadd-button2:hover {
  border: 0.4vh solid grey;
  font-weight: bold;
  transform: scale(1, 1);
  transition: all 0.3s;
}

.friend-list-box1 {
  width: 100%;
  height: 90%;
  padding: 2%;
  padding-bottom: 2%;
  box-sizing: border-box;
  padding-top: 3%;
}

.friend-list-box2 {
  width: 100%;
  height: auto;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  padding: 3%;
  box-sizing: border-box;
  background-color: #F1F7FD;
  border: 0.3vh solid #ccc;
  border-radius: 10px;
}

.friend-list2 {
  width: 100%;
  /* margin: 0; */
  /* padding: 0; */
  /* white-space: nowrap; */
  /* overflow-y: scroll; */
}

.friend2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
  padding: 10px 0;
}

.friend-image2 {
  width: 100px;
  border-radius: 50%;
}

.friend-name2 {
  font-size: 30px;
  font-weight: bold;
  /* 부모 요소의 80퍼로 가로 사이즈, 가로 중앙 정렬 */
  width: 80%;
  justify-content: center;
}

.addfriend-button2 {
  padding: 10px 15px 10px 20px;
  background-color: #dcdada;
  cursor: pointer;
  border-radius: 60px;
}

.black-bg2 {
  width: 100%;
  height: 113%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.white-bg2 {
  width: 100%;
  background: rgb(235, 233, 232);
  border-radius: 30px;
  padding: 5%;
  padding-top: 7%;
  box-sizing: border-box;
  font-size: 15px;
}

.white-bg2 h2 {
  padding-bottom: 5%;

}

.textfield {
  border-radius: 8px;
  width: 90%;
  height: 8vh;
  padding-left: 10px;
  border: 4px solid gray;
}

.ok {
  border-radius: 8px;
  margin-top: 5%;
  width: 25%;
  height: 5vh;
  border: 4px solid lightgray;
  font-weight: bold;
}

.ok:hover {
  border: 5px solid grey;
  background-color: grey;
  color: white;
  transform: scale(1, 1);
  transition: all 0.2s;
}

.image2 {
  padding-top: 6%;
  padding-bottom: 4%;
  width: 50%;
  border-radius: 50%;
  margin: 1%;
}

.found {
  font-size: 3vh;
  margin-bottom: 5%;
}

.YorN {
  padding-bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.reject {
  width: 40%;
  padding: 0 10%;
  background-color: #dcdada;
  border: none;
  border-radius: 25px;
  color: #4a4a4a;
  font-size: 1.7rem;
  font-weight: bold;
}

.reject:hover {
  border: 5px solid rgb(99, 4, 4);
  background-color: rgb(99, 4, 4);
  color: white;
  transform: scale(1, 1);
  transition: all 0.2s;
}

.accept {
  width: 40%;
  padding: 0 10%;
  background-color: #dcdada;
  border: none;
  border-radius: 25px;
  color: #4a4a4a;
  font-size: 1.7rem;
  font-weight: bolder;
}

.accept:hover {
  border: 5px solid rgb(3, 87, 44);
  background-color: rgb(3, 87, 44);
  color: white;
  transform: scale(1, 1);
  transition: all 0.2s;
}

.exit-button {
  position: absolute;
  top: 38%;
  left: 8%;
  width: 38px;
  height: 38px;
}
</style>
  