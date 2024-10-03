<template>
  <div>
    <Header />
    <FullScreen />
    <Video />
    <Description />
    <Levels />
    <Artisans />
    <ProjectTeam />
    <Nature />
    <NearbyPoints />
    <Form />
    <Footer />
    <Modal />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import FullScreen from "@/components/sections/FullScreen.vue";
import Video from "@/components/sections/Video.vue";
import Description from "@/components/sections/Description.vue";
import Levels from "@/components/sections/levels/Levels.vue";
import Form from "@/components/sections/Form.vue";
import NearbyPoints from "@/components/sections/NearbyPoints.vue";
import Artisans from "@/components/sections/artisans/Artisans.vue";
import ProjectTeam from "@/components/sections/ProjectTeam.vue";
import Nature from "@/components/sections/Nature.vue";
import Modal from "@/components/modals/Modal.vue";
export default {
  components: {
    Header,
    FullScreen,
    Video,
    Description,
    Levels,
    Form,
    NearbyPoints,
    Artisans,
    ProjectTeam,
    Footer,
    Nature,
    Modal,
  },
};
</script>
