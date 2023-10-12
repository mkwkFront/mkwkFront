<template>
  <div id="Myrankingpg">
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
        <p class="top_center">랭킹</p>
        <div class="top_right"></div>
      </div>
    </div>

    <div class="Rank_middle">
      <!-- <div class="myRank_wrap">
        <h3 id="myRank">나의 랭킹</h3>
      </div> -->
      <div class="buttons_container">
        <button @click="MyRankPage" class="click_rank_button">나의 랭킹</button>
        <button @click="FriendRankPage" class="rank_button">친구 랭킹</button>
      </div>

      <!-- 랭킹 데이터 -->
      <div class="rank_margin">
        <!-- <div class="rank"> -->
          <div class="rank-container">
            <h2 class="text_style_title">{{ data[0].title }}</h2>
            <p class="text_style_subtitle">{{ compareCount() }}</p>
            <div class="green-rank">
              <!-- months 데이터 반복문 -->
              <div v-for="month in lastTwoMonths" :key="month.id">
                <p class="text_style_content"> {{ month.month }}월</p>
                <!-- month 그래프 -->
                <div class="graph">
                  <div class="text">{{ month.count }}회</div>
                  <div
                    ref="green"
                    :style="{ width: getGreenWidth(month.count) }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 그래프 추가하고 싶음 -->
          <div class="rank-container">
            <h2 class="text_style_title">{{ data[1].title }}</h2>
            <div class="pink-rank">
              <!-- friends 데이터 반복문 -->
              <div v-for="(friend, index) in sortedFriends" :key="friend.id">
                <div class="friend-container" v-show="friend.count !== 0">
                  <div class="profile">
                    <img :src="friend.img" />
                  </div>
                  <div class="friend-info">
                    <p class="text_style_content">{{ friend.name }}</p>
                    <div class="graph">
                      <div class="text">{{ friend.count }}회</div>
                      <div
                        ref="pink"
                        :style="{ width: getPinkWidth(friend.count) }"
                      ></div>
                    </div>
                  </div>
                </div>
                <!-- 마지막 데이터가 아닐 때만 구분선 표시 -->
                <hr
                  class="friend-separator"
                  v-if="
                    index < sortedFriends.length - 1 &&
                    friend.count !== 0 &&
                    sortedFriends[index + 1].count !== 0
                  "
                />
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- <div class="page-indicator">
      <span class="filled"></span>
      <span class="empty"></span>
      <span class="empty"></span>
      <span class="empty"></span>
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import data from "../../assets/rankData.js";

export default defineComponent({
  name: "rankingComponent",
  data() {
    return {
      pageName: "ranking",
      data: data,
    };
  },
  methods: {
    // PetRankPage() {
    //   // 오른쪽 화살표 버튼이 클릭되었을 때 실행되는 메소드
    //   this.$router.push("/rank/pet");
    // },
    // FamilyRankPage() {
    //   // 왼쪽 화살표 버튼이 클릭되었을 때 실행되는 메소드
    //   this.$router.push("/rank/family");
    // },
    MyRankPage() {
      this.$router.push("/ranking");
    },
    FriendRankPage() {
      this.$router.push("/friendRank");
    },

    //그래프 width 값 조절: 최대 50으로 함
    getGreenWidth(count) {
      // month.count의 값에 따라 .greenanimate의 width 값 계산
      if (count < 51) {
        return `${count * 2}%`;
      } else {
        return `100%`;
      }
    },
    getPinkWidth(count) {
      // month.count의 값에 따라 .pinkanimate의 width 값 계산
      if (count < 51) {
        return `${count * 2}%`;
      } else {
        return `100%`;
      }
    },

    // month.count 비교
    compareCount() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;

      const filteredMonths = this.data[0].months.filter(
        (month) => month.month === currentMonth || month.month === lastMonth
      );
      const countOfCurrentMonth =
        filteredMonths.find((month) => month.month === currentMonth)?.count ||
        0;
      const countOfLastMonth =
        filteredMonths.find((month) => month.month === lastMonth)?.count || 0;

      if (countOfCurrentMonth > countOfLastMonth) {
        return "이번 달 산책 횟수가 저번 달보다 늘었어요!";
      } else if (countOfCurrentMonth < countOfLastMonth) {
        return "이번 달 산책 횟수가 저번 달보다 줄었어요!";
      } else {
        return "이번 달 산책 횟수와 저번 달 산책 횟수가 같아요!";
      }
    },
  },
  computed: {
    sortedFriends() {
      // friends 배열을 count 값에 따라 내림차순으로 정렬하여 반환하는 새로운 배열을 생성
      const sortedArr = [...this.data[1].friends].sort(
        (a, b) => b.count - a.count
      );
      return sortedArr;
    },
    lastTwoMonths() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // JavaScript의 getMonth()는 0부터 시작하므로 +1 해줌
      const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1; // 저번 달 계산
      return this.data[0].months.filter(
        (month) => month.month === currentMonth || month.month === lastMonth
      );
    },
  },
  mounted() {
    this.$nextTick(() => {
      const greenElements = this.$refs.green;
      greenElements.forEach((element) => {
        element.classList.add("greenanimate");
      });

      const pinkElements = this.$refs.pink;
      pinkElements.forEach((element) => {
        element.classList.add("pinkanimate");
      });
    });
  },
});
</script>

