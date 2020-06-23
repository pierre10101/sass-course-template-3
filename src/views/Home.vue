<template>
  <div class="content">
    <Sidebar />
    <HotelView />
  </div>
</template>
<script>
import Sidebar from "@/components/SidebarComponent";
import HotelView from "@/components/HotelViewComponent";
export default {
  name: "Home",
  components: {
    Sidebar,
    HotelView
  }
};
</script>
