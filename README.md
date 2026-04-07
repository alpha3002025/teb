# teb (text-extracting-briefing) Gemini CLI Skill

`teb`는 PPT 슬라이드 이미지나 PDF 페이지 이미지에서 텍스트를 추출하거나 핵심 내용을 요약(Briefing)해주는 Gemini CLI 전용 스킬입니다.

이 스킬은 프로젝트의 `.gemini/skills/teb` 디렉토리에 위치하며, 워크스페이스 전용 스킬로 작동합니다.

## 주요 기능

### 1. ppt-slides
PPT 슬라이드 이미지들로부터 텍스트를 추출하거나 내용을 정리합니다.

- **텍스트 추출 모드 (`--extracting`)**: 슬라이드의 모든 텍스트를 구조화하여 추출합니다.
- **통찰 모드 (`--briefing`)**: 슬라이드 전체의 흐름과 핵심 메시지를 요약합니다.

### 2. pdf-images
책이나 문서의 페이지 이미지들로부터 텍스트를 추출하거나 내용을 정리합니다.

- **텍스트 추출 모드 (`--extracting`)**: 이미지 내의 텍스트를 원형 그대로 추출합니다.
- **통찰 모드 (`--briefing`)**: 페이지의 주요 논제와 상세 분석 내용을 요약합니다.

## 지원 옵션 및 포맷

- **모드 옵션**: `--extracting` (추출), `--briefing` (요약)
- **출력 포맷 (`--output-format`)**: `md` (기본), `txt`, `toml`
- **자동 디렉토리 생성**: 지정된 출력 파일의 상위 디렉토리가 없으면 자동으로 생성합니다.

## 사용 예시

### PPT 슬라이드 분석
```bash
# 텍스트 추출 (마크다운)
/teb:ppt-slides --extracting --output-format md ./slide-images output/result.md

# 내용 요약 (텍스트)
/teb:ppt-slides --briefing --output-format txt slide1.png slide2.png output/summary.txt
```

### PDF 페이지 분석
```bash
# 텍스트 추출 (TOML)
/teb:pdf-images --extracting --output-format toml ./page-images output/data.toml

# 내용 요약 (마크다운)
/teb:pdf-images --briefing --output-format md page1.png page2.png output/briefing.md
```

## 설치 및 위치
본 스킬은 프로젝트 루트의 `.gemini/skills/teb`에 위치해야 정정상적으로 작동합니다.
```text
.
└── .gemini/
    └── skills/
        └── teb/
            ├── SKILL.md
            ├── scripts/
            └── templates/
```
