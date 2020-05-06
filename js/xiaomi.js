	// $('.tit2_b > .tit2_sp1').attr("flag","aaaa");
	// console.log($('.tit2_b > .tit2_sp1').attr("flag"));
	// if(($('.tit2_b > .tit2_sp1').attr("flag"))==="aaaa"){
	// 	console.log("true")
	// }


$('.myjd > .jd >.title > .tit2 > .tit2_b > .tit2_sp1').mouseover(function(){
	$(this).attr("flag","1");
	$('.myjd > .jd >.title > .tit2 > .tit2_b > .tit2_sp2').attr("flag","0");
	if(($(this).attr("flag"))==="1"){
		$(this).css({
			"color" : "orange",
			"border-bottom": "3px solid orange",
			"padding-bottom" : "5px",
			"cursor" : "pointer"
		});
		$('.myjd > .jd >.title > .tit2 > .tit2_b > .tit2_sp2').css({
			"color" : "black",
			"border-bottom": "3px solid #F5F5F5",
			"padding-bottom" : "5px",
			"cursor" : "pointer"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_img > img').attr({
			"src" : "miimage/d4.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p1').text("米家互联网空调C1（一级能效）");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p2').text("变频节能省电，自清洁");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').text("2599元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').text("2799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_img > img').attr({
			"src" : "miimage/d5.jpg"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p1').text("米家空调");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p2').text("出众静音，快速制冷热");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').text("1699元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').text("1799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_img > img').attr({
			"src" : "miimage/d6.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p1').text("米家互联网洗烘一体机 Pro 10kg");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p2').text("智能洗烘，省心省力");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').text("2999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').text("2999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_img > img').attr({
			"src" : "miimage/d7.jpg"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p1').text("小米电视4A 32英寸");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p2').text("人工智能系统，高清液晶屏");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp1').text("699元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp2').text("799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_img > img').attr({
			"src" : "miimage/d8.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p1').text("Redmi全自动波轮洗衣机1A 8kg");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p2').text("一键操作，父母都爱用");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').text("799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').text("699元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_img > img').attr({
			"src" : "miimage/d9.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p1').text("小米全面屏电视E55A");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p2').text("全面屏设计，人工智能语音");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').text("1799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').text("2099元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_img > img').attr({
			"src" : "miimage/d10.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p1').text("15.6 四核i7 16G 独显 512G");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p2').text("全面均衡的国民轻薄本");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').text("4699元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').text("4899元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd > .content > .cnt_ul > .cnt_ul_b > #cnt4 > #img1 > img').attr({
			"src" : "miimage/d12.png"
		});
	}
})

// $('.tit2_b > .tit2_sp1').mouseout(function(){
// 	$(this).attr("flag","0");
// 	if((($(this).attr("flag"))==="0")&&(($('.tit2_b > .tit2_sp2').attr("flag"))==="1")){
// 		$(this).css({
// 			"color" : "black",
// 			"border-bottom": "3px solid #F5F5F5",
// 			"padding-bottom" : "5px",
// 			"cursor" : "pointer"
// 		});
// 		console.log($('.tit2_b > .tit2_sp1').attr("flag")+"sp1out");
// 	}else if((($(this).attr("flag"))==="0")&&(($('.tit2_b > .tit2_sp2').attr("flag"))==="0")){
// 		$(this).css({
// 			"color" : "orange",
// 			"border-bottom": "3px solid orange",
// 			"padding-bottom" : "5px",
// 			"cursor" : "pointer"
// 		});
// 		console.log($('.tit2_b > .tit2_sp1').attr("flag")+"sp1out");
// 	}
// })

$('.myjd > .jd >.title > .tit2 > .tit2_b > .tit2_sp2').mouseover(function(){
	$(this).attr("flag","1");
	$('.myjd > .jd >.title > .tit2 > .tit2_b > .tit2_sp1').attr("flag","0");
	if(($(this).attr("flag"))==="1"){
		$(this).css({
			"color" : "orange",
			"border-bottom": "3px solid orange",
			"padding-bottom" : "5px",
			"cursor" : "pointer"
		});
		$('.myjd > .jd >.title > .tit2 > .tit2_b > .tit2_sp1').css({
			"color" : "black",
			"border-bottom": "3px solid #F5F5F5",
			"padding-bottom" : "5px",
			"cursor" : "pointer"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_img > img').attr({
			"src" : "miimage/e1.jpg"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p1').text("小米电视4A 32英寸");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p2').text("人工智能系统，高清液晶屏");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').text("699元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').text("799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_img > img').attr({
			"src" : "miimage/e2.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p1').text("小米全面屏电视E55A");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p2').text("全面屏设计，人工智能语音");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').text("1799元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').text("2099元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_img > img').attr({
			"src" : "miimage/e3.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p1').text("小米全面屏电视E55A");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p2').text("全面屏设计，人工智能语音");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').text("2999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').text("2999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_img > img').attr({
			"src" : "miimage/e4.jpg"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p1').text("小米电视4X 43英寸");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p2').text("FHD全高清屏，人工智能语音");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp1').text("1199元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp2').text("1499元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_a > #cnt4 > .cnt_d_p > .cntd_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_img > img').attr({
			"src" : "miimage/e5.jpg"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p1').text("小米电视4C 55英寸");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p2').text("4K HDR，人工智能系统");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').text("1699元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').text("1999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt1 > .cnt_a_p > .cnta_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_img > img').attr({
			"src" : "miimage/e6.jpg"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p1').text("小米电视4A 65英寸");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p2').text("4K HDR，人工智能语音系统");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').text("2599元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').text("2999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt2 > .cnt_b_p > .cntb_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_img > img').attr({
			"src" : "miimage/e7.webp"
		});
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p1').text("小米壁画电视 65英寸");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p1').css({
			"font-size" : "15px",
			"margin-bottom" : "5px",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p2').text("壁画外观，全面屏，远场语音");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p2').css({
			"font-size" : "12px",
			"margin-bottom" : "10px",
			"color" : "darkgray"
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').text("6999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp1').css({
			"font-size" : "15px",
			"color" : "#FF6709",
		})
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').text("9999元");
		$('.myjd > .jd >.content > .cnt_ul > .cnt_ul_b > #cnt3 > .cnt_c_p > .cntc_p3 >.sp2').css({
			"font-size" : "15px",
			"color" : "#B0B0B0",
			"text-decoration" : "line-through",
		})
		
		$('.myjd > .jd > .content > .cnt_ul > .cnt_ul_b > #cnt4 > #img1 > img').attr({
			"src" : "miimage/e8.png"
		});
	}

})

$('.hang > .d1').mouseover(function(){
	$('.hang > .d1 > .dp > .ma').css({
		"display" : "block"
	})
})

$('.hang > .d1').mouseout(function(){
	$('.hang > .d1 > .dp > .ma').css({
		"display" : "none"
	})
})

	var i = 0;
	var j = 0;
	var lengtn1 = 0;
	var lengtn2 = 0;
$('.sgfather > .shangou > .title > span > #right').click(function(){
	i++;
	length1 = -i*992;
	if(i>=3){
		i = 2;
		$('.sgfather > .shangou > .content > .cntmove > .aaa').css({	
			"transform" : "translateX(1984)",
			"transition" : "all 0.5s"
		})
	}else{
		$('.sgfather > .shangou > .content > .cntmove > .aaa').css({
			"transform" : "translateX("+length1+"px"+")",
			"transition" : "all 0.5s"
		})
	}


})

$('.sgfather > .shangou > .title > span > #left').click(function(){
	i--;
	length1 = -i*992;
	if(i<0){
		i = 0;
		$('.sgfather > .shangou > .content > .cntmove > .aaa').css({	
			"transform" : "translateX(0)",
			"transition" : "all 0.5s"
		})
	}else{
		$('.sgfather > .shangou > .content > .cntmove > .aaa').css({
			"transform" : "translateX("+length1+"px"+")",
			"transition" : "all 0.5s"
		})
	}
})

// $('.tit2_b > .tit2_sp2').mouseout(function(){
// 	$(this).attr("flag","0");
// 	if((($(this).attr("flag"))==="0")&&(($('.tit2_b > .tit2_sp1').attr("flag"))==="1")){
// 		$(this).css({
// 			"color" : "black",
// 			"border-bottom": "3px solid #F5F5F5",
// 			"padding-bottom" : "5px",
// 			"cursor" : "pointer"
// 		});
// 		console.log($('.tit2_b > .tit2_sp1').attr("flag")+"sp1out");
// 	}else if((($(this).attr("flag"))==="0")&&(($('.tit2_b > .tit2_sp1').attr("flag"))==="0")){
// 		$(this).css({
// 			"color" : "orange",
// 			"border-bottom": "3px solid orange",
// 			"padding-bottom" : "5px",
// 			"cursor" : "pointer"
// 		});
// 		console.log($('.tit2_b > .tit2_sp1').attr("flag")+"sp2out");
// 	}
// })

// $('.myvideo > .video > .content > #cnt1 > img').mouseover(function(){
// 	$('.myvideo > .video > .content > #cnt1 > .play').css({
// 		"background" : "darkorange",
// 		"border" : "2px solid darkorange"
// 	})
// })
