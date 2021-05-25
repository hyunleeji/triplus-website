const best = [
    {
        region: 'Lake Lucerne Rigi',
        country: '스위스 Swiss',
        image: '../../images/mountain-828617_640.jpg',
        description:
        'Rigi는 스위스 중부에 위치한 산으로 높이는 1,798m이다. 루체른 호와 추크 호에 둘러싸여 있으며 루체른주와 슈비츠주 사이에 걸쳐 있다. 여름에는 하이킹, 겨울에는 스키와 썰매를 즐기려는 사람들이 이 곳을 찾는다. 흔히 "산의 여왕"이라는 별칭으로 부르기도 한다. 1871년 5월 21일 유럽 최초의 산악 열차가 개통된 곳이다. 아르트-골다우(Arth-Goldau) 역과 비츠나우(Vitznau) 역을 연결하는 랙 철도, 베기스(Weggis)에서 리기-칼트바트(Rigi-Kaltbad)를 연결하는 곤돌라 리프트, 크레벨(Kräbel) 역에서 리기-샤이데그(Rigi-Scheidegg) 역을 연결하는 케이블카가 운행된다.',
        price: 2600.44,
        ranking: 1
    },
    {
        region: 'Hamillton / Hobbiton',
        country: '뉴질랜드 New Zealand',
        image: '../../images/hobbit-4499692_1920.jpg',
        description:
        '뉴질랜드 와이카토에 있다. 원래 반지의 제왕 실사영화 시리즈 촬영후 철거되었고 당시 촬영지에는 여기서 촬영했습니다 하는 자료사진과 팻말 정도만 남아있었다가,[1] 호빗 실사영화 시리즈를 찍으면서 새롭게 지은 호비튼은 실제 벽돌이나 목재 등을 이용해 영구적으로 건설되었다.',
        price: 1900.99,
        ranking: 2
    },
    {
        region: 'Marburg',
        country: '독일 Germany',
        image: '../../images/Marburg_an_der_Lahn.jpg',
        description:
        '마르부르크안더란 Marburg an der Lahn 라고 부르며 독일 중부, 헤센 주 중서부의 도시. 라인 강 지류 란 강 연변에 있습니다. 인구 7만 6000명이 살고 있습니다. 12세기에 건설된 역사 깊은 도시로 도자기 제조가 성함. 성 엘리자베트교회(1235～83년 건립)는 독일 최고(最古)의 고딕 양식의 건축물이며 이외 옛 사원·극장·성·지하묘지가 있습니다.',
        price: 2400.10,
        ranking: 3
    },
    {
        region: 'Reykjavik',
        country: '아이슬란드 Iceland',
        image: '../../images/iceland.jpg',
        description:
        '아이슬란드의 아담한 수도 레이캬비크는 다양한 즐길거리를 제공합니다. 세계적 수준의 음악과 다양한 건축, 바이킹의 역사와 온천을 자랑하는 레이캬비크를 방문하여 유럽에서 가장 안전한 거리를 거닐어 보세요. 이곳에 여정을 풀고 하루 혹은 수 일에 걸쳐 아이슬란드의 자연 탐험에 나서는 것도 좋습니다.',
        price: 3100.10,
        ranking: 4
    },
    {
        region: 'Cephalonia',
        country: '그리스 Greece',
        image: '../../images/Cephalonia2.jpg',
        description:
        '한적한 분위기가 느껴지는 케팔로니아에서는 섬 풍경, 도서관, 고고학 유적지 등을 꼭 즐기시길 추천합니다. 대표적 명소는 루르다스 해변 및 미르토스 해변 등이 있습니다.',
        price: 2900.40,
        ranking: 5
    },
    {
        region: 'St. Julian',
        country: '몰타 Malta',
        image: '../../images/Julian.jpg',
        description:
        '태양과 바다, 맛있는 몰타 요리를 즐기며 휴식을 취해 보세요. 세인트 줄리안에서는 햇살 가득한 휴가를 즐기기 위해 필요한 모든 것을 찾을 수 있습니다. 한때 초라한 어촌이었던 이곳은 지금은 호텔, 바, 레스토랑으로 가득한 아름다운 해안선의 거대한 휴양 도시가 되었습니다.',
        price: 3400.20,
        ranking: 6
    },
    {
        region: 'Kazan',
        country: '러시아 Russia',
        image: '../../images/kazan.jpg',
        description:
        '볼가강 유역에 있는 러시아 연방 내 타타르스탄 공화국의 수도다. 러시아와 동유럽을 통틀어 가장 오래된 도시 중의 하나로 꼽힌다. 2005년 건도(建都) 1,000년 행사를 했다. 이슬람과 러시아 정교회가 조화를 이루는 도시이며 러시아 제3의 수도라는 명성을 갖고 있다.',
        price: 3400.20,
        ranking: 7
    },
    {
        region: 'Boston',
        country: '미국 America',
        image: '../../images/boston.jpg',
        description:
        '보스턴을 처음 방문하게 되면 먼저 프리덤 트레일을 걸어보세요. 이 해안 도시의 역사와 혁명의 숨결을 확인할 수 있습니다. 몇몇 보스턴 미술관을 탐방하고 특히 수집가의 저택을 미술관으로 활용하는 이사벨라 스튜어트 가드너 박물관의 미술품을 감상해 보세요. 그리고 노스 엔드와 보스턴의 리틀 이탈리아의 노스 엔드와 같은 구시가지를 찾아가 보세요. 그리고 외야석에서 레드 삭스의 게임을 관전하지 않고서는, 진정한 보스턴 문화를 체험했다고 말할 수 없답니다.',
        price: 3400.20,
        ranking: 8
    },
    {
        region: 'Goheung-gun',
        country: '한국 korea',
        image: '../../images/Goheung.jpg',
        description:
        '벌교(筏橋) 부근에서 뻗어내린 소백산맥의 한 지맥이 바다에 가라앉아 생긴 고흥반도는, 가장 좁은 부분의 폭이 3km로 좁고 낮은 지협(地峽)에 의해 육지와 연결된다. 군 전역이 거의 구릉성 산지로 되어 있고, 영남면에 고흥반도 최고봉인 팔영산(해발 608m)이 위치한다. 포두면 해창만(海倉灣)방조제와 도덕면 고흥방조제 그리고 고흥반도 남쪽 오마도 주변을 간척하여 넓은 평야가 조성되어 있다.',
        price: 350.99,
        ranking: 9
    },
    {
        region: 'Hakodate',
        country: '일본 Japan',
        image: '../../images/Hakodate1.jpg',
        description:
        '세계에 손꼽히는 야경을 볼수 있습니다. 볼 것, 돌아다닐 곳, 체험할 수 있는 명소가 넘쳐납니다. 맛있는 음식까지 더해진 하코다테를 즐겨보세요. ',
        price: 1300.99,
        ranking: 10
    },
]

export { best }