/*
 * EN / KO language switch
 * - [data-i18n="key"]     : innerHTML을 KO 사전 값으로 교체 (영어 원문은 DOM에서 보관)
 * - [data-i18n-msg="key"] : 폼 검증 메시지(data-msg 속성) 교체
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

        'about.title': '소개',
        'about.heading': '자기소개',
        'about.desc': 'WebGL, iOS, Android 멀티플랫폼 서비스 경험을 갖춘 3년 차 Unity 개발자입니다. FSM 기반 AI 시스템을 구현한 Steam 타이틀을 출시했으며, 다양한 장르의 출시 프로젝트 5개 이상에 참여했습니다.',

        'facts.title': '수상 경력',
        'facts.prize': '수상:',
        'facts.kqs.title': '2025 한국품질만족도 (교육 - 초등수학)',
        'facts.kqs.place': '1위',
        'facts.kqs.project': '<b>똑똑! 수학탐험대</b> - 수학 교육 앱.',
        'facts.kqs.desc': '"똑똑! 수학탐험대"의 핵심 시스템을 설계·리팩토링하여 라이브 서비스 환경에서 높은 성능과 안정성을 확보했고, 에듀테크 분야 높은 품질 평가 획득에 기여했습니다.',
        'facts.sbcf.title': 'SBCF(Seoul Book & Contents Fair) 2021 게임 부문',
        'facts.sbcf.place': '2위',
        'facts.sbcf.project': '<b>Keyboard Invader</b> - 2D 슈팅 게임.',
        'facts.sbcf.desc': '3주 동안 프로그래밍 파트를 혼자 완성했습니다. 즐거운 경험이었습니다.',

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
        'skills.singleton': '싱글톤과 그 단점',
        'skills.patterns': '팩토리, 유한 상태 머신(FSM), MVC, 옵저버, 전략 패턴',

        'resume.title': '이력',
        'resume.subtitle': '지금까지 걸어온 길을 정리했습니다.',
        'resume.certification': '자격증',
        'resume.eip.name': '정보처리기사',
        'resume.eip.issuer': '한국산업인력공단',
        'resume.eip.desc': '소프트웨어 설계·개발, 데이터베이스, 프로그래밍 언어, 정보시스템 구축 관리 역량을 검증하는 국가기술자격',
        'resume.istqb.desc': '소프트웨어 테스트 방법론과 품질 보증 프로세스에 대한 기초 지식 검증',
        'resume.education': '학력',
        'resume.knou.degree': '컴퓨터과학 학사',
        'resume.knou.period': '2025 - 재학 중',
        'resume.knou.school': '한국방송통신대학교',
        'resume.knou.desc': '컴퓨터과학과 이학사 과정.',
        'resume.jangan.degree': '게임콘텐츠과 전문학사',
        'resume.jangan.school': '장안대학교',
        'resume.jangan.desc': '게임콘텐츠 전공 전문학사.',
        'resume.experience': '경력',
        'resume.cemware.role': 'Unity 개발자',
        'resume.cemware.period': '3년',
        'resume.cemware.company': '셈웨어 (Cemware)',
        'resume.cemware.item1': '앱 용량 축소와 성능 최적화로 제품 확장성과 사용자 접근성을 높여, 전년 대비 사용자 수 167% 성장에 기여했습니다.',
        'resume.cemware.item2': '반복적인 수작업을 자동화하는 커스텀 Unity 에디터 툴을 개발해 생산성을 향상시켰습니다.',
        'resume.cemware.item3': '레거시 코드를 모듈화된 재사용 가능한 핵심 컴포넌트로 리팩토링해 유지보수성과 확장성을 개선했습니다.',
        'resume.cemware.item4': 'WebGL, iOS, Android 멀티플랫폼 배포 및 유지보수를 주도했습니다.',
        'resume.cemware.item5': 'AR Foundation과 MRTK2를 활용해 인터랙티브 시뮬레이션용 AR/VR 콘텐츠를 개발했습니다.',

        'portfolio.title': '포트폴리오',
        'portfolio.subtitle': '최근 작업물 모음',
        'portfolio.filter.all': '전체',
        'portfolio.filter.game': '게임',
        'portfolio.filter.edtech': '에듀테크',
        'portfolio.filter.jam': '게임잼',
        'portfolio.divider': '<i class="bx bx-book-open"></i> 실무 프로젝트 · 에듀테크',
        'portfolio.hollow.desc': 'FSM 기반 적 AI와 다단계 보스전을 갖춘 횡스크롤 액션 슈터. 7인 팀의 핵심 프로그래머로 참여했으며, Steam 출시 파이프라인 전체를 담당했습니다.',
        'portfolio.gunSlash.desc': '커스텀 멀티 입력 시스템과 독창적인 무기 메커니즘으로 최대 4인 동시 플레이를 지원하는 로컬 멀티플레이 슈터.',
        'portfolio.optionAdventure.desc': 'Beaver Jam 2023 (Smilegate) — 40시간, 5인 팀. 리드 프로그래머로서 플레이어 조작과 옵션 기반 스탯 시스템을 구현했습니다.',
        'portfolio.diceKnight.desc': 'GMTK Game Jam 2022 — 48시간, 6인 팀. 적 AI와 주사위 기반 버프/디버프 시스템을 구현했습니다.',
        'portfolio.keyboardInvader.desc': '3인 팀, 리드 프로그래머. 키마다 고유한 탄환이 발사되는 2D 우주 슈팅 게임. Seoul Book & Contents Fair 2021에서 2위를 수상했습니다.',
        'portfolio.karmaDefence.desc': '5인 팀, 단독 프로그래머. 유닛 AI, 플레이어 스킬, 스테이지 퀘스트 시스템, 오브젝트 풀링, 커스텀 Unity 에디터 툴까지 전체 개발을 담당했습니다.',
        'portfolio.gravityMiner.desc': '7인 팀, 주 프로그래머. 핵심 게임플레이와 물리 메커니즘을 포함한 개발 대부분을 담당했습니다.',
        'portfolio.dungeonKeyboarder.desc': 'GMTK Game Jam 2020 — 48시간, 4인 팀. 협업 워크플로우를 익히고 이후 게임잼 활동의 기반이 된 초기 팀 프로젝트입니다.',
        'portfolio.toctoc.desc': '8인 이상 팀, 리드 프로그래머. 라이브 서비스를 위한 핵심 시스템을 설계·리팩토링하여 전년 대비 사용자 수 167% 성장에 기여했습니다.',
        'portfolio.immersionSim.desc': 'AR Foundation과 MRTK2를 활용한 몰입형 시뮬레이션 제품군. 여러 프로젝트에 걸쳐 인터랙티브 AR/VR 교육·시뮬레이션 콘텐츠를 개발했습니다.',

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
        'contact.subtitle': '업무 관련 문의는 언제든 편하게 연락 주세요 ;)',
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
        'form.sent': '메시지가 전송되었습니다. 감사합니다, 좋은 하루 보내세요!',
        'form.send': '메시지 보내기',

        'footer.madeBy': '직접 제작한 웹사이트:',
        'footer.name': '민영두',
        'footer.designedBy': '원본 디자인:'
    };

    var textElements = document.querySelectorAll('[data-i18n]');
    var msgElements = document.querySelectorAll('[data-i18n-msg]');
    var codeElements = document.querySelectorAll('[data-i18n-code]');
    var typedElement = document.querySelector('.typed');
    var langButtons = document.querySelectorAll('.lang-btn');

    // 영어 원문 보관 (영어로 되돌릴 때 사용)
    var enTitle = document.title;
    var enTexts = Array.prototype.map.call(textElements, function (element) { return element.innerHTML; });
    var enMsgs = Array.prototype.map.call(msgElements, function (element) { return element.getAttribute('data-msg'); });
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
