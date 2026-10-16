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
        ['{"Korean", "English (technical reading)"}', '{"한국어", "영어 (기술 문서 독해)"}'],
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
        'nav.downloadFile': 'assets/other/Youngdu_Min_Resume.pdf',

        'about.title': '소개',
        'about.heading': '자기소개',
        'about.desc': '교육 앱을 iOS·Android·WebGL로 3년간 라이브 운영하며 최적화와 배포를 맡고, 사이드 프로젝트로 Steam 게임을 출시한 Unity 클라이언트 프로그래머입니다.',

        'facts.title': '수상 경력',
        'facts.prize': '수상:',
        'facts.kqs.title': '2025 한국품질만족도 (교육 - 초등수학)',
        'facts.kqs.place': '1위',
        'facts.kqs.project': '<b>똑똑! 수학탐험대</b> - 수학 교육 앱.',
        'facts.kqs.desc': '교사 요구에 맞춘 라이브 서비스 개선과 "똑똑! 수학탐험대"의 앱 용량·성능 최적화로 1위 수상에 기여했습니다.',
        'facts.sbcf.title': 'SBCF(Seoul Book & Contents Fair) 2021 게임 부문',
        'facts.sbcf.place': '2위 (우수상)',
        'facts.sbcf.project': '<b>Keyboard Invader</b> - 2D 슈팅 게임.',
        'facts.sbcf.desc': '3주 동안 프로그래밍 전체를 혼자 맡아 완성했습니다.',

        'skills.title': '기술',
        'skills.g.unity': 'Unity:',
        'skills.g.csharp': 'C# & 아키텍처:',
        'skills.g.gameplay': '게임플레이:',
        'skills.g.networking': '네트워킹:',
        'skills.g.platforms': '플랫폼 & 출시:',
        'skills.g.quality': '품질 & 협업:',
        'skills.i.soArchitecture': 'ScriptableObject 기반 아키텍처',
        'skills.i.profiler': 'Unity 프로파일러',
        'skills.i.timeline': 'Timeline (컷신)',
        'skills.i.editorTools': '커스텀 에디터 툴',
        'skills.i.patterns': '팩토리, FSM, MVC, 옵저버, 전략 패턴',
        'skills.i.async': '비동기 프로그래밍 (UniTask, async/await, 코루틴)',
        'skills.i.algorithms': '알고리즘: MST, A*, Union-Find',
        'skills.i.otherLangs': 'Python, C++ (기초)',
        'skills.i.ai': '일반 적 · 다단계 보스 AI (FSM, Corgi Engine AI Brain 확장)',
        'skills.i.combat': '전투, 무기, 특수 능력',
        'skills.i.systems': '대화, 퀘스트, 저장 시스템',
        'skills.i.pooling': '오브젝트 풀링',
        'skills.i.localization': '현지화 (한국어 / 영어)',
        'skills.i.procgen': '시드 기반 결정적 절차적 생성',
        'skills.i.miniGames': '캐주얼 교육 미니게임 (8종 이상, 공통 구조 설계)',
        'skills.i.fishnet': 'FishNet (서버 권한 구조, SyncVar / RPC, 중도 참여 동기화)',
        'skills.i.interop': 'WebGL ↔ JavaScript 연동',
        'skills.i.unet': 'UNet (프로토타입)',
        'skills.i.storeRelease': 'App Store / Google Play 빌드·심사·출시',
        'skills.i.steamRelease': 'Steam 출시 파이프라인',
        'skills.i.webglDeploy': 'WebGL 테스트 서버 검증 → CDN 배포',
        'skills.i.chromebook': '크롬북 / 웨일북 WebGL 지원',
        'skills.i.testing': '테스트 케이스 설계 및 교차 검증, ISTQB CTFL',
        'skills.i.git': 'Git (팀 워크플로우 운영), 개발 매뉴얼 작성',
        'skills.i.ai_dev': 'AI 보조 개발 (Claude Code) + 직접 검증',

        'resume.title': '이력',
        'resume.certification': '자격증',
        'resume.eip.name': '정보처리기사',
        'resume.eip.issuer': '한국산업인력공단',
        'resume.eip.desc': '소프트웨어 설계·개발부터 데이터베이스, 프로그래밍 언어, 정보시스템 구축 등 전반적 역량을 검증하는 국가기술자격입니다.',
        'resume.istqb.desc': '소프트웨어 테스트 방법론과 QA 프로세스에 대한 기초 지식을 인증받았습니다.',
        'resume.education': '학력',
        'resume.knou.degree': '컴퓨터과학 학사',
        'resume.knou.period': '2025 - 2027 (졸업 예정)',
        'resume.knou.school': '한국방송통신대학교',
        'resume.knou.desc': '컴퓨터과학과에서 학사 과정을 밟고 있습니다.',
        'resume.jangan.degree': '게임콘텐츠과 전문학사',
        'resume.jangan.school': '장안대학교',
        'resume.jangan.desc': '게임콘텐츠를 전공하고 전문학사 학위를 받았습니다.',
        'resume.experience': '경력',
        'resume.cemware.role': 'Unity 개발자',
        'resume.cemware.period': '2022.08 – 2025.07 (3년)',
        'resume.cemware.company': '셈웨어 (Cemware)',
        'resume.cemware.item1': '교사 요구에 맞춘 서비스 개선과 앱 용량·성능 최적화로 다운로드 수 전년 대비 167% 성장에 기여',
        'resume.cemware.miniGames': '캐주얼 교육 미니게임 8종 이상 신규 개발, 교육과정 개편·라이브 이슈에 맞춰 기존 미니게임 대부분 개선. 추상 클래스와 인터페이스 컴포지션 기반 공통 구조·데이터 기반 설정 설계',
        'resume.cemware.item2': '범용 슬라이싱 UI 이미지로 대체 가능한 에셋 교체, 미사용 에셋 정리, 텍스처 압축 일괄 적용 에디터 툴로 전 플랫폼 빌드 용량 1GB 이상 → 350MB 이하(약 70%) 절감',
        'resume.cemware.item3': 'WebGL 초기 로딩 메모리 절감 및 메모리 누수 해결, 학교용 크롬북·웨일북의 WebGL 로딩 실패 해결, OS 버전별 사용자 분석을 바탕으로 Android 최소 API 레벨 상향',
        'resume.cemware.item4': 'LMS 임베딩 및 AI 백엔드 연동 (학습 분석, 문제 추천)',
        'resume.cemware.item5': '레거시 코드를 재사용 가능한 모듈형 컴포넌트로 리팩토링, 에디터 툴 개발 (리포트용 CSV 추출, 루트/컴포넌트 기준 프리팹 검색)',
        'resume.cemware.item6': 'Git 워크플로우 운영 및 릴리스 담당: App Store / Google Play 빌드·심사·출시, WebGL은 테스트 서버 검증 후 CDN 배포',
        'resume.cemware.item7': 'AR Foundation, VRTK, MRTK2 기반 AR/VR 인터랙티브 콘텐츠 개발, 저장/불러오기 및 UGC 지원을 위한 WebGL ↔ JavaScript JSON 연동',
        'resume.cemware.item8': '고객사 펌프 시뮬레이션 소프트웨어의 UI 인터랙션 및 시뮬레이션 로직 구현 (2인 팀)',

        'portfolio.title': '포트폴리오',
        'portfolio.filter.all': '전체',
        'portfolio.filter.game': '게임',
        'portfolio.filter.edtech': '에듀테크',
        'portfolio.filter.jam': '게임잼',
        'portfolio.divider': '<i class="bx bx-book-open"></i> 실무 프로젝트 · 에듀테크',
        'portfolio.unitSystem.desc': '팀 프로젝트(중단) 안에서 혼자 설계해 모듈로 공개했습니다. ScriptableObject 프리셋 기반의 클래스형 FSM, 부위별 피격 판정, 상태 이상, 보스 페이즈 제어, Animator 없이 동작하는 애니메이션 컨트롤러를 갖췄습니다.',
        'portfolio.hollow.desc': 'Corgi Engine 기반 사이드 프로젝트(12개 스테이지 + 보스 스테이지 5개)입니다. 7인 팀의 리드 프로그래머로, AI Brain에 보스 페이즈 관리와 State/Decision 추적·복구 기능을 확장해 일반 적 9종과 다단계 보스 5종의 AI를 만들었습니다. 탄 패링, 그래플링 건, 한/영 현지화, Timeline 컷신을 구현하고 Steam 출시 과정 전체를 담당했습니다.',
        'portfolio.gunSlash.desc': 'Corgi Engine 기반의 최대 4인 로컬 멀티플레이 슈터입니다. 공유 입력을 키보드 2개 + 게임패드 4개로 분리하고, 플레이어와 입력 장치를 고르는 경기 전 로비를 추가했습니다.',
        'portfolio.optionAdventure.desc': 'Beaver Jam 2023 (Smilegate)에서 5인 팀이 40시간 동안 만든 게임입니다. 리드 프로그래머로서 플레이어 조작과 옵션에 따라 달라지는 스탯 시스템을 구현했습니다.',
        'portfolio.diceKnight.desc': 'GMTK Game Jam 2022에서 6인 팀이 48시간 동안 만든 게임입니다. 적 AI와 주사위 결과에 따라 버프·디버프가 걸리는 시스템을 구현했습니다.',
        'portfolio.keyboardInvader.desc': '3인 팀의 리드 프로그래머로, 3주 동안 프로그래밍 전체를 맡았습니다. 키마다 다른 탄환이 나가는 2D 우주 슈팅 게임으로, 적 2종, 2페이즈 보스 AI, 상점과 UI를 만들었습니다.',
        'portfolio.karmaDefence.desc': '5인 팀의 단독 프로그래머로 참여했습니다(2020–2021, Google Play 출시, 서비스 종료). 유닛 AI, 플레이어 스킬, 별 보상이 있는 스테이지 퀘스트, 2배씩 동적 확장되는 다중 타입 오브젝트 풀링, 기획자용 커스텀 인스펙터를 만들었습니다.',
        'portfolio.gravityMiner.desc': '대학 7인 팀의 메인 프로그래머로 참여했습니다(2019–2020). 속도 기반 밟기 전투와 고유한 블록 기믹 등 핵심 게임플레이와 물리 대부분을 구현했습니다.',
        'portfolio.dungeonKeyboarder.desc': 'GMTK Game Jam 2020에서 4인 팀이 48시간 동안 만든 게임입니다. 씬 전환, 카메라 셰이크, 파티클을 담당했습니다.',
        'portfolio.toctoc.desc': 'KERIS 디지털 교과서와 연계된 수학 앱으로, iOS·Android·WebGL로 서비스합니다. 개발자 8명(인턴 포함 최대 12명), 리드 프로그래머로서 캐주얼 교육 미니게임 8종 이상을 개발하고, 다운로드 수 전년 대비 167% 성장에 기여했으며, 빌드 용량을 1GB 이상에서 350MB 이하(약 70%)로 줄였습니다.',
        'portfolio.immersionSim.desc': 'AR Foundation, VRTK, MRTK2로 만든 몰입형 시뮬레이션 시리즈입니다. 여러 프로젝트에서 인터랙티브 AR/VR 교육·시뮬레이션 콘텐츠를 개발했고, 저장/불러오기와 UGC 지원을 위한 WebGL ↔ JavaScript 연동을 구현했습니다.',

        'tag.game': '<i class="bx bx-joystick"></i> 게임',
        'tag.solo': '1인 개발',
        'tag.jam': '게임잼',
        'tag.edtech': '<i class="bx bx-book-open"></i> 에듀테크',
        'tag.award.sbcf': '🏆 SBCF 2021 2위 (우수상)',
        'tag.award.kqs': '🏆 2025 한국품질만족도 1위',
        'link.featureDemo': '기능 시연',
        'link.code': '코드',

        'genre.sideScroller': '2D 액션 횡스크롤 · 사이드 프로젝트',
        'genre.unitFramework': '재사용 가능한 유닛 프레임워크 · 2025',
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