<style>
.text_style_title{
  text-align: left;
}
.text_style_subtitle{
  text-align: left;
  padding-left: 2%;
  font-size: 2.1vh;
  color: #353535;
}
.text_style_content{
  text-align: left;
}
#Myrankingpg {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Rank_middle {
  width: 100%;
  height: 90%;
}
/* 페이지 정보*/
.rank-head {
  background-color: #687089;
  padding: 40px 30px 20px 30px;
  color: #ffffff;
  font-size: 25px;
  height: 5vh;
  font-weight: bolder;
  letter-spacing: 20px;
  text-align: center;
}

/* 페이지 정보 바 */
.myRank_wrap {
  width: 100%;
  height: 9%;
  padding: 2%;
  box-sizing: border-box;
}
#myRank {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfefff;
  border-radius: 10px;
  color: #ffffff;
}

/* 페이지 이동 버튼 */
.buttons_container{
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5%;
  margin-bottom: 3%;
}
.rank_button {
  width: 50%;
  height: 100%;
  margin: 3.5%;
  font-size: 15px;
  border: none;
  color: #00c0ff;
  padding: 2%;
  cursor: pointer;
  border-radius: 3vh;
  background-color: #dfefff;
}
.click_rank_button {
  width: 50%;
  height: 100%;
  margin: 3.5%;
  font-size: 15px;
  border: none;
  color: #dfefff;
  padding: 2%;
  cursor: pointer;
  border-radius: 3vh;
  background-color:#00c0ff;
}

/* 페이지 전체 테두리 */
.rank_margin {
  width: 100%;
  height: 80%;
  padding: 3%;
  box-sizing: border-box;
}
.rank {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 5px solid #e7e4e4;
  border-radius: 20px;
  padding: 3%;
  overflow-y: scroll;
}
.rank-container {
  padding-top: 1%;
  padding-bottom: 0.1%;
}

/* 초록 테두리와 핑크 테두리 */
.green-rank {
  background-color: #ffffff;
  border: 2px solid #00c0ff;
  border-radius: 10px;
  margin: 2%;
  padding: 7%;
  margin-bottom: 7%;
}
.pink-rank {
  border: 2px solid #00c0ff;
  border-radius: 10px;
  padding: 7%;
  margin: 2%;
}

/*그래프 */
.graph {
  position: relative;
  width: 100%;
  height: 30px;
  background-color: #dedede;
  margin-top: 1.5%;
  margin-bottom: 3%;
}
.graph .text {
  position: absolute;
  left: 10px;
  top: 4px;
  z-index: 1;
  color: #353535;
  font-size: 2.1vh;
}
.greenanimate {
  height: 30px;
  text-align: center;
  background-color: #dfefff;
  color: #111;
  animation-name: fadegreen;
  animation-duration: 3s;
}
.pinkanimate {
  height: 30px;
  text-align: center;
  background-color: #dfefff;
  color: #111;
  animation-name: fadepink;
  animation-duration: 3s;
}
@keyframes fadegreen {
  0% {
    width: 0%;
  }
  100% {
  }
}
@keyframes fadepink {
  0% {
    width: 0%;
  }
  100% {
  }
}

/* 프로필 사진 */
.friend-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.profile {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.friend-info {
  flex: 1;
  text-align: left;
}

/* 구분선 */
.friend-separator {
  border: 1.5px solid #dddddd;
}

/* 페이지 위치 */
.page-indicator {
  font-size: 24px;
}
.page-indicator span {
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.page-indicator .filled {
  background-color: #000;
  border: 1px solid #000;
}
.page-indicator .empty {
  border: 1px solid #eaeaea;
  background-color: #eaeaea;
}

/* top 가운데 정렬 */
.top_10 {
  text-align: center;
}
</style>
<style>
.arrow-button:hover {
  color: rgb(64, 64, 64);
  font-weight: bolder;
  transform: scale(1, 1);
  transition: all 0.3s;
}
</style>