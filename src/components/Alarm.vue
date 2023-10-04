<template>
  <div class="alarmpage">
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="@/assets/backbutton.png"
            @click="$router.go(-1)"
          />
        </div>
        <div class="top_center">📬 알림이 왔어요!</div>
        <div class="top_right"></div>
      </div>
      </div>


    <!-- 9.26 스타벅스 배너 삭제 -->

    <div class="alarmlist">
      <div class="alarmbox" v-for="(request, index) in walkRequests" :key="index">
        <img
          src="../assets/people/Preview-6.png"
          alt="jinnypc"
          class="alarmpng"
        />
        <div
          v-for="(request, index) in walkRequests"
          :key="index"
          class="friend-request"
        >
          <div class="asktitle">
            '{{ request }}' 님이 <br />
            산책 신청을 했어요!<br /><br />
          </div>

          <div class="alarm_yn">
            <button class="friendreject" @click="openModal = false">
              거절
            </button>
            <button class="friendaccept" @click="openModal = false">
              수락
            </button>
          </div>
        </div>
      </div>

      <div class="alarmbox" v-for="(request, index) in friendRequests" :key="index">
        <img
          src="../assets/people/Preview-3.png"
          alt="naheepc"
          class="alarmpng"
        />
        <div
          v-for="(request, index) in friendRequests"
          :key="index"
          class="friend-request"
        >
          <div class="asktitle">친구 신청이 왔어요!</div>
          <br />'{{ request }}' 님에게 <br />
          친구 신청이 왔습니다 <br />
          수락하시겠습니까? <br /><br />

          <div class="alarm_yn">
          <button class="friendreject" @click="rejectRequest(index)">
            거절
          </button>
          <button class="friendaccept" @click="acceptRequest(index)">
           수락
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "alarmComponent",
  data() {
    return {
      pageName: "alarm",
      showBanner: true,
      walkRequests: ["김루나"],
      friendRequests: ["이지은"],
    };
  },
  methods: {
  rejectRequest(index) {
    this.friendRequests.splice(index, 1);
  },
  acceptRequest(index) {
    this.friendRequests.splice(index, 1);
  },
},
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');
.alarmpage {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
.pg_alarm {
  text-align: left;
  font-weight: bold;
  font-size: 3vh;
  color: #4a4a4a;
}

.banner {
  background-color: rgb(92, 86, 86);
  padding: 3%;
  display: flex;
  align-items: center;
  height: 130px;
  box-sizing: border-box;
  justify-content: space-around;
}
.bannerimage {
  width: 80px;
  height: 80px;
}
.bannertext {
  color: #f1f1f1;
  font-size: large;
  margin-left: 2%;
  font-family: 'IBM Plex Sans KR', sans-serif;
}

.alarmlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
}
.alarmbox {
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  padding: 2%;
  box-sizing: border-box;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 2%;
}
.alarmpng {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 2%;
}

.friend-request {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.asktitle {
  font-weight: bold;
  font-size: larger;
}

.alarm_yn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.friendreject {
  width: 40%;
  background-color: #7a7878;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2vh;
}
.friendaccept {
  width: 40%;
  background-color: #585757;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2vh;
}
</style>