# 스킬 위치 및 프로젝트 범주 검증

## 1. 개요
`inspection/checklist-v1.md`의 추가 요구사항인 "스킬이 프로젝트 로컬 디렉토리(`.gemini/skills/teb`) 내에 존재하는지"에 대한 검증 및 개선 작업을 수행했습니다. 이는 전역 설정(`~/.gemini/...`)이 아닌 현재 프로젝트 내에서만 동작하도록 보장하기 위함입니다.

## 2. 작업 내용
- [x] **디렉터리 생성**: 프로젝트 루트에 `.gemini/skills/teb` 폴더를 생성했습니다.
- [x] **파일 이동**: 기존 루트에 산재해 있던 `SKILL.md`, `scripts/`, `templates/` 파일들을 `.gemini/skills/teb/` 하위로 일괄 이동하였습니다.
- [x] **플래닝 업데이트**: `planning/plan.md`의 Phase 1 항목에 스킬 위치 요구사항을 추가하고 완료 상태로 변경했습니다.

## 3. 검증 결과 (Verification Results)
- 현재 프로젝트의 하위 경로인 `.gemini/skills/teb/` 내에 모든 핵심 파일들이 위치하고 있음을 확인했습니다.
- 이를 통해 Gemini CLI가 이 프로젝트를 로드할 때 해당 경로의 스킬을 "Workspace Skill"로 올바르게 인식하고 실행할 수 있는 구조를 갖추었습니다.

```bash
# 디렉터리 구조 확인
.gemini/
└── skills
    └── teb
        ├── SKILL.md
        ├── scripts
        │   ├── crawler.js
        │   └── formatter.js
        └── templates
            ├── brief_pdf.md
            ├── brief_slides.md
            ├── extract_pdf.md
            └── extract_slides.md
```

## 4. 최종 체크리스트 결과
- [x] `./.gemini/skills/teb` 내에 스킬 파일들이 위치함.
- [x] 출력 경료 부재 시 자동 생성 로직 작동 확인.
- [x] `ppt-slides`, `pdf-images` 명령어 명세 및 프롬프트 설계 완료.

---
**작업 결과**: 체크리스트의 모든 항목을 충족하도록 환경 설정 및 구현이 완료되었습니다.
