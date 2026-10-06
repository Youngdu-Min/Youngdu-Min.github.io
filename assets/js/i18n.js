/*
 * EN / KO language switch
 * - [data-i18n="key"]     : innerHTML을 KO 사전 값으로 교체 (영어 원문은 DOM에서 보관)
 * - [data-i18n-msg="key"] : 폼 검증 메시지(data-msg 속성) 교체
 * - [data-i18n-href="key"]: 링크 주소(href 속성) 교체
 * - [data-i18n-code]      : 코드 블록 문자열 값만 치환 후 highlight.js 재적용
 * - .en-only              : 한국어 모드에서 숨김 (style.css)
 * - .typed                : data-typed-items 교체 후 'i18n:change' 이벤트로 Typed.js 재생성
 */
(function () {
    var STORAGE_KEY = 'lang';

    var KO_TITLE = '민영두 - 게임 개발자 이력서';
    var KO_TYPED_ITEMS = '"게임 개발자", "Unity 개발자", "모바일 게임 개발자"';

    var KO_CODE_REPLACEMENTS = [
        ['"Unity game developer"', '"Unity 게임 개발자"'],
        ['"Youngdu Min"', '"민영두"'],
        ['"Incheon, Korea"', '"인천, 대한민국"'],
        ['{"English", "Korean"}', '{"영어", "한국어"}'],
        ['{"Running", "Indie Gaming", "Band Music", "Reading"}', '{"러닝", "인디 게임", "밴드 음악", "독서"}']
    ];

    var KO = {
        'profile.name': '민영두',

        'nav.home': '홈',
        'nav.about': '소개',
        'nav.skills': '기술',
        'nav.resume': '이력',
        'nav.portfolio': '포트폴리오',
        'nav.contact': '연락처',
        'nav.download': '이력서 다운로드',
        'nav.downloadFile': 'assets/other/Youngdu_Min_Resume_KO.docx',

        'about.title': '소개',
        'about.heading': '자기소개',
        'about.desc': 'WebGL, iOS, Android 여러 플랫폼에서 서비스를 만들어 온 3년 차 Unity 개발자입니다. FSM 기반 AI를 구현한 게임을 Steam에 출시했고, 다양한 장르에서 5개 이상의 프로젝트를 출시까지 함께했습니다.',

        'facts.title': '수상 경력',
        'facts.prize': '수상:',
        'facts.kqs.title': '2025 한국품질만족도 (교육 - 초등수학)',
        'facts.kqs.place': '1위',
        'facts.kqs.project': '<b>똑똑! 수학탐험대</b> - 수학 교육 앱.',
        'facts.kqs.desc': '"똑똑! 수학탐험대"의 핵심 시스템을 설계하고 리팩토링했습니다. 라이브 서비스에서도 빠르고 안정적으로 동작하도록 다듬어, 에듀테크 부문 품질 평가 1위에 힘을 보탰습니다.',
        'facts.sbcf.title': 'SBCF(Seoul Book & Contents Fair) 2021 게임 부문',
        'facts.sbcf.place': '2위',
        'facts.sbcf.project': '<b>Keyboard Invader</b> - 2D 슈팅 게임.',
        'facts.sbcf.desc': '3주 동안 프로그래밍을 혼자 맡아 완성했는데, 정말 즐거운 경험이었습니다.',

        'skills.title': '기술',
        'skills.general': '일반:',
        'skills.architecture': '아키텍처:',
        'skills.sdks': 'SDK 및 에셋:',
        'skills.unitTests': '유닛 테스트',
        'skills.storePublishing': 'Google Play / App Store 출시',
        'skills.steamPublishing': 'Steam 출시',
        'skills.multithreading': '멀티스레딩',
        'skills.lifecycle': 'Unity 생명주기',
        'skills.euler': '오일러 각, 짐벌 락',
        'skills.assetBundles': 'AssetBundle 및 Addressables',
        'skills.profiler': 'Unity 프로파일러',
        'skills.singleton': '싱글톤 패턴과 그 한계',
        'skills.patterns': '팩토리, 유한 상태 머신(FSM), MVC, 옵저버, 전략 패턴',

        'resume.title': '이력',
        'resume.certification': '자격증',
        'resume.eip.name': '정보처리기사',
        'resume.eip.issuer': '한국산업인력공단',
        'resume.eip.desc': '소프트웨어 설계·개발부터 데이터베이스, 프로그래밍 언어, 정보시스템 구축 등 전반적 역량을 검증하는 국가기술자격입니다.',
        'resume.istqb.desc': '소프트웨어 테스트 방법론과 QA 프로세스에 대한 기초 지식을 인증받았습니다.',
        'resume.education': '학력',
        'resume.knou.degree': '컴퓨터과학 학사',
        'resume.knou.period': '2025 - 재학 중',
        'resume.knou.school': '한국방송통신대학교',
        'resume.knou.desc': '컴퓨터과학과에서 학사 과정을 밟고 있습니다.',
        'resume.jangan.degree': '게임콘텐츠과 전문학사',
        'resume.jangan.school': '장안대학교',
        'resume.jangan.desc': '게임콘텐츠를 전공하고 전문학사 학위를 받았습니다.',
        'resume.experience': '경력',
        'resume.cemware.role': 'Unity 개발자',
        'resume.cemware.period': '3년',
        'resume.cemware.company': '셈웨어 (Cemware)',
        'resume.cemware.item1': '앱 용량을 줄이고 성능을 끌어올려 더 많은 사용자가 쾌적하게 쓸 수 있도록 했고, 대형 업데이트를 거쳐 사용자 수가 전년보다 167% 늘어나는 데 기여했습니다.',
        'resume.cemware.item2': '반복되는 수작업을 자동화하는 Unity 에디터 툴을 직접 만들어 작업 효율을 높였습니다.',
        'resume.cemware.item3': '레거시 코드를 재사용 가능한 모듈 단위 컴포넌트로 리팩토링해, 유지보수와 확장이 쉬운 구조로 바꿨습니다.',
        'resume.cemware.item4': ' WebGL, iOS, Android 멀티플랫폼 빌드·배포 및 운영을 담당했습니다.',
        'resume.cemware.item5': 'AR Foundation과 MRTK2로 인터랙티브 시뮬레이션용 AR/VR 콘텐츠를 개발했습니다.',

        'portfolio.title': '포트폴리오',
        'portfolio.filter.all': '전체',
        'portfolio.filter.game': '게임',
        'portfolio.filter.edtech': '에듀테크',
        'portfolio.filter.jam': '게임잼',
        'portfolio.divider': '<i class="bx bx-book-open"></i> 실무 프로젝트 · 에듀테크',
        'portfolio.hollow.desc': '다양한 기믹의 적 AI와 여러 페이즈로 이루어진 보스전이 특징인 횡스크롤 액션 슈터입니다. 7인 팀의 메인 클라이언트 개발을 맡았고, Steam 출시까지 전 과정을 참여했습니다.',
        'portfolio.gunSlash.desc': '최대 4명이 함께 즐기는 로컬 멀티플레이 슈터입니다. 여러 입력 장치를 동시에 처리하는 입력 시스템과 다양한 무기 메커니즘을 만들었습니다.',
        'portfolio.optionAdventure.desc': 'Beaver Jam 2023 (Smilegate)에서 5인 팀이 40시간 동안 만든 게임입니다. 리드 프로그래머로서 플레이어 조작과 옵션에 따라 달라지는 스탯 시스템을 구현했습니다.',
        'portfolio.diceKnight.desc': 'GMTK Game Jam 2022에서 6인 팀이 48시간 동안 만든 게임입니다. 적 AI와 주사위 결과에 따라 버프·디버프가 걸리는 시스템을 구현했습니다.',
        'portfolio.keyboardInvader.desc': '키마다 다른 탄환이 나가는 2D 우주 슈팅 게임입니다. 3인 팀의 리드 프로그래머로 참여했고, Seoul Book & Contents Fair 2021에서 2위에 올랐습니다.',
        'portfolio.karmaDefence.desc': '5인 팀에서 프로그래밍을 혼자 맡았습니다. 유닛 AI, 플레이어 스킬, 스테이지 퀘스트, 오브젝트 풀링, Unity 에디터 툴까지 개발 전반을 담당했습니다.',
        'portfolio.gravityMiner.desc': '7인 팀의 메인 프로그래머로, 핵심 게임플레이와 물리 메커니즘을 포함해 개발 대부분을 맡았습니다.',
        'portfolio.dungeonKeyboarder.desc': 'GMTK Game Jam 2020에서 4인 팀이 48시간 동안 만든 게임입니다. 협업하는 법을 몸으로 익힌 초기 팀 프로젝트로, 이후 게임잼 활동의 밑거름이 되었습니다.',
        'portfolio.toctoc.desc': '8명 이상의 팀에서 리드 프로그래머를 맡았습니다. 라이브 서비스의 핵심 시스템을 설계하고 리팩토링해, 사용자 수가 전년보다 167% 늘어나는 데 기여했습니다.',
        'portfolio.immersionSim.desc': 'AR Foundation과 MRTK2로 만든 몰입형 시뮬레이션 시리즈입니다. 여러 프로젝트에서 인터랙티브 AR/VR 교육·시뮬레이션 콘텐츠를 개발했습니다.',

        'tag.game': '<i class="bx bx-joystick"></i> 게임',
        'tag.solo': '1인 개발',
        'tag.jam': '게임잼',
        'tag.edtech': '<i class="bx bx-book-open"></i> 에듀테크',
        'tag.award.sbcf': '🏆 SBCF 2021 2위',
        'tag.award.kqs': '🏆 2025 한국품질만족도 1위',

        'genre.sideScroller': '2D 액션 횡스크롤',
        'genre.localMulti': '로컬 멀티플레이 액션',
        'genre.rpgPlatformer': 'RPG / 플랫포머',
        'genre.action': '액션',
        'genre.shooter': '슈팅',
        'genre.defence': '디펜스',
        'genre.platformer': '플랫포머',
        'genre.mathEdu': '수학 교육',
        'genre.simulation': '시뮬레이션',

        'contact.title': '연락하기',
        'contact.subtitle': '업무 관련 문의라면 언제든 편하게 연락 주세요 ;)',
        'contact.location': '위치:',
        'contact.locationValue': '인천, 대한민국',
        'contact.email': '이메일:',
        'contact.link': '링크',

        'form.name': '이름',
        'form.nameMsg': '4자 이상 입력해 주세요',
        'form.email': '이메일',
        'form.emailMsg': '올바른 이메일을 입력해 주세요',
        'form.subject': '제목',
        'form.subjectMsg': '제목을 8자 이상 입력해 주세요',
        'form.message': '메시지',
        'form.messageMsg': '메시지를 입력해 주세요',
        'form.loading': '전송 중',
        'form.sent': '메시지가 잘 전송되었습니다. 감사합니다, 좋은 하루 보내세요!',
        'form.send': '메시지 보내기',

        'footer.madeBy': '사이트 제작:',
        'footer.name': '민영두',
        'footer.designedBy': '원본 디자인:'
    };

    var textElements = document.querySelectorAll('[data-i18n]');
    var msgElements = document.querySelectorAll('[data-i18n-msg]');
    var hrefElements = document.querySelectorAll('[data-i18n-href]');
    var codeElements = document.querySelectorAll('[data-i18n-code]');
    var typedElement = document.querySelector('.typed');
    var langButtons = document.querySelectorAll('.lang-btn');

    // 영어 원문 보관 (영어로 되돌릴 때 사용)
    var enTitle = document.title;
    var enTexts = Array.prototype.map.call(textElements, function (element) { return element.innerHTML; });
    var enMsgs = Array.prototype.map.call(msgElements, function (element) { return element.getAttribute('data-msg'); });
    var enHrefs = Array.prototype.map.call(hrefElements, function (element) { return element.getAttribute('href'); });
    var enCodes = Array.prototype.map.call(codeElements, function (element) { return element.textContent; });
    var enTypedItems = typedElement ? typedElement.getAttribute('data-typed-items') : null;

    function toKoreanCode(code) {
        return KO_CODE_REPLACEMENTS.reduce(function (result, pair) {
            return result.split(pair[0]).join(pair[1]);
        }, code);
    }

    function applyLanguage(lang, isInitial) {
        var isKo = lang === 'ko';

        document.documentElement.setAttribute('lang', lang);
        document.title = isKo ? KO_TITLE : enTitle;

        textElements.forEach(function (element, i) {
            var key = element.getAttribute('data-i18n');
            element.innerHTML = isKo && KO.hasOwnProperty(key) ? KO[key] : enTexts[i];
        });

        msgElements.forEach(function (element, i) {
            var key = element.getAttribute('data-i18n-msg');
            element.setAttribute('data-msg', isKo && KO.hasOwnProperty(key) ? KO[key] : enMsgs[i]);
        });

        hrefElements.forEach(function (element, i) {
            var key = element.getAttribute('data-i18n-href');
            element.setAttribute('href', isKo && KO.hasOwnProperty(key) ? KO[key] : enHrefs[i]);
        });

        codeElements.forEach(function (element, i) {
            element.textContent = isKo ? toKoreanCode(enCodes[i]) : enCodes[i];
            // 최초 적용 시에는 hljs.initHighlightingOnLoad가 이후에 하이라이팅하므로 생략
            if (!isInitial && window.hljs) window.hljs.highlightBlock(element);
        });

        if (typedElement) {
            typedElement.setAttribute('data-typed-items', isKo ? KO_TYPED_ITEMS : enTypedItems);
        }

        langButtons.forEach(function (button) {
            button.classList.toggle('active', button.getAttribute('data-lang') === lang);
        });

        if (!isInitial) {
            document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
        }
    }

    function loadLanguage() {
        try {
            return localStorage.getItem(STORAGE_KEY) === 'ko' ? 'ko' : 'en';
        } catch (e) {
            return 'en';
        }
    }

    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* 저장 불가 환경(시크릿 모드 등)에서는 무시 */ }
    }

    langButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var lang = button.getAttribute('data-lang');
            if (document.documentElement.getAttribute('lang') === lang) return;
            saveLanguage(lang);
            applyLanguage(lang, false);
        });
    });

    var savedLang = loadLanguage();
    if (savedLang !== 'en') applyLanguage(savedLang, true);
})();
