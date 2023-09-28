<template>
  <div class="NewWalkRecordPage">
    <!--top-->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="../assets/LeftIcon.png"
            @click="$router.go(-1)"
          />
        </div>
        <p class="top_center top_name">산책기록</p>
      </div>
    </div>
    <!-- middle-->
    <div class="middle">
      <div class="middle_top">
        <p class="date-text">오늘은 {{ currentDate }}</p>
        <div class="calendar_icon" @click="toggleModal">📅</div>
      </div>
      <div class="middle_content">
        <div class="record_date" v-if="showRecordPage">
          <p>선택한 날짜 : {{ selectedDate }}</p>
        </div>
        <div class="walkdata_list" v-if="showRecordPage">
          <p>n 번째 산책</p>
        </div>
        
        <div>{{ dataFromBackend }}</div>

      </div>
    </div>
    <!-- 모달창 부분을 추가합니다. v-if로 showModal 변수가 true일 때만 모달창이 나타납니다. -->
    <!-- @click="closeModalOnOverlay" -->
    <div class="modal" v-if="showModal">
      <div class="modal_content">
        <!-- 캘린더 내용 -->
        <div class="calendar">
          <div class="calendar_header">
            <button @click="prevMonth">&lt;</button>
            <span>{{ currentMonth }}</span>
            <button @click="nextMonth">&gt;</button>
          </div>
          <!-- 요일 표시 부분 -->
          <div class="calendar_days week-days">
            <div v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" class="day">
              {{ dayOfWeek }}
            </div>
          </div>
          <div class="calendar_days">
            <div
              v-for="day in daysInMonth"
              :key="day"
              class="day"
              @click="selectDate(day)"
            >
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";

import { defineComponent, ref, computed } from "vue";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  getDay,
} from "date-fns";

export default defineComponent({
  name: "NewWalkRecordpage",
  components: {
    // Modal 컴포넌트 등록
  },
  setup() {
    const currentDate = ref(new Date());
    const showModal = ref(false);
    const currentMonth = ref(new Date());

    const showRecordPage = ref(false);
    const selectedDate = ref("");

    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const daysInMonth = computed(() => {
      const start = startOfMonth(currentMonth.value);
      const end = endOfMonth(currentMonth.value);
      const days = eachDayOfInterval({ start, end });

      // 각 월의 첫째 날짜의 요일을 얻습니다.
      const firstDayOfWeek = getDay(start);

      // 첫째 날짜 이전에는 빈 칸을 생성합니다.
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.unshift(null);
      }

      return days.map((date) => (date ? format(date, "dd") : ""));
    });

    function showCalendarModal() {
      showModal.value = true;
    }
    function closeModal() {
      showModal.value = false;
    }

    function prevMonth() {
      currentMonth.value = subMonths(currentMonth.value, 1);
    }

    function nextMonth() {
      currentMonth.value = addMonths(currentMonth.value, 1);
    }

    function toggleModal() {
      showModal.value = !showModal.value;
    }

    function closeModalOnOverlay() {
      closeModal();
    }

    function selectDate(date) {
      selectedDate.value = date;
      console.log(selectedDate.value);
      closeModal();
      showRecordPage.value = true;
    }

    return {
      currentDate: computed(() =>
        format(currentDate.value, "yyyy년 MM월 dd일")
      ),
      showModal,
      currentMonth: computed(() => format(currentMonth.value, "MMMM yyyy")),
      daysInMonth,
      daysOfWeek,
      showCalendarModal,
      prevMonth,
      nextMonth,
      closeModal,
      toggleModal,
      closeModalOnOverlay,
      showRecordPage,
      selectDate,
      selectedDate,
    };
  },
  methods: {
    toggleButton(button) {
      if (this.selectedButton === button) {
        this.selectedButton = null;
      } else {
        this.selectedButton = button;
      }
      this.showController = this.selectedButton === "controller";
      this.showState = this.selectedButton === "state";
      this.showHistory = this.selectedButton === "history";
    },
  },
  data() {
    return {
      dataFromBackend: null, // 백엔드에서 가져온 데이터를 저장할 변수
      walkKeys: null,
    };
  },
  mounted() {
    // 백엔드 API 엔드포인트로 GET 요청을 보냅니다.
    axios
      .get("http://localhost:8001/BringWalkData")
      .then((response) => {
        // HTTP 요청이 성공하면 백엔드에서 받은 데이터를 변수에 저장하고 화면에 출력합니다.
        this.dataFromBackend = response.data;
        this.walkKeys = this.dataFromBackend.map((item) => item.walkKey); //  배열 만들어서 저장하는 코드
        console.log("walkKeys:", this.walkKeys); // 'walkKeys' 배열 값 출력함
      })

      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  },
});
</script>

<style scoped>
.NewWalkRecordPage {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #f1f8ff;
}
/* top */
.NewWalkRecordPage .top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-end; /* 세로 위에서 70% 지점에 위치 */
  background: #70b4cb;
  padding: 1em;
}
.NewWalkRecordPage .top_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.NewWalkRecordPage .top_center {
  width: 70%;
  height: fit-content;
  color: white;
}
.NewWalkRecordPage .top_left {
  width: 15%;
  height: fit-content;
}
.NewWalkRecordPage .top_name {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;

  color: #ffffff;
}
/* middle */
.NewWalkRecordPage .middle {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.NewWalkRecordPage .middle_top {
  width: 100%;
  height: 5vh;
  background: #f2f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.NewWalkRecordPage .middle_content {
  width: 100%;
  height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.NewWalkRecordPage .record_date {
  height: 5vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.NewWalkRecordPage .walkdata_list {
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
}

/* modal */
.NewWalkRecordPage .modal {
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: transparent;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.NewWalkRecordPage .modal[style*="display: block;"] {
  /* 모달창 열릴 때 애니메이션 효과 추가 */
  animation: modalOpenAnim 0.3s ease-out;
}
@keyframes modalOpenAnim {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.NewWalkRecordPage .modal_content {
  width: 20em;
  height: 22em;
  border: 2px solid #b1c9e0;
  border-radius: 17px;
  padding: 1em;
  box-sizing: border-box;
  animation: modalOpenAnim-4bff843a 0.5s ease-out;
  background-color: rgb(249, 252, 255);
}
.NewWalkRecordPage .calendar_header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  background-color: rgb(249, 252, 255);
}

.NewWalkRecordPage .calendar_days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 8px;
}
.NewWalkRecordPage .day {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
.NewWalkRecordPage .calendar_icon {
  cursor: pointer;
}
.NewWalkRecordPage .calendar_header button {
  background: none;
  border: none;
  cursor: pointer;
}
.NewWalkRecordPage .calendar_header button:hover {
  background-color: #f0f0f0;
}
.NewWalkRecordPage p {
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
</style>