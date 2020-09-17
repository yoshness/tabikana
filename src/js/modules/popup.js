import 'magnific-popup';

export default function popup() {
	
	// Define data for the popup
	const management = [
		{
			userCategory: '運営チーム',
			userImg_img: './public/assets/images/member-1.jpg',
			userNameJa: '伊藤 玲哉',
			userNameEn: 'Ito Reiya',
			userRole: 'プロジェクト代表',
			userMessage: 'これまで医師として、多くの方の“最期の瞬間”に立ち会いました。ある終末期患者さんの「旅行に行きたい」という言葉をきっかけに、「医療×旅行＝旅行医」をめざしました。 一人でも多くの願いを叶えるため、病気を抱えていても旅行ができる「医師のつくる旅行サポート会社」の設立を決意し、その最初の一歩としてこのプロジェクトを立ち上げました。「旅行へ行きたい」を通じて「今を生きたい」人を応援します。 ',
			userProfile: '昭和大学医学部医学科卒業<br>洛和会音羽病院にて初期後期臨床研修<br>東京都コンテスト「TOKYO STARTUP GATEWAY2019」にて1803件の応募から最優秀賞を受賞. 経済産業省/JETRO主催「始動 Next Innovator 2019 」にて米国シリコンバレー派遣に選抜<br>グロービス経営大学院 2019期生'
		},
		{
			userCategory: '運営チーム',
			userImg_img: './public/assets/images/member-2.jpg',
			userNameJa: '横山 大周',
			userNameEn: 'Yokoyama Hironori',
			userRole: 'マネジメント',
			userMessage: '幼い頃から“ばあちゃんっ子“だった私は社会人になっても遠くに住むばあちゃんによく会いに行っていました。バイバイ！と言うときはいつも「これで最後かもしれない…」そんな思いを持っていました。<br>そんな中、突然の別れ。最期の瞬間にも会うことは出来ませんでした。<br>後悔しないように生きていたつもりでしたが、残った感情は「もっとあんなことができたかもしれない」という後悔ばかり。<br>覚悟をしていた自分でも後悔の念が強いということは、同じような気持ちを持つ方も多いのではないかと考えるようになりました。<br><br>「やり残したことをできないまま一生を終える人がいなくなるように。」<br>「後悔する家族が1人でも少なくなるように。」<br>プロジェクトを通じてそんな社会の実現を目指します。 一人でも多くの願いを叶えるため、病気を抱えていても旅行ができる「医師のつくる旅行サポート会社」の設立を決意し、その最初の一歩としてこのプロジェクトを立ち上げました。「旅行へ行きたい」を通じて「今を生きたい」人を応援します。 ',
			userProfile: '同志社大学政策学部卒業<br>2015年 大手広告会社入社。法人営業、事業企画、新規事業などに従事<br>2020年 独立'
		},
		{
			userCategory: '運営チーム',
			userImg_img: './public/assets/images/member-3.jpg',
			userNameJa: '田中 大敦',
			userNameEn: 'Tanaka Hironobu',
			userRole: '情報発信サポート',
			userMessage: '私自身、アウトドアで行ったことない場所に行ったり、散歩やドライブで通ったことない道を通ったり、「移動」にとても楽しみを感じてきましたし、職業柄「ひとが移動することの意味」や「気軽に楽しく移動する方法」を考えてきました。そんな中「移動」を叶えるための別のアプローチに出会い、少しでも多くの方に、当プロジェクトを周知させたいと感じました。',
			userProfile: '多摩美術大学卒業<br>プロダクトデザイナーとして自動車メーカーに勤務. （日本と北米で6年間車両デザインに携わり、現在は車両に限らず、移動に関連する様々な製品デザインに従事）'
		},
		];

		const medical = [
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/member-1.jpg',
			userNameJa: '伊藤 玲哉',
			userNameEn: 'Ito Reiya',
			userRole: 'トラベルドクター/旅行医',
			userMessage: 'これまで医師として、多くの方の“最期の瞬間”に立ち会いました。ある終末期患者さんの「旅行に行きたい」という言葉をきっかけに、「医療×旅行＝旅行医」をめざしました。 一人でも多くの願いを叶えるため、病気を抱えていても旅行ができる「医師のつくる旅行サポート会社」の設立を決意し、その最初の一歩としてこのプロジェクトを立ち上げました。「旅行へ行きたい」を通じて「今を生きたい」人を応援します。 ',
			userProfile: '昭和大学医学部医学科卒業<br>洛和会音羽病院にて初期後期臨床研修<br>東京都コンテスト「TOKYO STARTUP GATEWAY2019」にて1803件の応募から最優秀賞を受賞. 経済産業省/JETRO主催「始動 Next Innovator 2019 」にて米国シリコンバレー派遣に選抜<br>グロービス経営大学院 2019期生'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/medical-2.jpg',
			userNameJa: '前田 和哉',
			userNameEn: 'Maeda Kazuya',
			userRole: '訪問看護師/かなえるナース',
			userMessage: '病院や在宅の現場でいつも感じていたのは、「医療や介護が必要になっても、生きがいを感じながら過ごしてほしい」という事でした。そんな中、がん末期の義母とフォトウェディングを経験したことで、「私たち医療者が本気で支えれば、きっと実現できないことはない」と確信し、夢を叶える看護サービス『かなえるナース』を立ち上げました。旅行に行きたいというあなたの夢を、私達が全力で支えます',
			userProfile: '京都大学卒。聖隷浜松病院、ケアプロ㈱にて救急看護、訪問看護、管理業務を経験した後に起業。 2018年、保険制度に依存しない看護サービス「かなえるナース」を創業。 日本看護連盟本部にて役員も務める。'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/medical-3.jpg',
			userNameJa: '木村 英生',
			userNameEn: 'Kimura Hideo',
			userRole: '情報発信サポート',
			userMessage: '旅を諦めなかった余命3ヶ月の母、旅を諦めた患者さん、そして「生きがい」を探している患者さん。その出会いで、11年前に「リハビリ旅行」を創設しました。<br>旅行はあくまで人生の通過点であり、そこに行くまでのプロセス(リハビリ)と、旅行後のサポートが重要と考えます。今後も、旅行前～旅行中～旅行後まで諦めないでサポートし続けたいと考えております。その先の「生きがい」探しの為に‥。',
			userProfile: '日本生命相互保険会社　<br>精神科病院～整形外科病院～訪問看護ステーション<br>2010年：「リハビリ旅行」プロジェクト開始<br>2017年：全国介護事業者協議会 全国事例発表会 優秀賞<br>2017年：経済産業省「健康寿命延伸産業創出推進事業」の一環 ヘルスツーリズム認証取得<br><br>キャリアコンサルタント(2級キャリアコンサルタント技能士)/産業カウンセラー/TBS報道の魂「旅に出たリハビリ」他'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/medical-4.jpg',
			userNameJa: '加藤 信一',
			userNameEn: 'Kato Shinichi',
			userRole: '介護福祉士',
			userMessage: '都下の老人ホームで介護職として５年間勤務。 旅行や外出を諦めてしまっている方々を多く見ました。「家族に迷惑をかけたくない」「旅先で体調を崩すことが心配だ」など、不安や遠慮により諦めてしまっている方々の夢を叶えるため、外出サポート事業を起業しました。',
			userProfile: 'これまで約9年間で延べ2千名以上の方々の旅行や外出をサポート。約4年前に、社)日本旅行介護士協会を設立、全国各地で同じ志を持つ仲間と連携し真のバリアフリー社会を創るべく活動中。'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/medical-5.jpg',
			userNameJa: '木原 正昭',
			userNameEn: 'Kihara Masaak',
			userRole: '民間救急サービス',
			userMessage: '世界中の一人でも多くの人が、このプロジェクトを通して【安心・安全・安楽・感動】を感じて頂けるように全力でサポートさせて頂ければ幸いです。 介護旅行と聞くと大げさなものに感じますが、車椅子やストレッチャー(寝台)で何時間もかけて病院の通院をしている方が大勢います。通院は出来るのに外出は出来ないと思い込んでいる方が非常に多いですよね。 通院も立派な外出ですが、たまには行先を変えて楽しみましょう！',
			userProfile: '2020年現在40歳になります。介護保険制度開始前、19歳の時から介護の現場(訪問入浴や施設)で10年働かせて頂きました。 その後、観光バスの運転手を5年経験し介護タクシー会社を起業。<br><br>株式会社かご屋 代表取締役<br>日本旅行介護士協会 理事 <br>世田谷区移動支援センターそとでる 理事'
		},
		{
			userCategory: '医療チーム',
			userImg_img: './public/assets/images/medical-6.jpg',
			userNameJa: '秋吉 壯俊',
			userNameEn: 'Akiyoshi Taketoshi',
			userRole: '不動産業・旅行業',
			userMessage: '私自身が15年前に車イスに乗った父を連れて介護旅行をした経験、かつ約10年介護施設を経営した中で外出や旅行に対する想いや夢を諦めているご利用者様やそのご家族様に多く接し「いつでも行きたい時に、行きたい場所に安心して気兼ねなく行ける世の中を創りたい！」という思いから5年前に高齢者の方に特化した旅行会社を立ち上げました。このプロジェクトに参加し一人でも多くの想いや夢を叶えることができたら嬉しいです。',
			userProfile: '平成15年大学卒業後、大手自動車ディーラーに就職。その後、先代の死去により平成17年株式会社秋吉の代表取締役に就任。主に不動産事業を柱としながら、平成22年には介護事業や保育事業を行う株式会社テイクケアライフを設立。現在は、新たに高齢者の旅行を支援する「介護付き旅行サービス 夢たび」を展開し、活動の範囲を全国に広げている。<br><br>平成23年10月 北海道福祉まちづくりコンクール まちづくり賞 受賞<br>平成28年7月 札幌市「健康関連産業ビジネスモデル構築支援事業」採択<br>平成29年1月 北の企業家特別賞 受賞<br>平成29年9月 サッポロスマイルアワード 大賞受賞<br>令和2年2月 介護甲子園 在宅部門 最優秀賞受賞　'
		},
		];

		const sponsors = [
		{
			userCategory: '協賛企業',
			userImg_img: './public/assets/images/sponsor-1-popup.jpg',
			userNameJa: '村田 栄蔵',
			userNameEn: 'Murata Eizo',
			userRole: '航空会社 / JALグループ',
			userMessage: '航空・観光事業に身を置き、主にお客様より、旅行が与えてくれる楽しさや幸せを肌で感じてきました。伊藤医師との出会いを通じて、その旅行を諦めてしまう方が沢山居ることを知りました。JALグループとして何かお手伝いができないかと考えていた中で、本プロジェクトに参加させていただくことができ大変嬉しく思っております。是非皆さんと一緒に、楽しく幸せな旅行を実現したいです。',
			userProfile: 'JALグループにて航空・観光事業における多数のプロジェクトに従事<br>JAL社内新規事業プログラム「創造の翼 2019」最終選抜<br>大企業挑戦者支援プログラム「CHANGE 2020」選抜<br>経済産業省/JETRO主催「始動 Next Innovator 2020」選抜<br>グロービス経営大学院2020期生'
		},
		{
			userCategory: '協賛企業',
			userImg_img: './public/assets/images/sponsor-2-popup.jpg',
			userNameJa: '白鳥 央',
			userNameEn: 'Hisashi Shiratori',
			userRole: '第一生命',
			userMessage: '本プロジェクトについて初めて伺ったとき、もし伊藤さんが目指す世界を実現すれば、病気を理由に色々なことを諦めざるを得ない状況にいらっしゃる方々にとって、旅行という選択肢が一筋の光になるのではという期待に胸が熱くなりました。治療や延命とは異なるQOL向上の手段の一つとして大いなる可能性を感じたからです。本プロジェクトを通じて、人生に寄り添う役割を担っている生命保険会社としてからも、全力でサポートしていきます。',
			userProfile: '一橋大学経済学部経済学科卒業<br>新卒で第一生命入社. 現在はイノベーション推進部にて新規事業開発を担当<br>経済産業省/JETRO主催「始動 Next Innovator 2019 」にて米国シリコンバレー派遣に選抜 '
		},
		{
			userCategory: '協賛企業',
			userImg_img: './public/assets/images/sponsor-3-popup.jpg',
			userNameJa: '山下真粧子',
			userNameEn: 'Yamashita Masako',
			userRole: '東京海上日動火災保険株式会社 旅行業営業部長',
			userMessage: 'グロービス経営大学院の同級生として出会った玲哉さんが目を輝かせながら語る夢に、感動で心が震え、涙が止まりませんでした。末期ガンの母を介護している個人としても、また損害保険会社で旅行保険を専門に扱う部門に所属している企業人としても、玲哉さんの強い想いを全力で応援します。',
			userProfile: '慶應義塾大学法学部法律学科 卒業<br>グロービス経営大学院 2019期生<br>東京海上日動火災保険株式会社 旅行業営業部長'
		},
		{
			userCategory: '協賛企業',
			userImg_img: './public/assets/images/sponsor-4-popup.jpg',
			userNameJa: '駒下 純兵',
			userNameEn: 'Komashita Junpei',
			userRole: '株式会社ラブグラフ代表取締役',
			userMessage: 'ラブグラフではご家族の写真はもちろん、新たな生命の誕生を写真におさめるためマタニティフォトやニューボーンフォトにも特に注力してまいりました。一方で、どのようにして『人生の最期の瞬間に向き合うか』は常に向き合ってきた課題でした。この度、そこに映る患者様、家族の皆様の笑顔を残せる未来を鮮明に描くことができたため、旅叶プロジェクトと協働させていただきます。『今を生きた証』をラブグラフが心を込めて映し出します。',
			userProfile: '1993年生まれ 大阪府出身。関西大学社会学部卒<br><br>大学から始めたカメラで撮影した「友人カップルの写真」がSNSで話題になり、サイトアクセスは初日で3万PV<br>全国から撮影依頼が入るようになったことを契機に在学中に株式会社ラブグラフを設立し、同社代表取締役に就任<br>2019年、Forbes「アジアを代表する30歳未満の30人 -アート部門-」に唯一の日本人起業家として選出<br>2020年株式会社ミクシィとの資本業務提携を発表. '
		},
		{
			userCategory: '協賛企業',
			userImg_img: './public/assets/images/sponsor-5-popup.jpg',
			userNameJa: '岩井 隆浩',
			userNameEn: 'Iwai Takahiro',
			userRole: '会社経営/ドローンオペレーター',
			userMessage: '弊社では創業以来一貫してお身体の不自由な皆様へバーチャルツアーを提供してきました。 これまで本当に多くのご家族へ「笑顔になれるお手伝い」をさせて頂いている事を嬉しく思っています。 私自身、祖父と父が病で寝たきりになり、病院で看取る経験しております。あのとき、この「夢叶」があれば私の家族にも選択肢が増えていたかもしれません。 今を生きている皆様に笑顔をお届けできるお手伝いをこのプロジェクトでも出来たら幸いです。',
			userProfile: '自身で立ち上げた会社でバーチャルツアーサービス「空力車」を展開中。2019年に主催：日本UAS産業振興協議会/共催：Drone Fundのドローンビジネスチャレンジプラスにてベストチャレンジ賞を受賞。 経済産業省/JETRO主催「始動 Next Innovator 2020」に採択。'
		}
	];

	// initalize popup
	$('.js-popup-trigger').each(function(){
	  let $this = $(this),
	      index = $this.data('index');

	    let data;

	    if($this.data('set') == 'medical') {
	    	data = medical;
	    }
	    else if($this.data('set') == 'sponsors') {
	    	data = sponsors;
	    }
	    else {
	    	data = management;
	    }
	  
	    $this.magnificPopup({ 
		    key: 'my-popup', 
		    items: data,
		    index: index,
		    type: 'inline',
		    closeOnBgClick: false,
		    inline: {
		       markup: '<div class="popup white-popup" id="js-popup">'+
							'<div class="popup__content">'+
								'<span class="popup__category mfp-userCategory"></span>'+
								'<div class="popup__image mfp-userImg"></div>'+
								'<div class="popup__details">'+
									'<p class="popup__name-ja mfp-userNameJa"></p><span class="popup__name-en mfp-userNameEn"></span>'+
									'<p class="popup__role mfp-userRole"></p>'+
									'<span class="popup__message-label">Message</span>'+
									'<p class="popup__message mfp-userMessage"></p>'+
									'<span class="popup__message-label">Profile</span>'+
									'<p class="popup__message mfp-userProfile"></p>'+
								'</div>'+
							'</div>'+
						'</div>'
	    	},
		    gallery: {
		      enabled: true 
		    },
		    callbacks: {
			    open: function() {
			      	$('.js-popup-close').show();
			      	$('html, body').addClass('is-locked');
			    },
			    close: function() {
			     	$('.js-popup-close').hide();
			     	$('html, body').removeClass('is-locked');
			    }
		  	}
	  	});

	  	$('.js-popup-close').on('click', function(e) {
	  		e.preventDefault();
			$.magnificPopup.close();
		});
	});
}