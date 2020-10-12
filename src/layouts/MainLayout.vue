<template>
  <q-layout view="lHh Lpr lFf">
<Header />
    <q-page-container style="padding-bottom:121px">
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import Header from 'components/Header'
import Footer from 'components/Footer'

export default {
  name: 'MainLayout',
  components: {Header, Footer },
  data () {
    return {
    }
  }
}
</script>
