import 'magnific-popup';

export default function popup() {
	// Define data for the popup
	var data = [
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/member-1.jpg',
			userTag: '医師', 
			userNameJa: '伊藤 玲哉',
			userNameEn: 'Reiya Ito',
			userRole: 'トラベルドクター/旅行医',
			userMessage: 'メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/member-2.jpg',
			userTag: '介護士', 
			userNameJa: '横山 大周',
			userNameEn: 'Person 2',
			userRole: 'マネジメント',
			userMessage: 'Message Person 2'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/member-3.jpg',
			userTag: '看護師', 
			userNameJa: '田中 大敦',
			userNameEn: 'Person 3',
			userRole: 'ページ構成サポート',
			userMessage: 'Message Person 3'
		}
	];

	// initalize popup
	$('.js-popup-trigger').each(function(){
	  var $this = $(this),
	      index = $this.data('index');
	  
	    $this.magnificPopup({ 
		    key: 'my-popup', 
		    items: data,
		    index: index,
		    type: 'inline',
		    closeBtnInside: true,
		    inline: {
		       markup: '<div class="popup white-popup" id="js-popup">'+
						'<div class="popup__content">'+
							'<span class="popup__category mfp-userCategory"></span>'+
							'<div class="popup__image mfp-userImg"></div>'+
							'<div class="popup__details">'+
								'<span class="popup__tag mfp-userTag"></span>'+
								'<p class="popup__name-ja mfp-userNameJa"></p><span class="popup__name-en mfp-userNameEn"></span>'+
								'<p class="popup__role mfp-userRole"></p>'+
								'<span class="popup__message-label">Message</span>'+
								'<p class="popup__message mfp-userMessage"></p>'+
							'</div>'+
						'</div>'+
					'</div>'
	    },
	    gallery: {
	      enabled: true 
	    }
	  });
	});
}