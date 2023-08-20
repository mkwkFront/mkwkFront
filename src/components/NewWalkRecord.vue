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
    <div class="date-icon-container">
      <div class="top_right">
        <p class="date-text"><br />&emsp;&emsp;오늘은 {{ currentDate }}</p>
        <div class="modal-wrapper">
          <div class="calendar-icon" @click="toggleModal"><br />📅</div>
        </div>
      </div>
    </div>

    <!-- 모달창 부분을 추가합니다. v-if로 showModal 변수가 true일 때만 모달창이 나타납니다. -->
    <div class="modal" v-if="showModal" @click="closeModalOnOverlay">
      <div class="modal-content">
        <!-- 캘린더 내용 -->
        <div class="calendar">
          <div class="calendar-header">
            <button @click="prevMonth">&lt;</button>
            <span>{{ currentMonth }}</span>
            <button @click="nextMonth">&gt;</button>
          </div>
          <!-- 요일 표시 부분 -->
          <div class="calendar-days week-days">
<<<<<<< HEAD
            <div v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" class="day">{{ dayOfWeek }}</div>
          </div>
          <div class="calendar-days">
            <div v-for="day in daysInMonth" 
                  @click="selectDay(day)"
                  :key="day" class="['day', { 'today': isToday(day), 'selected-day': isSelectedDay(day) }]">{{ day }}</div>
=======
            <div v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" class="day">
              {{ dayOfWeek }}
            </div>
          </div>
          <div class="calendar-days">
            <div
              v-for="day in daysInMonth"
              :key="day"
              class="day"
              @click="selectDate(day)"
            >
              {{ day }}
            </div>
>>>>>>> 5120ddbada5ac2daec0ed8ad06929113133e33dd
          </div>
        </div>
      </div>
      <button class="close-button" @click="toggleModal">닫기</button>
    </div>

    <div class="record-page" v-if="showRecordPage">
      <p>선택한 날짜 : {{ selectedDate }}</p>
    </div>
  </div>
</template>


<script>
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
});
</script>

<style scoped>
.NewWalkRecordPage {
  background-color: #f1f8ff;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
.WalkRecordPage .top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-end;
  background: #70b4cb;
  padding: 1em;
}
.top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-end; /* 세로 위에서 70% 지점에 위치 */
  background: #70b4cb;
  padding: 1em;
}
.top_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.top_center {
  width: 70%;
  height: fit-content;
  color: white;
}
.top_left {
  width: 15%;
  height: fit-content;
}
.top_right {
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;

  color: rgb(48, 48, 48);
}
.top_name {
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
.modal {
  /* 기존 배경색과 테두리를 없앱니다. */
  background-color: transparent;
  border: none;
  box-shadow: none;
  position: absolute;
  top: -15%;
  left: 0;
  right: 0;
  bottom: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal[style*="display: block;"] {
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
.modal-content {
  background-color: rgb(249, 252, 255);
  padding: 160px;
  width: 10px;
  height: 1%;
  border: 2px solid #b1c9e0;
  border-radius: 17px;
  animation: modalOpenAnim 0.5s ease-out;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent; /* 배경색을 투명하게 설정합니다. */
  z-index: 999;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  background-color: #ffffff;
}
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 8px;
}
.day {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
.calendar-icon {
  cursor: pointer;
}
.calendar-header button {
  background: none;
  border: none;
  cursor: pointer;
}
.calendar-header button:hover {
  background-color: #f0f0f0;
}

.record-page {
  background-color: rgb(247, 156, 156);
  width: 85vw;
  margin: 0 auto;
}
</style>