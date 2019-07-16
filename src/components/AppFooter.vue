<template>
	<div id="app-footer">
		<nav>
			<router-link to="/home">
				<span><i class="fa fa-home fa-2x"></i>首页</span>
			</router-link>
			<router-link to="/cate">
				<span><i class="fa fa-tasks fa-2x"></i>分类</span>
			</router-link>
			<router-link to="/cart">
				<span><i class="fa fa-shopping-cart fa-2x"></i>购物车</span>
			</router-link>
			<router-link to="/mine">
				<span><i class="fa fa-user-circle fa-2x"></i>我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
import '../assets/css/footer.less'
export default {
  name: 'app-footer'
}
</script>