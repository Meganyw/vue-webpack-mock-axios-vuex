<template>
	<div id="category" class="category">
        <Header title="热门分类" backUrl="/"></Header>
		<tab></tab>
	</div>
</template>

<script>

import Tab from '@/components/tab.vue'

export default {
  name: 'category',
  components: {
    Tab
  }
}
</script>