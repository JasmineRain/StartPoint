<template>
    <div class="content">
        <div class="calendar">
            <calendar-view
                    :show-date="showDate"
                    class="theme-default holiday-us-traditional holiday-us-official">
                <calendar-view-header
                        slot="header"
                        slot-scope="t"
                        :header-props="t.headerProps"
                        @input="setShowDate" />
            </calendar-view>
        </div>
    </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
require("vue-simple-calendar/static/css/default.css");
require("vue-simple-calendar/static/css/holidays-us.css");
export default {
  name: "Calendar",
  components: {
    CalendarView,
    CalendarViewHeader
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.calendar {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 67vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
