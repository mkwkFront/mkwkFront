<template>
  <div id="Friendrankpg">
    <!-- top -->
    <Header :title="pageTitle" />
    <div class="Rank_middle">
      <!-- <div class="myRank_wrap">
        <h3 id="myRank">친구 랭킹</h3>
      </div> -->
      <div class="buttons_container">
        <button @click="MyRankPage" class="rank_button">나의 랭킹</button>
        <button @click="FriendRankPage" class="click_rank_button">친구 랭킹</button>
      </div>

      <div class="rank_margin">
        <!-- <div class="rank"> -->
          <h3 class="top_10">TOP 10</h3>
          <div
            class="green-rank"
            v-for="(friend, index) in sortedFriends.slice(0, 10)"
            :key="index"
          >
            <p v-if="index === 0" class="rank-icon">&#x1F947;</p>
            <p v-else-if="index === 1" class="rank-icon">&#x1F948;</p>
            <p v-else-if="index === 2" class="rank-icon">&#x1F949;</p>
            <div class="friend-container">
              <div class="profile">
                <img :src="friend.img" />
              </div>
              <div class="friend-info">
                <p class="title-name">{{ friend.name }}</p>
                <p class="walk-content">총 {{ friend.range }}KM 산책</p>
                <p>총 {{ friend.time }}시간 산책</p>
                <p>동반 산책 : {{ friend.mate }}회</p>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>

  </div>
</template>

<script>
import data from "../../assets/rankData.js";
import Header from '@/components/Header.vue';

export default {
  name: "friendrankComponent",
  components: {
    Header,
  },
  data() {
    return {
      data: data,
      pageTitle: "랭킹"
    };
  },
  methods: {
    MyRankPage() {
      this.$router.push("/ranking");
    },
    FriendRankPage() {
      this.$router.push("/friendRank");
    },
  },
  computed: {
    sortedFriends() {
      // friends 배열을 range 값에 따라 내림차순으로 정렬하여 반환하는 새로운 배열을 생성
      const sortedArr = [...this.data[1].friends].sort(
        (a, b) => b.range - a.range
      );
      return sortedArr;
    },
  },
};
</script>

<style scoped>
#Friendrankpg {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.green-rank {
  position: relative; /* 부모 요소에 대해 상대적인 위치 설정 */
  margin: 5%;
  margin-bottom: 7%;
}

.profile {
  width: 33%;
  height: 33%;
  border-radius: 50%;
  overflow: hidden;
  margin: 2%;
  padding-right: 4%;
}
.rank-icon {
  position: absolute; /* 이미지에 대해 절대적인 위치 설정 */
  left: -25px;
  top: -70px;
  font-size: 50px;
  height: 100px; /* 이미지 크기 설정 */
  z-index: 1; /* 이미지를 다른 요소들 위로 렌더링하기 위한 z-index 설정 */
}

.title-name{
  padding-bottom: 3%;
}
</style>