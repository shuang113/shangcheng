<template>
	<div class="popup-wrapper">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
    .popup-slide-enter-active, .popup-slide-leave-active {
    	&.popup-wrapper{
    		transition: all .5s;
    		.popup-bottom,.popup-center{
    			transition: all .3s ease;
    		}
    	}
    }
    .popup-slide-enter, .popup-slide-leave-active {
    	&.popup-wrapper{
    		opacity: 0;
    		.popup-bottom,.popup-center{
    			transform: translate3d(0, 100%, 0);
	        	opacity: 0;   		
    		}
    	}
    }
	.popup-wrapper{
		.static-body;
		z-index:999;
		background-color: @alpha-black;
		display: flex;
		justify-content:center;
		align-items:center;
	}
	.popup-bottom{
		.static-position(bottom);
		z-index: 1000;
		background-color: @color-white;
	}
	.bottom-title{
		height:@input-height;
		line-height:@input-height;
		text-align: center;
		font-size: @font-size-medium-x;
		color:@color-text;
		border-bottom:@line-height solid @color-gray;
	}
	.bottom-items{
		height: @input-height;
		line-height: @input-height;
		margin:0 @box-margin;
		position: relative;
		border-bottom:@line-height solid @color-gray;
		b{
			font-size: @font-size-small;
		}
		&.active{
			.icon-dui{
				background-color: @color-theme;
				border:1px solid @color-theme;
			}
		}
		.icon-dui{
			position: absolute;
			top:50%;
			right:@box-margin;
			width:0.5rem;
			height:0.5rem;
			line-height: 0.5rem;
			text-align: center;
			font-size: @font-size-medium;
			border-radius: 100%;
			border:1px solid @color-gray-b;
			transform:translateY(-50%);
			color:@color-white;
			background-color: @color-white;
		}
	}
	.bottom-submit{
		height: @title-height;
		line-height: @title-height;
		text-align: center;
		background-color: @color-theme;
		color:@color-white;
	}
	.popup-center{
		z-index: 1000;
		background-color: @color-white;
		width:7.8rem;
		border-radius: 0.15rem;
	}
	.center-tips{
		padding:0.82rem 0;
		font-size:@font-size-medium-x;
		text-align:center;
	}
	.center-control{
		display: flex;
		justify-content:center;
		align-items:center;
		.button{
			display:inline-block;
			width: 50%;
			text-align: center;
			box-sizing: border-box;
			border-top:@1px solid @color-gray;
			height:@input-height;
			line-height: @input-height;
			&:first-child{
				border-right:@1px solid @color-gray;
			}
		}
	}
</style>